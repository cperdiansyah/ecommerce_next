import React from 'react';
import Brand from '../../components/Brand';

const Navbar = () => {
  return (
    <nav className='nav-wrapper py-4 bg-white shadow-md'>
      <div className='container '>
        <Brand />
      </div>
    </nav>
  );
};

export default Navbar;
