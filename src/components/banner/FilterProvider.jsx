import { CloseRounded } from '@mui/icons-material';
import SearchIcon from "@mui/icons-material/Search";
import {exerciseOp, fetchData} from "../hooks/fetchData";
import { Results } from '../pages/Results';
import { useNavigate, useSearchParams } from "react-router-dom";
import { ItemListContainer } from '../components/items/ItemListContainer';
import { useContext, useState, useEffect, createContext } from "react";

const FilterContext = createContext([]);
export const useFilterContext = () => useContext(FilterContext);

export const FilterProvider = ({ children }) => {
    const [filter, setFilter] = useState()
    const [results, setResults] = useState([])  
    const [filterParams, setFilterParams] = useSearchParams()
    const navigate = useNavigate()

    const handleChange = (e) => {
      if (e.target.value) {
            setFilter(parseInt(e.target.value));
        } else {
            setFilter("undefined");
        }
    };  
    
    const handleSearch = async (e) => {
      e.preventDefault()
      if (filter){
          const allDb = await fetchData(`https://api.themoviedb.org/3/search/multi?api_key=0c17a380a966eb856907e4b64bd5374a&language=en-US&query=${search}<&page=1&include_adult=false
          `, exerciseOp)
          const res = allDb.results
          setResults(res)
          setFilter("")
          setFilterParams("")
       }
    }

    useEffect(() => {
      if (!filter) {setFilterParams("")}
      else { 
        setFilterParams({"keyword": filter})
       }
    }, [filter])

    console.log(filter)
    console.log(results)
        
  return (
    <SearchContext.Provider
      value={{
        filter,
        results,
        handleChange,
        handleSearch,
        filterParams
        }} >
        {children}
    </SearchContext.Provider>
  )
}