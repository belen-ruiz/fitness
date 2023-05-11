import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { ButtonInfo } from  "./atoms/ButtonInfo";

export const ExerciseCard = ({ exercise }) => {

  const StackSx = {
    padding:"2.5rem 1.5rem",
    borderRadius:"40px",
    boxShadow: "2px 2px 20px 0px rgba(0,0,0,0.75)",
    "&:hover":{boxShadow: "10px 10px 30px 0px rgba(0,0,0,0.75)"}
  }

  const TypoSx = {
    fontWeight: 'bolder',
    fontSize: "1rem",
    margin:"0.5rem 0 0 0.5rem",
    textTransform:"capitalize",
    color:"#222222"
  }
  return (
      <Link to={`/exercise/${exercise.id}`} style={{textDecoration: "none"}}>
        <Stack sx={StackSx}>
          <div>
            <img src={exercise.gifUrl} />
          </div>

          <Stack direction="row">
            <ButtonInfo>{exercise.bodyPart}</ButtonInfo>
            <ButtonInfo>{exercise.target}</ButtonInfo>
          </Stack>

          <Typography sx={TypoSx}>{exercise.name}</Typography>
        </Stack>
      </Link>
  )
}
