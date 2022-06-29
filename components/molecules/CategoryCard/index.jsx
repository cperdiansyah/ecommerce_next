import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const CategoryCard = ({ category }) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <a className='flex items-center justify-center flex-wrap flex-col py-4 px-3 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl text-slate-700 lg:min-w-[15%] md:min-w-[30%] min-w-[45%] mt-5 lg:mt-0'>
        <span className='material-icons-outlined text-4xl '>
          {category.icon}
        </span>
        <div className='text-sm font-semibold mt-3'>{category.name}</div>
      </a>
    </Link>
  );
};

export default CategoryCard;
