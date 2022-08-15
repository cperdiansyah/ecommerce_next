import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Loader from '../components/atom/Loader';
import Message from '../components/atom/Message';
import ProductCard from '../components/molecules/ProductCard';

import Layout from '../components/templates/Layout';
import { productFavoriteSelector } from '../redux/reducers/productReducers';

const favorites = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const favorites = useSelector(productFavoriteSelector);


  useEffect(() => {
    setLoading(false);
  }, [favorites.length]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Layout>
          {error && <Message status="error" message={error} />}
          {/* Product */}
          <section className="mb-10">
            <div className="container">
              <div className="products-wrapper">
                <div className="flex w-full justify-between">
                  <h2 className="font-sans text-2xl font-bold text-slate-800">
                    Favorites
                  </h2>
                  
                </div>
                <div className="mt-5 grid grid-cols-2 gap-5 md:grid-cols-3 lg:mt-10 lg:grid-cols-5 lg:gap-7">
                  {favorites.map((favorite, index) => (
                    <ProductCard key={index} product={favorite.product} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </Layout>
      )}
    </>
  );
};

export default favorites;
