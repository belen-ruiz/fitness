import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData, exerciseOp } from '../utils/fetchData';
import { Exercise } from './Exercise';
import { SimilarExercises } from './SimilarExercises';

export const ExerciseDetail = () => {

    const [exerciseDetail, setExerciseDetail] = useState({})
    const [similarMuscle, setSimilarMuscle] = useState([])
    const [similarEquipment, setSimilarEquipment] = useState([])

    const { id } = useParams();

    useEffect(() => {
      const fetchExerciseDb = async () => {
        const exDataUrl = "https://exercisedb.p.rapidapi.com"

        const exerciseDetailDb = await fetchData(`${exDataUrl}/exercises/exercise/${id}`, exerciseOp)
        setExerciseDetail(exerciseDetailDb)

        const similarMuscle = await fetchData(`${exDataUrl}/exercises/target/${exerciseDetailDb.target}`, exerciseOp)
        setSimilarMuscle(similarMuscle)
        
        const similarEquipment = await fetchData(`${exDataUrl}/exercises/equipment/${exerciseDetailDb.equipment}`, exerciseOp)
        setSimilarEquipment(similarEquipment)
      }
      fetchExerciseDb()
    }, [id])
    
  return (
    <>
        <Exercise exerciseDetail={exerciseDetail}/>
        <SimilarExercises 
        similarMuscle={similarMuscle}
        similarEquipment={similarEquipment}/>
    </>
  )
}
