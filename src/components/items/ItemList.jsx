import React from 'react'

//2
//luego on click de estos item se va a otro componente y params ITEMContainer
export const ItemList = ({ data }) => {

  return (
    <div>
        <p>{data.title} {data.name}</p>
        <p>{data.overview}</p>
        <p>Rate: {data.vote_average}</p>
        {data.release_date &&
        <p>Realise Date: {data.release_date}</p>}
    </div>
  )
}
