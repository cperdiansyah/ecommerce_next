import React, { useCallback, useEffect, useState } from 'react';

import { Box, chakra } from '@chakra-ui/react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import Brand from '../../atom/Brand';
import SearchBox from '../../molecules/SearchBox';
import NavAuthButton from './NavAuthButton';
import Button from '../../atom/Button';
import { useRouter } from 'next/router';
import Link from 'next/link';

const CloseIcon = chakra(AiOutlineClose);
const MenuIcon = chakra(AiOutlineMenu);

const Navbar = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [display, setDisplay] = useState('hidden');
  const [isDekstop, setIsDekstop] = useState(true);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleWindowResize = useCallback((event) => {
    setWindowSize(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      if (window.innerWidth <= 1000) {
        setIsDekstop(false);
      } else {
        setIsDekstop(true);
      }
    };
  }, [handleWindowResize, windowSize]);

  useEffect(() => {
    setDisplay(isOpen ? 'flex' : 'hidden');
  }, [isOpen]);

  return (
    <nav
      className={`nav-wrapper fixed z-10 w-full bg-white bg-opacity-80 py-5 shadow-md  backdrop-blur  ${[
        className,
      ].join(' ')}`}
    >
      <div className="container items-center justify-between lg:flex">
        <div className="nav-main-wrapper flex w-full items-center justify-between lg:w-1/2">
          <Brand />
          <SearchBox className="mx-4 w-2/3 rounded-2xl border-2 lg:w-full" />
          <MenuToggle isOpen={isOpen} toggle={toggle} />
        </div>
        <MenuLinks isDekstop={isDekstop} display={display} />
        {/* <MenuLinksMobile display={display} /> */}
      </div>
    </nav>
  );
};

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: 'block', lg: 'none' }} onClick={toggle}>
      <Button variant="outline_gray" className="!rounded-md">
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </Button>
    </Box>
  );
};
const MenuItem = ({ className, children, isIcon, isLast, href = '/' }) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <a
        className={`${[className].join(' ')} ${
          router.pathname === href && !isIcon ? 'active' : ''
        }`}
        aria-current="page"
      >
        {children}
      </a>
    </Link>
  );
};

const MenuLinks = ({ isDekstop, display }) => {
  return (
    <>
      {isDekstop ? (
        <div
          className={`nav-menus-wrapper  items-center justify-between lg:flex lg:w-1/2`}
        >
          <div className={`nav-menus lg:w-1/2 `}>
            <MenuItem className="mr-3 p-3">Home</MenuItem>
            <MenuItem href="/product" className="mr-3 p-3">
              Product
            </MenuItem>
            <MenuItem href="/category" className="mr-3 p-3">
              Category
            </MenuItem>
          </div>

          <div
            className={`nav-button  flex items-center justify-between lg:w-1/2`}
          >
            <MenuItem
              href="/"
              className=" mx-auto flex w-full items-center lg:mr-5 lg:w-fit"
              isIcon
            >
              <i className="fa-regular fa-heart mr-1 w-full text-center text-xl text-red-500 lg:w-fit"></i>
            </MenuItem>

            <MenuItem
              href="/"
              className="mx-auto flex w-full items-center lg:mr-5 lg:w-fit"
              isIcon
            >
              <i className="fa-solid fa-bag-shopping w-full text-center text-xl text-secondary lg:w-fit"></i>
            </MenuItem>

            <NavAuthButton />
          </div>
        </div>
      ) : (
        <div
          className={`nav-menus-wrapper ${display} w-full flex-col flex-wrap items-center justify-between text-center lg:flex lg:w-1/2`}
        >
          <div
            className={`nav-menus mt-3 flex w-full flex-col flex-wrap text-center lg:w-1/2`}
          >
            <MenuItem className="bg-opacity-20 p-3 hover:bg-slate-100">
              Home
            </MenuItem>
            <MenuItem
              href="/product"
              className="bg-opacity-20 p-3 hover:bg-slate-100"
            >
              Product
            </MenuItem>
            <MenuItem
              href="/category"
              className="bg-opacity-20 p-3 hover:bg-slate-100"
            >
              Category
            </MenuItem>
          </div>

          <div
            className={`nav-button flex w-full flex-col flex-wrap items-center justify-between text-center lg:w-1/2`}
          >
            <MenuItem
              href="/"
              className=" mx-auto flex w-full items-center lg:mr-5"
              isIcon
            >
              <i className="fa-regular fa-heart mr-1 w-full text-center text-xl text-red-500"></i>
            </MenuItem>

            <MenuItem
              href="/"
              className="mx-auto flex w-full items-center lg:mr-5"
              isIcon
            >
              <i className="fa-solid fa-bag-shopping w-full text-center text-xl text-secondary"></i>
            </MenuItem>

            <NavAuthButton
              className={`mt-3 flex w-full flex-col flex-wrap text-center`}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
