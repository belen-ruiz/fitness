import { CloseRounded } from '@mui/icons-material';
import SearchIcon from "@mui/icons-material/Search";
import {exerciseOp, fetchData} from "../hooks/fetchData";
import { Results } from '../pages/Results';
import { useSearchParams } from "react-router-dom";
import { ItemListContainer } from '../components/items/ItemListContainer';
import { useContext, useState, useEffect, createContext } from "react";

const SearchContext = createContext([]);
export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
    const [search, setSearch] = useState()
    const [results, setResults] = useState([])  
    const [searchParams, setSearchParams] = useSearchParams()

    const handleChange = (e) => {
      if (e.target.value) {
          setSearch(e.target.value.toLowerCase());
        } else {
          setSearch("undefined");
        }
    };  
    
    const handleSearch = async () => {
      if (search){
          const allDb = await fetchData(`https://api.themoviedb.org/3/search/multi?api_key=0c17a380a966eb856907e4b64bd5374a&language=en-US&query=${search}<&page=1&include_adult=false
          `, exerciseOp)
          const res = allDb.results
          setResults(res)
          setSearch("")
          //setSearchParams("")
        }}

    useEffect(() => {
      if (!search) {setSearchParams("")}
      else { 
        setSearchParams({"keyword": search})
       }
    }, [search])
        
  return (
    <SearchContext.Provider
      value={{
        results,
        search,
        handleChange,
        handleSearch,
        searchParams
        }} >
        {children}
    </SearchContext.Provider>
  )
}