import { useContext, useState, useEffect, createContext } from "react";
import { fetchData, exerciseOp } from "../hooks/fetchData";

const api_key = "0c17a380a966eb856907e4b64bd5374a"

const DataContext = createContext([]);
export const useDataContext = () => useContext(DataContext);
export const DataProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [tvshows, setTvshows] = useState([]);
    const [trendingTv, setTrendingTv] = useState([]);
    const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
      const fecthMovies = async () => {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US`

        const db = await fetchData(url ,exerciseOp) 
        const dbResults = await db.results

        console.log(dbResults)
        setMovies([...dbResults])
    }
    fecthMovies()
  }, [])
  console.log(movies)

  useEffect(() => {
    const fecthTvshows = async () => {
        const url = `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US`
        const db = await fetchData(url ,exerciseOp) 
        const dbResults = await db.results

        console.log(dbResults)
        setTvshows([...dbResults])
    }
    fecthTvshows()
  }, [])
  console.log(tvshows)

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
  console.log(trendingTv)

  useEffect(() => {
    const fecthTrendingMovies = async () => {
        const url = `  https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}
        `
        const db = await fetchData(url ,exerciseOp) 
        const dbResults = await db.results
        console.log(db)

        console.log(dbResults)
        setTrendingMovies([...dbResults])
    }
    fecthTrendingMovies()
  }, [])
  console.log(trendingMovies)

    return (
        <DataContext.Provider
            value={{
                movies,
                tvshows,
                trendingTv,
                trendingMovies
            }}
        >
            {children}
        </DataContext.Provider>
    );
};