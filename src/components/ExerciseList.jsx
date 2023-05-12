//2
import { Box } from '@mui/material'
import { Stack } from '@mui/material'
import { Pagination } from '@mui/material'
import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ExerciseCard } from './ExerciseCard'
import {exerciseOp, fetchData} from "../utils/fetchData";

export const ExerciseList = ({ category, catList, setCatList }) => {

  const [currentPage, setCurrentPage] = useState(1)

  // const excercisesXPage = 6;
  // const iOfLastExercise = currentPage * excercisesXPage; 
  // const iOfFirstExercise = iOfLastExercise - excercisesXPage;
  // const currentEx = category.slice(iOfFirstExercise, iOfLastExercise)

  // const handleChangePage = (value) => {
  //   setCurrentPage(value)
    
  //   //window.scrollTo({ top: 1800, behavior: "smooth"})
  // }

  // useEffect(() => {
  //   const fetchExData = async () => {
  //     let exData = [];
  //     if (bodyPart === "all"){
  //       exData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOp) 
  //     } 
  //     else {
  //       exData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOp) 
  //     }
  //     setExercises(exData)
  //     console.log(exData)
  //   }
  //   fetchExData()
  // }, [bodyPart])
  

  return (
    <Box>
      <Typography>Todas las categorias</Typography>

      <Stack direction="row" flexWrap="wrap" justifyContent="center" gap="2rem">
          {catList.map((categoria) => (
            <ExerciseCard key={categoria.id} categoria={categoria}/>
          ))}
      </Stack>
      
      {/* <Stack>
          {exercises.length > 9  && 
          <Pagination 
            showFirstButton 
            showLastButton
            color="standard"
            defaultPage={1}
            count={Math.ceil(exercises.length / 9)}
            page={currentPage}
            onClick={handleChangePage} />}
      </Stack> */}
    </Box>
  )
}



