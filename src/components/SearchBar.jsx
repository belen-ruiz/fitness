import { Container, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {exerciseOp, fetchData} from "../utils/fetchData";
import { HorizontalScrollBar } from "./HorizontalScrollBar";

export const SearchBar = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchBodyParts = async () => {
        const bodyPartsDb = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList" ,exerciseOp)
        console.log(bodyPartsDb)
        setBodyParts(["all", ...bodyPartsDb])
    }
    fetchBodyParts()
  }, [])
  

  const handleChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleSearch = async () => {
    if (search){
        const exercises = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOp)

        const searched = exercises.filter((ex) => 
        ex.name.toLowerCase().includes(search)
        || ex.target.toLowerCase().includes(search)
        || ex.equipment.toLowerCase().includes(search)
        || ex.bodyPart.toLowerCase().includes(search)
        )

        setSearch("")
        setExercises(searched)
    }
  }

  return (
    <>
        <Container maxWidth="md" sx={{ mt: 20 }}>
            <h1>Los mejores ejercicios</h1>
            <TextField
                id="search"
                type="search"
                label="Search"
                value={search}
                onChange={handleChange}
                sx={{ width: 600 }}
            />
            <button onClick={handleSearch}>
                Buscar <SearchIcon />
            </button>
        </Container>
        <Container>
            <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Container>
    </>
  );
}
