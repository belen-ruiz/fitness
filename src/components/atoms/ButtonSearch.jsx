import React, { useState } from 'react'
import SearchIcon from "@mui/icons-material/Search";
import {exerciseOp, fetchData} from "../../hooks/fetchData";
import { CloseRounded } from '@mui/icons-material';

export const ButtonSearch = () => {
    const [search, setSearch] = useState()
    const [result, setResult] = useState([])  
    const [isOpen, setIsOpen] = useState(false)

    const handleChange = (e) => {
        setSearch(e.target.value.toLowerCase());
    };
    
    const handleSearch = async () => {
    if (search){
        const allDb = await fetchData(`https://api.themoviedb.org/3/search/multi?api_key=0c17a380a966eb856907e4b64bd5374a&language=en-US&query=${search}<&page=1&include_adult=false
        `, exerciseOp)
        const results = allDb.results
        setResult(results)
        console.log(results)
        setSearch("")
    }}

    const searchIconIn = <SearchIcon onClick={handleSearch}/> 
    
  return (
    <div className='container-search flex-center'>
        {isOpen ? 
        <div className='input-search'>
            <div className='search-box flex-center'>
                <input className='search'
                id="search"
                type="search"
                label="Search by movie, tv showr or people"
                value={search}
                onChange={handleChange}
                sx={{ width: 200 }}
                icon={searchIconIn}/>
                                
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
