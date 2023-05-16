import React, { useEffect, useState } from "react";
import { Movie, MovieSharp, Tv, TvRounded, TvSharp } from '@mui/icons-material';
import { useParams } from "react-router-dom";

//2
//luego on click de estos item se va a otro componente y params ITEMContainer
export const ItemList = ({ data }) => {

  const {genre} = useParams()
  const [newArray, setNewArray] = useState([])

  const baseUrl="https://image.tmdb.org/t/p";
  const fileSize= "w200";
  const filePath= data.poster_path;
  const imgUrl = `${baseUrl}/${fileSize}/${filePath}`

  const genreId = data.genre_ids;
  const title = data.title || data.name
  const mediaType = data.media_type; 
  const voteAv = data.vote_average; 
  const overview = data.overview;
  //console.log(data)

  // const genre = data.filter(genre => idGenre == gender.id)
  // setItem(...item, item)

  useEffect(() => {
    if (genre == genreId) {
      console.log(ok)
    }
  }, [genre])
  

  return (
    
    <div className='item-info flex-column' genre={genreId} >
        <div className={`hover-card`}>
          <div className='subtitle name' >{title}</div>
          <div className='subtitle media'>{(mediaType === "tv" ) ?  (<TvSharp />) : <MovieSharp />}</div>
          <div className='subtitle rate' >{voteAv}</div>
          <p className='subtitle overview'>{overview}</p>
        </div>
        <div className="poster">
          <img className="poster-img" src={imgUrl} alt={title}/>
        </div>
    </div>
  )
}

