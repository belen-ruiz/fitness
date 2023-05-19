import { Person, SearchRounded, SearchSharp, SearchTwoTone, VerifiedUserRounded } from '@mui/icons-material';
import * as React from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { useModal } from "../../hooks/useModal";
import { SearchBar } from '../minicomponentes/SearchBar';

const settings = ['perfil', 'cuenta', 'logout'];


const Search = () => {
  return (
    
    <>
      <SearchBar />
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
        <div>
          <Person/>
        </div>
      </>
    )
  }

  

export const Dashboard = () => {
  return (
    <div className='container-dashboard flex-center'>
        <Search />
        <Notifications />
        <Profile />
    </div>
  )
}
