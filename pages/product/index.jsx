import React, { useState } from 'react';

import Loader from '../../components/atom/Loader';
import ProductCard from '../../components/molecules/ProductCard';
import Layout from '../../components/templates/Layout';
import ROOT_URL from '../../utils/url';
import { fetch } from '../../utils/request';

export async function getServerSideProps() {
  const getProducts = await fetch(`${ROOT_URL}/api/product`);
  return {
    props: {
      productList: getProducts,
    },
  };
}

const Products = (props) => {
  const { productList } = props;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        productList && (
          <Layout>
            {error && <Message status="error" message={error} />}

            {/* Product */}
            <section className="mb-10">
              <div className="container">
                <div className="products-wrapper">
                  <div className="flex w-full justify-between">
                    <h2 className="font-sans text-2xl font-bold text-slate-800">
                      Products
                    </h2>
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-5 md:grid-cols-3 lg:mt-10 lg:grid-cols-5 lg:gap-7">
                    {productList.map((product, index) => (
                      <ProductCard key={index} product={product} />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </Layout>
        )
      )}
    </>
  );
};

export default Products;
