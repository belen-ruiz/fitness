import React from 'react';
import { ItemBanner } from '../banner/ItemBanner'

//4
//devuelvo estilo del item 
export const Item = ({ data, cast, crew }) => {
  

  return (
    <div>
        <div>
          <ItemBanner data={ data }/>
        </div>
    </div>
  )
}
