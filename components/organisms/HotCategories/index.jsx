import Link from 'next/link';
import React from 'react';
import CategoryCard from '../../molecules/CategoryCard';

const HotCategories = ({ categoryList }) => {
  return (
    <section className="mt-20 mb-10">
      <div className="container">
        <div className="categories-wrapper">
          <div className="flex w-full justify-between">
            <h2 className="font-sans text-2xl font-bold text-slate-800">
              Hot Categories 🔥
            </h2>
            <Link href="/category">
              <a className="text-xl text-primary">Show All</a>
            </Link>
          </div>
          <div className="mt-5 flex flex-wrap justify-around lg:mt-10 lg:justify-between">
            {categoryList.slice(0, 6).map((category, index) => (
              <CategoryCard key={index} category={category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotCategories;
