import React from 'react';
import { ItemBanner } from '../banner/ItemBanner'
import { ItemDetails } from './ItemDetails'

//4
//devuelvo estilo del item 
export const Item = ({ data, cast, crew }) => {
  

  return (
    <div>
        <div>
          <ItemBanner data={ data }/>
          <ItemDetails cast={ cast }  crew={ crew }/>
        </div>
    </div>
  )
}
