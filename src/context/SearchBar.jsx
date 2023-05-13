import { Stack, Box, Container, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {exerciseOp, fetchData} from "../utils/fetchData";
import { HorizontalScrollBar } from "./HorizontalScrollBar";
import { Typography } from "@mui/material";

export const SearchBar = ({ category, setCatList, setCategory }) => {
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([])  

  const handleChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleSearch = async () => {
    if (search){
        const catData = await fetchData("https://api.mercadolibre.com/sites/MLA/categories/`${id}`", exerciseOp)
        console.log(catData)

        const searched = catData.filter((cat) => 
        cat.name.toLowerCase().includes(search)
        // || ex.target.toLowerCase().includes(search)
        )
        console.log(searched)
        setSearch("")
        setCategories(searched)
        console.log(categories)
    }
  }

  const ContainerXl = {
    alignItems: "center",
    justifyContent: "center"
  }

  const Subtitle = {
    marinBottom: "1rem"
  }


  return (
    <Stack sx={ContainerXl}>
        <Box position="relative" maxWidth="md" sx={{ mt: 20 }}>
          <Typography sx={Subtitle} >Los mejores ejercicios</Typography>
          <TextField
                id="search"
                type="search"
                label="You can filter exercises by name, target muscle or equipment"
                value={search}
                onChange={handleChange}
                sx={{ width: 600 }}
            />
            <button onClick={handleSearch}>
                Buscar <SearchIcon />
            </button>
        </Box>

        {/* <Box 
          sx={{ position: "relative", width:"100%", p: "20px" }}>
            <HorizontalScrollBar 
            data={bodyParts} 
            bodyPart={bodyPart} 
            setBodyPart={setBodyPart}
            bodyParts />
        </Box> */}
    </Stack>
  );
}
