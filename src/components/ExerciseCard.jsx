import { Typography } from '@mui/material'
import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const ExerciseCard = ({ exercise }) => {
  return (
      <Link to={`/exercise/${exercise.id}`}>
        <div style={{borderTop: "4px solid #ff2625"}}>
          <img src={exercise.gifUrl} />
        </div>
        <Stack direction="row">
          <button>{exercise.bodyPart}</button>
          <button>{exercise.target}</button>
        </Stack>
        <Typography>{exercise.name}</Typography>
      </Link>
  )
}
