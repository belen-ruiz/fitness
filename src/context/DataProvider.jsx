import { useContext, useState, useEffect, createContext } from "react";
import { useParams } from "react-router-dom";
import { fetchData, exerciseOp } from "../hooks/fetchData";


const DataContext = createContext([]);
export const useDataContext = () => useContext(DataContext);
export const DataProvider = ({ children }) => {
  const { movie_id } = []

    const [movies, setMovies] = useState([]);
    const [trendingTv, setTrendingTv] = useState([]);
    const [latestMovies, setLatestMovies] = useState([]);
    const [topMovies, setTopMovies] = useState([])
    const [genresMovie, setGenresMovie] = useState([]);
    const [ movie, setMovie ] =  useState([])
    const [ cast, setCast ] = useState([])    
    const [ crew, setCrew ] = useState([])   
    const [ similarMovies, setSimilarMovies ] = useState([]) 
    const [ movieVideos, setMovieVideos ] = useState([])
    
    const [tvshows, setTvshows] = useState([]);
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [latestTv, setLatestTv] = useState([]);
    const [genresTv, setGenresTv] = useState([]);
    const [topTv, setTopTv] = useState([])

    const [currentGenreIds, setCurrentGenreIds] = useState();

    const API_KEY = `api_key=0c17a380a966eb856907e4b64bd5374a&language=en-US`;
    const URL_KEY = `https://api.themoviedb.org/3`;
    const URL_KEYMOVIE = `https://api.themoviedb.org/3/movie/${movie_id}`

    const URL_MOVIE = `${URL_KEY}/discover/movie?${API_KEY}`;
    const URL_MOVIETREND = `${URL_KEY}/trending/movie/week?${API_KEY}`;
    const URL_MOVIELATEST = `${URL_KEY}/movie/latest?${API_KEY}`;
    const URL_MOVIETOPRATED = `${URL_KEY}/movie/top_rated?${API_KEY}`;
    const URL_MOVIEGENRE = `${URL_KEY}/genre/movie/list?${API_KEY}`;
    const URL_MOVIEID = `${URL_KEYMOVIE}?${API_KEY}`
    const URL_MOVIE_CREDITS = `${URL_KEYMOVIE}/credits?${API_KEY}`
    const URL_MOVIE_SIMILAR = `${URL_KEYMOVIE}/similar?${API_KEY}`
    const URL_MOVIE_VIDEOS = `${URL_KEYMOVIE}/videos?${API_KEY}`
    
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

    const fetchMovieDb = async (movie_id) => {
      const movieDb = await fetchData(URL_MOVIEID ,exerciseOp) 
      const movieCredits = await fetchData(URL_MOVIE_CREDITS ,exerciseOp) 
      const movieSimilar = await fetchData(URL_MOVIE_SIMILAR ,exerciseOp) 
      const movieVideos = await fetchData(URL_MOVIE_VIDEOS ,exerciseOp) 
      
      console.log(movieDb)
      setMovie(movieDb)
      setCast(movieCredits.cast)
      setCrew(movieCredits.crew)
      setSimilarMovies(movieSimilar.results)
      setMovieVideos(movieVideos.results)

    }
    
    useEffect(() => {
      setTimeout(() => {
        fecthDb()
      }, 2000);
    }, [])
    
    // useEffect(() => {
    //   setTimeout(() => {
    //     fetchMovieDb()
    //   }, 2000);
    // }, [movie_id])

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
                movie, 
                cast, 
                crew, 
                similarMovies,
                fetchMovieDb,

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