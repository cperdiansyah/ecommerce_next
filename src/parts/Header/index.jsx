import { Button, ButtonGroup } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';
import styles from './header.module.scss';

import Brand from '../../components/Brand';

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

            <Link href='/product'>
              <a className='mr-3 '>Product</a>
            </Link>

            <Link href='/category'>
              <a className='mr-3'>Category</a>
            </Link>
          </div>
          <div className='flex items-center  mr-5'></div>
          <Link href='/'>
            <a className='flex items-center  mr-5'>
              <i className='fa-regular fa-heart mr-1 text-xl text-red-500'></i>
            </a>
          </Link>
          <Link href='/'>
            <a className='flex items-center  mr-5'>
              <i className='fa-solid fa-bag-shopping text-xl text-secondary'></i>
            </a>
          </Link>
          <Link href='/login'>
            <a className='text-white'>
              <Button className='text-white bg-orange-400 rounded-lg shadow-md hover:bg-primary hover:shadow-lg mr-4'>
                Login
              </Button>
            </a>
          </Link>

          <Link href='/register'>
            <a className=''>
              <Button
                variant='outline'
                className='bg rounded-lg border-orange-400  text-primary hover:bg-orange-100 '
                color='warning'
              >
                Signup
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
