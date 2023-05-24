import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData, exerciseOp } from "../../hooks/fetchData";
import { Item } from "./Item"
import { Loader } from "../atoms/Loader"

export const ItemContainer = () => {
    const [movie, setMovie] = useState([]);
    const [cast, setCast] = useState([]);
    const [crew, setCrew] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [movieVideos, setMovieVideos] = useState([]);
    const [movieReviews, setMovieReviews] = useState([]);
    const [loading, setLoading] = useState(true)


    const { movie_id } = useParams([]);

    const API_KEY = `api_key=0c17a380a966eb856907e4b64bd5374a&language=en-US`;
    const URL_KEY = `https://api.themoviedb.org/3/movie/${movie_id}`;
    const URL_MOVIE = `${URL_KEY}?${API_KEY}`;
    const URL_MOVIE_CREDITS = `${URL_KEY}/credits?${API_KEY}`;
    const URL_MOVIE_SIMILAR = `${URL_KEY}/similar?${API_KEY}`;
    const URL_MOVIE_VIDEOS = `${URL_KEY}/videos?${API_KEY}`;
    const URL_MOVIE_REVIEWS = `${URL_KEY}/reviews?${API_KEY}`;

    const fetchMovie = async () => {
        const movieDb = await fetchData(URL_MOVIE, exerciseOp);
        const movieCredits = await fetchData(URL_MOVIE_CREDITS, exerciseOp);
        const movieSimilar = await fetchData(URL_MOVIE_SIMILAR, exerciseOp);
        const movieVideos = await fetchData(URL_MOVIE_VIDEOS, exerciseOp);
        const movieReviews = await fetchData(URL_MOVIE_REVIEWS, exerciseOp);

        setMovie(movieDb);
        setCast(movieCredits.cast);
        setCrew(movieCredits.crew);
        setSimilarMovies(movieSimilar.results);
        setMovieVideos(movieVideos.results);
        setMovieReviews(movieReviews.results);
    };

    useEffect(() => {
        setTimeout(() => {
            fetchMovie();
            setLoading(false)
        }, 2000);
    }, [movie_id]);

    return (
        <>
            {   loading && <Loader /> ||
                movie && (
                <div>
                    <Item
                        data={movie}
                        cast={cast}
                        crew={crew}
                        similarMovies={similarMovies}
                        movieReviews={movieReviews}
                    />
                </div>)
            }
        </>
    );
};
