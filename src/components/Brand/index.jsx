import Link from 'next/link';
import React from 'react';

const Brand = () => {
  return (
    <Link href='/'>
      <a className='brand-logo text-2xl font-extrabold'>
        <span className='text-orange-400 '>Chan</span>
        <span className='text-gray-600'>store</span>
      </a>
    </Link>
  );
};

export default Brand;
