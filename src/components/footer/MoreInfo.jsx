import React from 'react'
import { Link } from 'react-router-dom'
import { footerLinks } from "../constantes/footer-links"

export const MoreInfo = () => {
  return (
    <div className='container-moreinfo'> 
        {footerLinks && footerLinks.map((page) => 
        (<Link to={`/${page}`}  key={page}>
            <div className='title-footer'>{page}</div>
        </Link>))}
    </div>
  )
}
