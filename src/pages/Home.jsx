import { Box } from '@mui/material'
import { useState } from 'react'
import Banners from '../components/Banners'
import { ExerciseList } from '../components/ExerciseList'
import { Header } from '../components/header/Header'
import { SearchBar } from '../components/SearchBar'


export const Home = () => {
  const [exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState("all")

  return (
    <Box>
      <Header />
      {/* <Banners /> */}
      <SearchBar 
        bodyPart={bodyPart} 
        setExercises={setExercises} 
        setBodyPart={setBodyPart} />
      
      <ExerciseList
        bodyPart={bodyPart} 
        exercises={exercises}
        setExercises={setExercises} />
    </Box>
  )
}
