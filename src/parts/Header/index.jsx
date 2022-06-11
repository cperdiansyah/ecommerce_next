import { Button, Link as MaterialLink } from '@mui/material';
import React from 'react';
import Link from 'next/link';

import Brand from '../../components/Brand';

import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchBox from '../../components/SearchBox';

const Header = (props) => {
  const className = [props.className];

  return (
    <nav
      className={`nav-wrapper py-5 bg-white bg-opacity-80 backdrop-blur shadow-md fixed w-full  z-10  ${className.join(
        ' '
      )}`}
    >
      <div className='container flex justify-between items-center'>
        <Brand />

        <SearchBox className='border-2  w-1/2 rounded-2xl' />

        <div className='nav-menus-wrapper flex  items-center'>
          <div className='nav-menus'>
            <Link href='/'>
              <a className='mr-3 '>Home</a>
            </Link>

            <Link href='/'>
              <a className='mr-3'>Category</a>
            </Link>
          </div>
          <div className='flex items-center  mr-5'></div>
          <Link href='/'>
            <a className='flex items-center  mr-5'>
              <FavoriteBorderOutlinedIcon className='mr-1 text-red-500' />
            </a>
          </Link>
          <Link href='/'>
            <a className='flex items-center  mr-5'>
              <LocalMallOutlinedIcon className='mr-1 ' />
            </a>
          </Link>

          <Button
            variant='contained'
            className='mr-4 bg-orange-400 rounded-lg shadow-md hover:bg-primary hover:shadow-lg'
            color='warning'
          >
            Login
          </Button>
          <Button
            variant='outlined'
            className='bg rounded-lg border-orange-400  hover:bg-orange-100 '
            color='warning'
          >
            Signup
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
