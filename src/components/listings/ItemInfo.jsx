import React from 'react'

export const ItemInfo = ({ data }) => {

  return (
    <div>
        <div>{data.title || data.name}</div>
        <div>{data.media_type}</div>
    </div>
  )
}
