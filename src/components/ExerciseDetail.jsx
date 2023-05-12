//3
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchData, exerciseOp } from '../utils/fetchData';
import { Exercise } from './Exercise';
import { Publi } from './Publi';
import { SimilarExercises } from './SimilarExercises';

export const ExerciseDetail = () => {

    const [subcat, setSubcat] = useState({})
    const [subcategoria, setSubcategoria] = useState([])

    const { id } = useParams();

    useEffect(() => {
      const fetchExerciseDb = async () => {
        const exDataUrl = "https://api.mercadolibre.com"

        const exerciseDetailDb = await fetchData(`${exDataUrl}/categories/${id}`, exerciseOp)
        setSubcat(exerciseDetailDb)

        const exerciseDb = await fetchData(`${exDataUrl}/categories/${id}`, exerciseOp)
        setSubcategoria(exerciseDb)
      }
      fetchExerciseDb()
    }, [id])

    const subCatD = subcat.children_categories
    console.log(subCatD)
    
  return (
    <>
      <h3>{subcat.name}</h3>

      {subcat.picture && <img src={subcat.picture} alt={subcat.name}/>}


      {subCatD && 
        subCatD.map((sub)=>(
          <Exercise key={sub.id} subcat={subcat}/>))}
    
      {subCatD <= 0 && <Publi subcat={subcat}/>}
    </>
  )
}
