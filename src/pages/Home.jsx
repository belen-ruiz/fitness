import { useState } from 'react'
import Banners from '../components/Banners'
import { ExerciseList } from '../components/ExerciseList'
import { Header } from '../components/header/Header'
import { SearchBar } from '../components/SearchBar'


export const Home = () => {
  const [category, setCategory] = useState("all")
  const [exercises, setExercises] = useState([])

  return (
    <>
    <Header />
    {/* <Banners /> */}
    <SearchBar 
      setExercises={setExercises} 
      category={category} 
      setCategory={setCategory} />
    
    <ExerciseList
      setExercises={setExercises} 
      category={category} 
      setCategory={setCategory} />

  </>
  )
}
