import React from 'react'

export const Exercise = ({exerciseDetail}) => {
    const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail;


  return (
    <>
        <img src={gifUrl} alt={name} />
    </>
  )
}
