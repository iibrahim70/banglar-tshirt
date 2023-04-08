import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <Link className='ml-4' to='/'>Home</Link>
      <Link className='ml-4' to='review'>Order Review</Link>
      <Link className='ml-4'  to='about'>About</Link>
      <Link className='ml-4' to='contact'>Contact</Link>
    </nav>
  );
};

export default Header;