import { Typography, Stack } from '@mui/material'
import React from 'react'
import { HorizontalScrollBar } from "./HorizontalScrollBar"

export const SimilarExercises = ({ similarMuscle, similarEquipment }) => {
  return (
    <div>
        <Typography>Exercises that target similar Muscles</Typography>

        <Stack>
            {similarMuscle && <HorizontalScrollBar data={similarMuscle}/>}
        </Stack>

        <Typography>Exercises that target similar Equipment</Typography>

        <Stack>
            {similarEquipment && <HorizontalScrollBar data={similarEquipment}/>}
        </Stack>
    </div>
  )
}
