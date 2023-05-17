import React from 'react'
import { NavLink } from 'react-router-dom';
import { pages } from "../constantes/pages"


export const Pages = () => {
  return (
    <div className='container-pages flex-center'>
      {pages && pages.map((page) => 
      (<NavLink 
        to={`/${page}`} 
        key={page} 
        className={({ isActive }) => (isActive ? 'active' : '')}>
          <h5 className='title-navbar'>{page}</h5>
      </NavLink>
      ))}
    </div>
  )
}
