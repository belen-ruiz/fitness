import { useContext, useState, useEffect, createContext } from "react";
import { useParams } from "react-router-dom";
import { fetchData, exerciseOp } from "../hooks/fetchData";

const api_key = "0c17a380a966eb856907e4b64bd5374a";

const DataContext = createContext([]);
export const useDataContext = () => useContext(DataContext);
export const DataProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [trendingTv, setTrendingTv] = useState([]);
    const [latestMovies, setLatestMovies] = useState([]);
    const [topMovies, setTopMovies] = useState([])
    const [genresMovie, setGenresMovie] = useState([]);
    
    const [tvshows, setTvshows] = useState([]);
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [latestTv, setLatestTv] = useState([]);
    const [genresTv, setGenresTv] = useState([]);
    const [topTv, setTopTv] = useState([])

    const [currentGenreIds, setCurrentGenreIds] = useState();

    const API_KEY = `api_key=0c17a380a966eb856907e4b64bd5374a&language=en-US`;
    const URL_KEY = `https://api.themoviedb.org/3`;

    const URL_MOVIE = `${URL_KEY}/discover/movie?${API_KEY}`;
    const URL_MOVIETREND = `${URL_KEY}/trending/movie/week?${API_KEY}`;
    const URL_MOVIELATEST = `${URL_KEY}/movie/latest?${API_KEY}`;
    const URL_MOVIETOPRATED = `${URL_KEY}/movie/top_rated?${API_KEY}`;
    const URL_MOVIEGENRE = `${URL_KEY}/genre/movie/list?${API_KEY}`;
    
    const URL_TV = `${URL_KEY}/discover/tv?${API_KEY}`;
    const URL_TVTREND = `${URL_KEY}/trending/tv/week?${API_KEY}`;
    const URL_TVLATEST = `${URL_KEY}/tv/latest?${API_KEY}`;
    const URL_TVTOPRATED = `${URL_KEY}/tv/top_rated?${API_KEY}`;
    const URL_TVGENRE = `${URL_KEY}/genre/tv/list?${API_KEY}`;

    const fecthDb = async () => {
        const dbMovie = await fetchData(URL_MOVIE, exerciseOp);
        const dbMovieTrend = await fetchData(URL_MOVIETREND, exerciseOp);
        const dbMovieLatest = await fetchData(URL_MOVIELATEST, exerciseOp);
        const dbMovieTopRated = await fetchData(URL_MOVIETOPRATED, exerciseOp);
        const dbMovieGenre = await fetchData(URL_MOVIEGENRE, exerciseOp);
        
        const dbTv = await fetchData(URL_TV, exerciseOp);
        const dbTvTrend = await fetchData(URL_TVTREND, exerciseOp);
        const dbTvLatest = await fetchData(URL_TVLATEST, exerciseOp);
        const dbTvTopRated = await fetchData(URL_TVTOPRATED, exerciseOp);
        const dbTvGenre = await fetchData(URL_TVGENRE, exerciseOp);

        setMovies([...dbMovie.results]);
        setTrendingMovies([...dbMovieTrend.results]);
        setLatestMovies([dbMovieLatest]);
        setTopMovies([...dbMovieTopRated.results]);
        setGenresMovie([...dbMovieGenre.genres]);
        
        setTvshows([...dbTv.results]);
        setTrendingTv([...dbTvTrend.results]);
        setLatestTv([dbTvLatest]);
        setTopTv([...dbTvTopRated.results]);
        setGenresTv([...dbTvGenre.genres]);        
    };


    const genIdsMovie = genresMovie.map((e) => e.id);
    const genNamesMovie = genresMovie.map((e) => e.name);

    const genIdsTv = genresTv.map((e) => e.id);
    const genNamesTv = genresTv.map((e) => e.name);


    useEffect(() => {
      setTimeout(() => {
        fecthDb()
      }, 2000);
    }, [])

    return (
        <DataContext.Provider
            value={{
                movies,
                trendingMovies,
                latestMovies,
                topMovies,
                genresMovie,
                genIdsMovie,
                genNamesMovie,

                tvshows,
                trendingTv,
                latestTv,
                topTv,
                genresTv,
                genIdsTv,
                genNamesTv,

                currentGenreIds,
                setCurrentGenreIds,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

// import { useContext, useState, useEffect, createContext } from "react";
// import { useParams } from "react-router-dom";
// import { fetchData, exerciseOp } from "../hooks/fetchData";

// const api_key = "0c17a380a966eb856907e4b64bd5374a"

// const DataContext = createContext([]);
// export const useDataContext = () => useContext(DataContext);
// export const DataProvider = ({ children }) => {
//     const [movies, setMovies] = useState([]);
//     const [tvshows, setTvshows] = useState([]);
//     const [trendingTv, setTrendingTv] = useState([]);
//     const [trendingMovies, setTrendingMovies] = useState([]);
//     const [latestTv, setLatestTv] = useState([]);
//     const [latestMovies, setLatestMovies] = useState([]);
//     const [imgMovies, setImgMovies] = useState("")
//     const [genresMovie, setGenresMovie] = useState([])
//     const [genresTv, setGenresTv] = useState([])
//     const [currentGenreIds, setCurrentGenreIds] = useState()
//     const [tv, setTv] = useState([])

//   const API_KEY = `api_key=0c17a380a966eb856907e4b64bd5374a&language=en-US`
//   const URL_KEY = `https://api.themoviedb.org/3
//   ${movie_id}`
//   const URL_MOVIE = `${URL_KEY}/discover/movie?${API_KEY}`

//   useEffect(() => {
//       const fecthMovies = async () => {
//         const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US`

//         const db = await fetchData(url ,exerciseOp)
//         const dbResults = await db.results

//         //console.log(dbResults)
//         setMovies([...dbResults])
//     }
//     fecthMovies()
//   }, [])
//   //console.log(movies)

//   useEffect(() => {
//     const fecthTvshows = async () => {
//         const url = `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US`
//         const db = await fetchData(url ,exerciseOp)
//         const dbResults = await db.results
//         //console.log(dbResults)
//         setTvshows([...dbResults])
//     }
//     fecthTvshows()
//   }, [])
//   //console.log(tvshows)
// ///////////////////////////
// const handleSelectGenre = 1
//   // const handleSelectGenre = async (e) => {
//   //   e.preventDefault()
//   //   if (genre){
//   //       const allDb = await fetchData(`https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&page=1&with_genres=${genre}
//   //       `, exerciseOp)
//   //       const res = allDb.results
//   //       setTvshows(res)
//   //    }

//   //   // if (results) {
//   //   //    navigate(`/genre/${search}`);
//   //   //  }
//   // }

//   // useEffect(() => {
//   //   if (!search) {setSearchParams("")}
//   //   else {
//   //     setSearchParams({"keyword": search})
//   //    }
//   // }, [search])

//   /////filtrado ???
//   // useEffect(() => {

//   //   const filterTvshows = tvshows.map((tvshow) => {
//   //     const match = tvshow.genre_ids.filter((id) => id == currentGenreIds)
//   //     console.log(match)
//   //   })

//   //     console.log(filterTvshows)  //array completo sin filtar

//   //     setTv(filterTvshows)
//   //     console.log(tv)
//   // }, [currentGenreIds])

//   useEffect(() => {
//     const fecthTrendingTv = async () => {
//         const url = `  https://api.themoviedb.org/3/trending/tv/week?api_key=${api_key}
//         `
//         const db = await fetchData(url ,exerciseOp)
//         const dbResults = await db.results

//         setTrendingTv([...dbResults])
//     }
//     fecthTrendingTv()
//   }, [])
//   //console.log(trendingTv)

//   useEffect(() => {
//     const fecthTrendingMovies = async () => {
//         const url = `  https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}
//         `
//         const db = await fetchData(url ,exerciseOp)
//         const dbResults = await db.results

//         setTrendingMovies([...dbResults])
//     }
//     fecthTrendingMovies()
//   }, [])
//   //console.log(trendingMovies)

//   useEffect(() => {
//     const fecthLatestTv = async () => {
//         const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}
//         `
//         const db = await fetchData(url ,exerciseOp)
//         const dbResults = await db.results

//         setLatestTv([...dbResults])
//     }
//     fecthLatestTv()
//   }, [])
//   //console.log(trendingMovies)

//   useEffect(() => {
//     const fecthLatestMovies = async () => {
//         const url = `  https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}
//         `
//         const db = await fetchData(url ,exerciseOp)
//         const dbResults = await db.results

//         setLatestMovies([...dbResults])
//     }
//     fecthLatestMovies()
//   }, [])
//   //console.log(latestMovies)

//   useEffect(() => {
//     const fetchGenresMovie = async () => {
//         const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`
//         const db = await fetchData(url ,exerciseOp)
//         const genresObj = await db.genres
//        //console.log(genresObj)// array
//        setGenresMovie([...genresObj])
//     }
//     fetchGenresMovie()
//   }, [])
//   //console.log(genresMovie)

//   useEffect(() => {
//     const fetchGenresTv = async () => {
//         const url = `https://api.themoviedb.org/3/genre/tv/list?api_key=${api_key}&language=en-US`
//         const db = await fetchData(url ,exerciseOp)
//         const genresObj = await db.genres

//         setGenresTv([...genresObj])
//       }
//       fetchGenresTv()
//     }, [])
//     //console.log(genresTv)

//     const genIds = genresTv.map((e) => e.id)
//     const genNames = genresTv.map((e) => e.name)

//     return (
//         <DataContext.Provider
//             value={{
//                 movies,
//                 tvshows,
//                 trendingTv,
//                 trendingMovies,
//                 latestMovies,
//                 latestTv,
//                 genresMovie,
//                 genresTv,
//                 genIds,
//                 genNames,
//                 currentGenreIds,
//                 setCurrentGenreIds,
//                 handleSelectGenre,
//             }}
//         >
//             {children}
//         </DataContext.Provider>
//     );
// };
