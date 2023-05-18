import { CloseRounded } from '@mui/icons-material';
import SearchIcon from "@mui/icons-material/Search";
import {exerciseOp, fetchData} from "../../hooks/fetchData";
import { Results } from '../../pages/Results';
import { useContext, useState, useEffect, createContext } from "react";
import { useSearchContext } from '../../context/SearchProvider';


export const SearchBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const { 
      handleChange,
      handleSearch,
      searchParams,
      handleFocus  } = useSearchContext()
    
  return (
      <div className='container-search flex-center'>
          {isOpen ? 
          <div className='input-search'>
              <div className='search-box flex-center'>
                  <input className='search'
                  id="search"
                  type="search"
                  label="Search by movie, tv showr or people"
                  value={searchParams.keyword}
                  onChange={handleChange}
                  onFocus={handleFocus}/>
                                  
                  <SearchIcon onClick={handleSearch}/> 

                  <div className='icon-close flex-center' onClick={()=>setIsOpen(false)}> 
                      <CloseRounded /> 
                  </div> 
              </div>
          </div>
          
          :

          <div className='icon-search flex-center' onClick={()=>setIsOpen(true)}> 
          <SearchIcon /> 
          </div>
          }
      </div>
  )
}