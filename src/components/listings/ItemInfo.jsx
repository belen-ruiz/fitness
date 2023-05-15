import { Movie, MovieSharp, Tv, TvRounded, TvSharp } from '@mui/icons-material';
import React from 'react'

export const ItemInfo = ({ data }) => {

  const baseUrl="https://image.tmdb.org/t/p";
  const fileSize= "w200";
  const filePath= data.poster_path;
  const url = `${baseUrl}/${fileSize}/${filePath}`

  return (
    <div className='item-info flex-column' >
        <div className={`hover-card`}>
          <div className='subtitle name' >{data.title || data.name}</div>
          <div className='subtitle media'>{(data.media_type === "tv" ) ?  (<TvSharp />) :           <MovieSharp />}</div>
          <div className='subtitle rate' >{data.vote_average}</div>
          <p className='subtitle overview'>{data.overview}</p>
        </div>
        <div className="poster">
          <img className="poster-img" src={`${url}`} alt={data.title || data.name}/>
        </div>

    </div>
  )
}
