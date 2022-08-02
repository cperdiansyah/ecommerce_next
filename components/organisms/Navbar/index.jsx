import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@chakra-ui/react';
import Link from 'next/link';

import { useDispatch, useSelector } from 'react-redux';

import Brand from '../../atom/Brand';
import Button from '../../atom/Button';
import SearchBox from '../../molecules/SearchBox';
import NavItem from './NavItem';
import Auth from './Auth';

const Navbar = ({ className, isLogin }) => {
  /*  const dispatch = useDispatch();
  // const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  const userLogin = useSelector((state) => state.userInfo);

  const { user } = userLogin;

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  useEffect(() => {
       if (user && user.name) {
            setIsLogin(true);
        }
    setLoading(false);
  }, [user]); */
  return (
    <nav
      className={`nav-wrapper py-5 bg-white bg-opacity-80 backdrop-blur shadow-md fixed w-full  z-10  ${[
        className,
      ].join(' ')}`}
    >
      <div className="container flex justify-between items-center">
        <Brand />

        <SearchBox className="border-2  w-1/2 rounded-2xl" />

        <div className="nav-menus-wrapper flex  items-center">
          <div className="nav-menus">
            <NavItem href="/" className="mr-3">
              Home
            </NavItem>
            <NavItem href="/product" className="mr-3">
              Product
            </NavItem>
            <NavItem href="/category" className="mr-3">
              Category
            </NavItem>
          </div>
          <div className="flex items-center  mr-5"></div>

          <NavItem href="/" className="flex items-center  mr-5">
            <i className="fa-regular fa-heart mr-1 text-xl text-red-500"></i>
          </NavItem>

          <NavItem href="/" className="flex items-center  mr-5">
            <i className="fa-solid fa-bag-shopping text-xl text-secondary"></i>
          </NavItem>

          <Auth />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
