import { useContext, useState, useEffect, createContext } from "react";
import { useParams } from "react-router-dom";
import { fetchData, exerciseOp } from "../hooks/fetchData";

const api_key = "0c17a380a966eb856907e4b64bd5374a"

const DataContext = createContext([]);
export const useDataContext = () => useContext(DataContext);
export const DataProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [tvshows, setTvshows] = useState([]);
    const [trendingTv, setTrendingTv] = useState([]);
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [imgMovies, setImgMovies] = useState("")
    const [genresMovie, setGenresMovie] = useState([])
    const [genresTv, setGenresTv] = useState([])
    const [currentGenreIds, setCurrentGenreIds] = useState() 
    const [tv, setTv] = useState([]) 


  useEffect(() => {
      const fecthMovies = async () => {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US`

        const db = await fetchData(url ,exerciseOp) 
        const dbResults = await db.results

        //console.log(dbResults)
        setMovies([...dbResults])
    }
    fecthMovies()
  }, [])
  //console.log(movies)

  
  useEffect(() => {
    const fecthTvshows = async () => {
        const url = `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US`
        const db = await fetchData(url ,exerciseOp) 
        const dbResults = await db.results
        //console.log(dbResults)
        setTvshows([...dbResults])
    }
    fecthTvshows()
  }, [])
  //console.log(tvshows)
///////////////////////////
const handleSelectGenre = 1
  // const handleSelectGenre = async (e) => {
  //   e.preventDefault()
  //   if (genre){
  //       const allDb = await fetchData(`https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&page=1&with_genres=${genre}
  //       `, exerciseOp)
  //       const res = allDb.results
  //       setTvshows(res)
  //    }
    
  //   // if (results) {
  //   //    navigate(`/genre/${search}`);
  //   //  }
  // }

  // useEffect(() => {
  //   if (!search) {setSearchParams("")}
  //   else { 
  //     setSearchParams({"keyword": search})
  //    }
  // }, [search])



  /////filtrado ???
  // useEffect(() => {

  //   const filterTvshows = tvshows.map((tvshow) => {
  //     const match = tvshow.genre_ids.filter((id) => id == currentGenreIds) 
  //     console.log(match)
  //   })

  //     console.log(filterTvshows)  //array completo sin filtar

  //     setTv(filterTvshows)
  //     console.log(tv) 
  // }, [currentGenreIds])
  

  useEffect(() => {
    const fecthTrendingTv = async () => {
        const url = `  https://api.themoviedb.org/3/trending/tv/week?api_key=${api_key}
        `
        const db = await fetchData(url ,exerciseOp) 
        const dbResults = await db.results

        setTrendingTv([...dbResults])
    }
    fecthTrendingTv()
  }, [])
  //console.log(trendingTv)

  useEffect(() => {
    const fecthTrendingMovies = async () => {
        const url = `  https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}
        `
        const db = await fetchData(url ,exerciseOp) 
        const dbResults = await db.results

        setTrendingMovies([...dbResults])
    }
    fecthTrendingMovies()
  }, [])
  //console.log(trendingMovies)

  useEffect(() => {
    const fetchGenresMovie = async () => {
        const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`
        const db = await fetchData(url ,exerciseOp) 
        const genresObj = await db.genres
       //console.log(genresObj)// array
       setGenresMovie([...genresObj])
    }
    fetchGenresMovie()
  }, [])
  //console.log(genresMovie)

  useEffect(() => {
    const fetchGenresTv = async () => {
        const url = `https://api.themoviedb.org/3/genre/tv/list?api_key=${api_key}&language=en-US`
        const db = await fetchData(url ,exerciseOp) 
        const genresObj = await db.genres

        setGenresTv([...genresObj])
      }
      fetchGenresTv()
    }, [])
    //console.log(genresTv)
    
    const genIds = genresTv.map((e) => e.id)
    const genNames = genresTv.map((e) => e.name)
    
    

    return (
        <DataContext.Provider
            value={{
                movies,
                tvshows,
                trendingTv,
                trendingMovies,
                imgMovies,
                genresMovie,
                genresTv,
                genIds,
                genNames,
                currentGenreIds,
                setCurrentGenreIds,
                handleSelectGenre,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};