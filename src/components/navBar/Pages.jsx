import React from 'react'
import { Link } from 'react-router-dom';

const pages = ["inicio", "series", "peliculas", "populares"];

export const Pages = () => {
  return (
    <div className='container-pages'>
      {pages && pages.map((page) => 
      (<Link to={`/${page}`} key={page}>
          <h5 className='title-navbar'>{page}</h5>
      </Link>
    ))}
    </div>
  )
}
