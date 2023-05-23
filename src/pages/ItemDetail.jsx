import React, { useEffect, useState } from 'react'
import { Item } from '../components/items/Item'
import { NavBar } from "../components/navBar/NavBar"
import { Footer } from "../components/footer/Footer"
import { useParams } from 'react-router-dom'
import { fetchData, exerciseOp } from "../hooks/fetchData";
import { HorizontalScrollBar } from "../components/items/Scroll"
import { useDataContext } from '../context/DataProvider'
import { SettingsSystemDaydreamTwoTone } from '@mui/icons-material'

//3
//logica y mapa de item 

export const ItemDetail = () => {
  const [ movie, setMovie ] =  useState([])
  const [ cast, setCast ] = useState([])    
  const [ crew, setCrew ] = useState([])   
  const [ similarMovies, setSimilarMovies ] = useState([]) 
  const [ movieVideos, setMovieVideos ] = useState([])
  
  const { movie_id } = useParams([])
  
  const API_KEY = `api_key=0c17a380a966eb856907e4b64bd5374a&language=en-US`
  const URL_KEY = `https://api.themoviedb.org/3/movie/${movie_id}`
  const URL_MOVIE = `${URL_KEY}?${API_KEY}`
  const URL_MOVIE_CREDITS = `${URL_KEY}/credits?${API_KEY}`
  const URL_MOVIE_SIMILAR = `${URL_KEY}/similar?${API_KEY}`
  const URL_MOVIE_VIDEOS = `${URL_KEY}/videos?${API_KEY}`

  const fetchMovie = async () => {
      const movieDb = await fetchData(URL_MOVIE ,exerciseOp) 
      const movieCredits = await fetchData(URL_MOVIE_CREDITS ,exerciseOp) 
      const movieSimilar = await fetchData(URL_MOVIE_SIMILAR ,exerciseOp) 
      const movieVideos = await fetchData(URL_MOVIE_VIDEOS ,exerciseOp) 
      
      setMovie(movieDb)
      setCast(movieCredits.cast)
      setCrew(movieCredits.crew)
      setSimilarMovies(movieSimilar.results)
      setMovieVideos(movieVideos.results)
  }

  useEffect(() => {
    setTimeout(() => {
      fetchMovie()
    }, 2000);
  }, [movie_id])
 
  
  return (
    <div>
        <NavBar />

        <div className='container-page'>     
          {movie &&
          <div>
            <Item data={movie}/>
          </div>}

          {cast && 
          <div>
            <div className="title-sm">Cast</div>
            <HorizontalScrollBar data={cast}/>
          </div>  }

          {crew && 
          <div>
            <div className="title-sm">Crew</div>
            <HorizontalScrollBar data={crew}/>
          </div>  }

          {similarMovies && 
          <div>
            <div className="title-sm">Similar Movies</div>
            <HorizontalScrollBar data={similarMovies}/>
          </div>}        
        </div>

        <Footer />
    </div>
  )
}



// import React, { useEffect, useState } from 'react'
// import { Item } from '../components/items/Item'
// import { NavBar } from "../components/navBar/NavBar"
// import { Footer } from "../components/footer/Footer"
// import { useParams } from 'react-router-dom'
// import { fetchData, exerciseOp } from "../hooks/fetchData";
// import { HorizontalScrollBar } from "../components/items/Scroll"
// import { useDataContext } from '../context/DataProvider'

// //3
// //logica y mapa de item 
// const API_KEY = "0c17a380a966eb856907e4b64bd5374a"

// export const ItemDetail = () => {

//     const [ item, setItem ] =  useState([])
//     const [ cast, setCast ] = useState([])    
//     const [ crew, setCrew ] = useState([])   
//     const [ similarMovies, setSimilarMovies ] = useState([]) 
//     const [movieVideos, setMovieVideos] = useState([])
    
//     const { movie_id } = useParams([])

//     useEffect(() => {
//       const fetchMovieDetails = async () => {
//           const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
//           const db = await fetchData(url ,exerciseOp) 
//           setItem(db)
//         }
//         console.log(item)
//         fetchMovieDetails()
//       }, [movie_id])
//       //console.log(item)
      
//     useEffect(() => {
//       const fetchMovieCredits = async () => {
//           const url = `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`
//           const db = await fetchData(url ,exerciseOp) 
//           const dbCast = await db.cast
//           const dbCrew = await db.crew
//           setCast(dbCast)
//           setCrew(dbCrew)
//         }
//         fetchMovieCredits()
//       }, [movie_id])
      
//     useEffect(() => {
//       const fetchSimilarMovies = async () => {
//           const url = `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${API_KEY}&language=en-US`
//           const db = await fetchData(url ,exerciseOp) 
//           const dbRes = await db.results
//           setSimilarMovies(dbRes)
//         }
//         fetchSimilarMovies()
//       }, [movie_id])

//     useEffect(() => {
//       const fetchMovieVideos = async () => {
//           const url = `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`
//           const db = await fetchData(url ,exerciseOp) 
//           const dbRes = await db.results
//           console.log(dbRes)
//           setMovieVideos(dbRes)
//         }
//         fetchMovieVideos()
//       }, [movie_id])

//       console.log(movieVideos)

  
//   return (
//     <div>
//         <NavBar />

//         <div className='container-page'>          
//           <Item data={item} cast={cast} crew={crew}/>

//           <div className="title-sm">Similar Movies</div>
//         { similarMovies && <HorizontalScrollBar data={similarMovies}/>}          
          
//         </div>

//         <Footer />
//     </div>
//   )
// }