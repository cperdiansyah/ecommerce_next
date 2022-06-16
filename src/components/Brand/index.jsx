import Link from 'next/link';
import React from 'react';

const Brand = ({ isDark }) => {
  return (
    <Link href='/'>
      <a className='brand-logo text-2xl font-extrabold custom-font'>
        <span className='text-primary '>Chan</span>
        <span className={isDark ? ' text-white' : 'text-secondary'}>store</span>
      </a>
    </Link>
  );
};

export default Brand;
