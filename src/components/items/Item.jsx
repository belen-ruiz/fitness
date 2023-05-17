import React from 'react'
import { ItemBanner } from '../banner/ItemBanner'
import { Details } from './Details'

//4
//devuelvo estilo del item 
export const Item = ({ data }) => {
  

  return (
    <div className='container-page'>
        <div>
          <ItemBanner data={ data }/>
          <Details data={ data }/>
        </div>
    </div>
  )
}
