import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const CategoryCard = ({ category }) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <a className="mt-5 flex min-w-[45%] flex-col flex-wrap items-center justify-center rounded-xl bg-white py-4 px-3 text-slate-700 shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:min-w-[30%] lg:mt-0 lg:min-w-[15%]">
        <i
          className={`${category.icon} text-3xl text-slate-800 text-opacity-80`}
        ></i>
        <div className="mt-3 text-sm font-semibold">{category.name}</div>
      </a>
    </Link>
  );
};

export default CategoryCard;
