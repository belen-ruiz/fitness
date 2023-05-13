import { useState } from 'react';
import { Dashboard } from './Dashboard';
import { Logo } from './Logo';
import { Pages } from './Pages';

export const NavBar = () => {
  
  return (
    <div className='container-navbar flex-center'>
        <Logo />
        <Pages />
        <Dashboard />        
    </div>
  );
}
