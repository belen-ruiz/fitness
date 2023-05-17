import React from 'react'

export const ItemBanner = ({ data }) => {
  const { 
    title, 
    original_title,
    poster_path,
    release_date, 
    vote_average, 
    vote_count, 
    popularity } = data

    const baseUrl="https://image.tmdb.org/t/p";
    const fileSize= "w200";
    const filePath= `${poster_path}`;
    const imgUrl = `${baseUrl}/${fileSize}/${filePath}`
  
  return (
    <div className=''>
        <div className='header'>
            <div className='info de peli'>
                <div className='titulo'>{title} </div>
                <div className='titulo original'>{original_title} </div>
                <div className='año'> {release_date}</div>
            </div>

            <div className='puntuajes'>
                <div className='titulo'>{vote_count} </div>
                <div className='titulo original'>{vote_average} </div>
                <div className='titulo'> {popularity}</div>
            </div>
        </div>

        <div className='img banner'>
          <img src={imgUrl} alt={`img-${poster_path}`}/>
        </div>
    </div>
  )
}
