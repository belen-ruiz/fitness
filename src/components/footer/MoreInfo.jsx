import React from 'react'
import { Link } from 'react-router-dom'

const moreInfo = [
    "avisos Legales",
    "centro de ayuda",
    "empleo",
    "preferencias de cookies",
    "tarjetas de regalo",
    "privacidad",
    "prensa",
    "términos de uso",
    "contactanos"
]

export const MoreInfo = () => {
  return (
    <div className='container-moreinfo'> 
        {moreInfo && moreInfo.map((page) => 
        (<Link to={`/${page}`}  key={page}>
            <div className='title-footer'>{page}</div>
        </Link>))}
    </div>
  )
}
