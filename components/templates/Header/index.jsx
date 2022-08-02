// import { Button } from '@chakra-ui/react';
import Button from '../../atom/Button';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

import { CircularProgress } from '@chakra-ui/react';

import Brand from '../../atom/Brand';

import SearchBox from '../../molecules/SearchBox';
import { logout } from '../../../redux/actions/userActions';
import NavItem from '../../organisms/Navbar/NavItem';

const Header = (props) => {
  const className = [props.className];
  const dispatch = useDispatch();
  const isLogin = props.isLogin;
  // const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  const userLogin = useSelector((state) => state.userInfo);

  const { user } = userLogin;

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  useEffect(() => {
    /*    if (user && user.name) {
            setIsLogin(true);
        } */
    setLoading(false);
  }, [user]);

  return (
    <nav
      className={`nav-wrapper py-5 bg-white bg-opacity-80 backdrop-blur shadow-md fixed w-full  z-10  ${className.join(
        ' '
      )}`}
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
          <Link href="/">
            <a className="flex items-center  mr-5">
              <i className="fa-regular fa-heart mr-1 text-xl text-red-500"></i>
            </a>
          </Link>
          <Link href="/">
            <a className="flex items-center  mr-5">
              <i className="fa-solid fa-bag-shopping text-xl text-secondary"></i>
            </a>
          </Link>

          

          {/* {loading ? (
            <CircularProgress isIndeterminate size="30px" color="orange.300" />
          ) : isLogin ? (
            <Button
              variant="outline"
              className="bg rounded-lg border-orange-400  text-primary hover:bg-orange-100 "
              clor="warning"
              onClick={logoutHandler}
            >
              Logout
            </Button>
          ) : (
            <section>
              <Button isLink href="/login" className=" mr-4" variant="primary">
                Login
              </Button>

              <Button isLink href="/register" variant="outline">
                Signup
              </Button>
            </section>
          )} */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
