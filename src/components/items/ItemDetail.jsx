import React, { useState } from 'react'
import { Item } from './Item'

//3
//logica y mapa de item 
export const ItemDetail = () => {

const [item, setItem] = useState([])


  return (
    <div>
        <Item item={item}/>
    </div>
  )
}
