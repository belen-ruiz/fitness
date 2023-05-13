import React from 'react'

//2
//luego on click de estos item se va a otro componente y params ITEMContainer
export const ItemList = ({ movie }) => {

  return (
    <div>
        <p>{movie.title}</p>
        <p>{movie.overview}</p>
        <p>Realise Date: {movie.release_date}</p>
        <p>Rate: {movie.vote_average}</p>
    </div>
  )
}
