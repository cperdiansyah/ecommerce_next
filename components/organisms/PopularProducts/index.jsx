import Link from 'next/link';
import React from 'react';
import ProductCard from '../../molecules/ProductCard';

const PopularProducts = ({ productList }) => {
  return (
    <>
      {/* Product */}
      <section className="mt-20 mb-10">
        <div className="container">
          <div className="categories-wrapper">
            <div className="w-full flex justify-between">
              <h2 className="text-2xl font-bold text-slate-800 font-sans">
                Popular Goods
              </h2>
              <Link href="/product">
                <a className="text-xl text-primary">Show All</a>
              </Link>
            </div>
            <div className="flex flex-wrap justify-between mt-5 lg:mt-10">
              {productList.length >= 5
                ? productList
                    .slice(0, 5)
                    .map((product, index) => (
                      <ProductCard key={index} product={product} />
                    ))
                : productList.map((product, index) => (
                    <ProductCard key={index} product={product} />
                  ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularProducts;
