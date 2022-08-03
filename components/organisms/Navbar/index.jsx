import React from 'react';

import Brand from '../../atom/Brand';
import SearchBox from '../../molecules/SearchBox';
import NavItem from './NavItem';
import Auth from './Auth';

const Navbar = ({ className }) => {
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
