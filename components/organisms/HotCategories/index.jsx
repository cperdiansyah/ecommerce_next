import Link from 'next/link';
import React from 'react'
import CategoryCard from '../../molecules/CategoryCard';

const HotCategories = ({ categoryList }) => {
  return (
    <section className="mt-20 mb-10">
      <div className="container">
        <div className="categories-wrapper">
          <div className="w-full flex justify-between">
            <h2 className="text-2xl font-bold text-slate-800 font-sans">
              Hot Categories 🔥
            </h2>
            <Link href="/category">
              <a className="text-xl text-primary">Show All</a>
            </Link>
          </div>
          <div className="flex flex-wrap justify-between mt-5 lg:mt-10">
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