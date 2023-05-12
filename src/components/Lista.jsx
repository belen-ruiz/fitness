//5
import React from 'react'
import { Link, useParams } from 'react-router-dom'

export const Lista = ({ subcategoria }) => {

  return (
    <Link to={`/subcategoria/${subcategoria.id}`}>
        <div>
            <h3> {subcategoria.name} </h3>
            <h5> ({subcategoria.total_items_in_this_category}) </h5>
        </div>
    </Link>
  )
}

const Sublista = () => {
    
}
