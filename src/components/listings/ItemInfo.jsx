import React from 'react'

export const ItemInfo = ({ data }) => {

  return (
    <div>
        <div>{data.title}</div>
        <div>{data.media_type}</div>
    </div>
  )
}
