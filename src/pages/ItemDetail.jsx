import React, { useEffect, useState } from 'react'
import { Item } from '../components/items/Item'
import { NavBar } from "../components/navBar/NavBar"
import { Footer } from "../components/footer/Footer"
import { useParams } from 'react-router-dom'
import { fetchData, exerciseOp } from "../hooks/fetchData";
import { HorizontalScrollBar } from "../components/items/Scroll"

//3
//logica y mapa de item 
const API_KEY = "0c17a380a966eb856907e4b64bd5374a"

export const ItemDetail = () => {

    const [ item, setItem ] =  useState([])
    const [ cast, setCast ] = useState([])    
    const [ crew, setCrew ] = useState([])   
    const [ similarMovies, setSimilarMovies ] = useState([]) 
    const { movie_id } = useParams([])

    useEffect(() => {
      const fetchMovieDetails = async () => {
          const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
          const db = await fetchData(url ,exerciseOp) 
          setItem(db)
        }
        console.log(item)
        fetchMovieDetails()
      }, [movie_id])
      //console.log(item)
      
    useEffect(() => {
      const fetchMovieCredits = async () => {
          const url = `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`
          const db = await fetchData(url ,exerciseOp) 
          const dbCast = await db.cast
          const dbCrew = await db.crew
          setCast(dbCast)
          setCrew(dbCrew)
        }
        fetchMovieCredits()
      }, [movie_id])
      
    useEffect(() => {
      const fetchSimilarMovies = async () => {
          const url = `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${API_KEY}&language=en-US`
          const db = await fetchData(url ,exerciseOp) 
          console.log(db)
          const dbRes = await db.results
          setSimilarMovies(dbRes)
        }
        fetchSimilarMovies()
      }, [movie_id])

  
  return (
    <div>
        <NavBar />

        <div className='container-page'>          
          <Item data={item} cast={cast} crew={crew}/>

          <div className="title-sm">Similar Movies</div>
        { similarMovies && <HorizontalScrollBar data={similarMovies}/>}          
          
        </div>

        <Footer />
    </div>
  )
}