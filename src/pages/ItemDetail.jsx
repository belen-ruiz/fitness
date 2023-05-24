import React, { useEffect, useState } from 'react'
import { Item } from '../components/items/Item'
import { NavBar } from "../components/navBar/NavBar"
import { Footer } from "../components/footer/Footer"
import { ItemContainer } from '../components/items/ItemContainer'

//3
//logica y mapa de item 

export const ItemDetail = () => {  
    
  return (
    <div>
        <NavBar />

        <div className='container-page'>    
          <ItemContainer />

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
// import { SettingsSystemDaydreamTwoTone } from '@mui/icons-material'

// //3
// //logica y mapa de item 

// export const ItemDetail = () => {
//   const [ movie, setMovie ] =  useState([])
//   const [ cast, setCast ] = useState([])    
//   const [ crew, setCrew ] = useState([])   
//   const [ similarMovies, setSimilarMovies ] = useState([]) 
//   const [ movieVideos, setMovieVideos ] = useState([])
  
//   const { movie_id } = useParams([])
  
//   const API_KEY = `api_key=0c17a380a966eb856907e4b64bd5374a&language=en-US`
//   const URL_KEY = `https://api.themoviedb.org/3/movie/${movie_id}`
//   const URL_MOVIE = `${URL_KEY}?${API_KEY}`
//   const URL_MOVIE_CREDITS = `${URL_KEY}/credits?${API_KEY}`
//   const URL_MOVIE_SIMILAR = `${URL_KEY}/similar?${API_KEY}`
//   const URL_MOVIE_VIDEOS = `${URL_KEY}/videos?${API_KEY}`

//   const fetchMovie = async () => {
//       const movieDb = await fetchData(URL_MOVIE ,exerciseOp) 
//       const movieCredits = await fetchData(URL_MOVIE_CREDITS ,exerciseOp) 
//       const movieSimilar = await fetchData(URL_MOVIE_SIMILAR ,exerciseOp) 
//       const movieVideos = await fetchData(URL_MOVIE_VIDEOS ,exerciseOp) 
      
//       setMovie(movieDb)
//       setCast(movieCredits.cast)
//       setCrew(movieCredits.crew)
//       setSimilarMovies(movieSimilar.results)
//       setMovieVideos(movieVideos.results)
//   }

//   useEffect(() => {
//     setTimeout(() => {
//       fetchMovie()
//     }, 2000);
//   }, [movie_id])
 
  
//   return (
//     <div>
//         <NavBar />

//         <div className='container-page'>     
//           {movie &&
//           <div>
//             <Item data={movie}/>
//           </div>}

//           {cast && 
//           <div>
//             <div className="title-sm">Cast</div>
//             <HorizontalScrollBar data={cast}/>
//           </div>  }

//           {crew && 
//           <div>
//             <div className="title-sm">Crew</div>
//             <HorizontalScrollBar data={crew}/>
//           </div>  }

//           {similarMovies && 
//           <div>
//             <div className="title-sm">Similar Movies</div>
//             <HorizontalScrollBar data={similarMovies}/>
//           </div>}        
//         </div>

//         <Footer />
//     </div>
//   )
// }