import React, { useEffect, useState } from 'react'
import { Item } from '../components/items/Item'
import { NavBar } from "../components/navBar/NavBar"
import { Footer } from "../components/footer/Footer"
import { useDataContext } from "../context/DataProvider"
import { useSearchContext } from '../context/SearchProvider'
import { Banner } from '../components/banner/ItemBanner'
import { useParams } from 'react-router-dom'
import { fetchData, exerciseOp } from "../hooks/fetchData";

//3
//logica y mapa de item 
const api_key = "0c17a380a966eb856907e4b64bd5374a"

export const ItemDetail = () => {

    const [ item, setItem ] =  useState([])
    const { movie_id } = useParams([])

    useEffect(() => {
      const fetchMovieDetails = async () => {
          const url = ` https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}&language=en-US`
          const db = await fetchData(url ,exerciseOp) 
          console.log(db)
          setItem(db)
          // setItem(...item, item)
        }
        console.log(item)
        fetchMovieDetails()
      }, [movie_id])
      //console.log(item)

  
  return (
    <div>
        <NavBar />

        <div className='container-page'>          
          <Item data={item}/>
        </div>
        
        <Footer />
    </div>
  )
}