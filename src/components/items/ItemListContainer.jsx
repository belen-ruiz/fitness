import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchData, exerciseOp } from "../../utils/fetchData";
import { ItemList } from "./ItemList";
//1
//logica y mapa de la lista
export const ItemListContainer = () => {
  const [movies, setMovies] = useState([]);
  const [tvshows, setTvshows] = useState([]);

 
  useEffect(() => {
    const api_key = "0c17a380a966eb856907e4b64bd5374a"
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US`

    const fecthDb = async () => {
        const db = await fetchData(url ,exerciseOp) 
        const dbResults = await db.results

        console.log(dbResults)
        setMovies([...dbResults])
    }
    fecthDb()
  }, [])
  console.log(movies)

  useEffect(() => {
    const api_key = "0c17a380a966eb856907e4b64bd5374a"
    const url = `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US`

    const fecthDb = async () => {
        const db = await fetchData(url ,exerciseOp) 
        const dbResults = await db.results

        console.log(dbResults)
        setTvshows([...dbResults])
    }
    fecthDb()
  }, [])
  console.log(tvshows)

  

    return (
        <>
            {movies && movies.map((movie)=>(
                <ItemList key={movie.id} movie={movie} />
            ))}

            {/* {tvshows && tvshows.map((tvshow)=>(
                <ItemList key={tvshow.id} tvshow={tvshow} />
            ))} */}
        </>
    );
};
