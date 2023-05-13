import { useContext, useState, useEffect, createContext } from "react";
import { fetchData, exerciseOp } from "../hooks/fetchData";

const DataContext = createContext([]);
export const useDataContext = () => useContext(DataContext);


export const DataProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [tvshows, setTvshows] = useState([]);

  useEffect(() => {
      const fecthMovies = async () => {
        const api_key = "0c17a380a966eb856907e4b64bd5374a"
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
        const api_key = "0c17a380a966eb856907e4b64bd5374a"
        const url = `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US`
        const db = await fetchData(url ,exerciseOp) 
        const dbResults = await db.results

        console.log(dbResults)
        setTvshows([...dbResults])
    }
    fecthTvshows()
  }, [])
  console.log(tvshows)


    return (
        <DataContext.Provider
            value={{
                movies,
                tvshows
            }}
        >
            {children}
        </DataContext.Provider>
    );
};