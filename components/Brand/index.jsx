import Link from 'next/link';
import React from 'react';

const Brand = () => {
  return (
    <Link href='/'>
      <a className='brand-logo'>ChanStore</a>
    </Link>
  );
};

export default Brand;
