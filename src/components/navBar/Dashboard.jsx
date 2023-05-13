import { Person, SearchRounded, SearchSharp, SearchTwoTone, VerifiedUserRounded } from '@mui/icons-material';
import * as React from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

const settings = ['perfil', 'cuenta', 'logout'];

const Search = () => {
  return (
    
    <>
      <SearchRounded />
    </>
  )
}

const Notifications = () => {
  return (
    <>
        <Badge color="secondary" variant="dot">
            <MailIcon />
        </Badge>
    </>
  )
}


const Profile = () => {
    return (
      <>
        <Person/>
      </>
    )
  }


export const Dashboard = () => {
  return (
    <div className='container-dashboard'>
        <Search />
        <Notifications />
        <Profile />
    </div>
  )
}
