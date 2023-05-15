import React, { useEffect, useState } from 'react'
import { CloseRounded } from '@mui/icons-material';
import SearchIcon from "@mui/icons-material/Search";
import {exerciseOp, fetchData} from "../hooks/fetchData";
import { Results } from '../pages/Results';

export const SearchBar = () => {
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

    useEffect(() => {
      // const searchResults = () => {
      //   if (result){
            
      //   }}
      // searchResults()
    
      return () => {
        <Results />
      }
    }, [result])
    

    

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




// import { Stack, Box, Container, TextField } from "@mui/material";
// import { useEffect, useState } from "react";
// import SearchIcon from "@mui/icons-material/Search";
// import {exerciseOp, fetchData} from "../hooks/fetchData";
// // import { HorizontalScrollBar } from "./HorizontalScrollBar";
// import { Typography } from "@mui/material";
// import { SettingsSystemDaydreamTwoTone } from "@mui/icons-material";
// import { ItemListContainer } from "../components/items/ItemListContainer";

// export const SearchBar = ({ category, setCatList, setCategory }) => {
//   const [search, setSearch] = useState("");
//   const [result, setResult] = useState([])  

//   const handleChange = (e) => {
//     setSearch(e.target.value.toLowerCase());
//   };

//   const handleSearch = async () => {
//     if (search){
//         const allDb = await fetchData(`https://api.themoviedb.org/3/search/multi?api_key=0c17a380a966eb856907e4b64bd5374a&language=en-US&query=${search}<&page=1&include_adult=false
//         `, exerciseOp)
//         const results = allDb.results
//         setResult(results)
//         console.log(results)
//         setSearch("")
//     }
//   }

//   const ContainerXl = {
//     alignItems: "center",
//     justifyContent: "center"
//   }

//   const Subtitle = {
//     marinBottom: "1rem"
//   }


//   return (
//     <Stack sx={ContainerXl}>
//         <Box position="relative" maxWidth="md" sx={{ mt: 20 }}>
//           <Typography sx={Subtitle} >Los mejores ejercicios</Typography>
//           <TextField
//                 id="search"
//                 type="search"
//                 label="You can filter exercises by name, target muscle or equipment"
//                 value={search}
//                 onChange={handleChange}
//                 sx={{ width: 200 }}
                
//             />
//             <button onClick={handleSearch}>
//                 Buscar <SearchIcon />
//             </button>
//         </Box>
//       <h1>HOLA</h1>
//       <ItemListContainer result={result}/>
      
//         <Box 
//           sx={{ position: "relative", width:"100%", p: "20px" }}>
//                  <ItemListContainer result={result}/>
//         </Box>
//     </Stack>
//   );
// }
