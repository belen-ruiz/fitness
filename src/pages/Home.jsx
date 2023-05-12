//1
import { Box } from '@mui/material'
import { useState, useEffect } from 'react'
import Banners from '../components/Banners'
import { ExerciseList } from '../components/ExerciseList'
import { Header } from '../components/header/Header'
import { SearchBar } from '../components/SearchBar'
import { fetchData, exerciseOp } from '../utils/fetchData'


export const Home = () => {
  const [catList, setCatList] = useState([])
  const [category, setCategory] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
        const catData = await fetchData("https://api.mercadolibre.com/sites/MLA/categories" ,exerciseOp) 
        
        console.log(catData)
        setCatList(["all", ...catData])
    }
    fetchCategories()
  }, [])

  return (
    <Box>
      <Header />
      {/* <Banners /> */}

      <SearchBar 
        category={category} 
        setCatList={setCatList} 
        setCategory={setCategory} />
      
      <ExerciseList
        category={category} 
        catList={catList}
        setCatList={setCatList} />

      {/* <ExerciseList
        bodyPart={bodyPart} 
        exercises={exercises}
        setExercises={setExercises} /> */}
    </Box>
  )
}
