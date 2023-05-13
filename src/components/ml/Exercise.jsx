//4

import React from 'react'
import { Link } from 'react-router-dom';
import { Lista } from "./Lista"

export const Exercise = ({ subcat }) => {
    const {name, picture, children_categories } = subcat;

  return (
    <>
      {children_categories && 
       children_categories.map((subcategoria)=>(
        <Link to={`/categoria/${subcategoria.id}`} key={subcategoria.id}>
            <h3> {subcategoria.name} </h3>
            <h5> ({subcategoria.total_items_in_this_category}) </h5>
        </Link>
        ))}


    </>
  )
}
