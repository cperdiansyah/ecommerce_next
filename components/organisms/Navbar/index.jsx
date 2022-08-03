import React from 'react';

import Brand from '../../atom/Brand';
import SearchBox from '../../molecules/SearchBox';
import NavItem from './NavItem';
import NavAuthButton from './NavAuthButton';

const Navbar = ({ className }) => {
  return (
    <nav
      className={`nav-wrapper py-5 bg-white bg-opacity-80 backdrop-blur shadow-md fixed w-full  z-10  ${[
        className,
      ].join(' ')}`}
    >
      <div className="container flex justify-between items-center">
        <div className="nav-main-wrapper flex w-1/2 justify-between items-center">
          <Brand />

          <SearchBox className="border-2 rounded-2xl w-full mx-4" />
        </div>

        <div className="nav-menus-wrapper flex lg:w-1/2 items-center justify-between">
          <div className="nav-menus lg:w-1/2">
            <NavItem href="/" className="mr-3 p-3">
              Home
            </NavItem>
            <NavItem href="/product" className="mr-3 p-3">
              Product
            </NavItem>
            <NavItem href="/category" className="mr-3 p-3">
              Category
            </NavItem>
          </div>

          <div className="nav-button lg:w-1/2 flex justify-between items-center">
            <NavItem href="/" className="flex items-center mx-auto mr-5" isIcon>
              <i className="fa-regular fa-heart mr-1 text-xl text-red-500"></i>
            </NavItem>

            <NavItem href="/" className="flex items-center mx-auto mr-5" isIcon>
              <i className="fa-solid fa-bag-shopping text-xl text-secondary"></i>
            </NavItem>

            <NavAuthButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
