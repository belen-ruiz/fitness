import { Stack, Box, Container, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {exerciseOp, fetchData} from "../utils/fetchData";
import { HorizontalScrollBar } from "./HorizontalScrollBar";
import { Typography } from "@mui/material";

export const SearchBar = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchBodyParts = async () => {
        const bodyPartsDb = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList" ,exerciseOp)
        //console.log(bodyPartsDb)
        setBodyParts(["all", ...bodyPartsDb])
    }
    fetchBodyParts()
  }, [])
  

  const handleChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleSearch = async () => {
    if (search){
        const allExercises = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOp)

        const searched = allExercises.filter((ex) => 
        ex.name.toLowerCase().includes(search)
        || ex.target.toLowerCase().includes(search)
        || ex.equipment.toLowerCase().includes(search)
        || ex.bodyPart.toLowerCase().includes(search)
        )
        //window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
        setSearch("")
        setExercises(searched)
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

        <Box 
          sx={{ position: "relative", width:"100%", p: "20px" }}>
            <HorizontalScrollBar 
            data={bodyParts} 
            bodyPart={bodyPart} 
            setBodyPart={setBodyPart}
            bodyParts />
        </Box>
    </Stack>
  );
}
