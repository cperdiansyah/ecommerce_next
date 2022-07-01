import React, { useState } from 'react';

import ROOT_URL from '../../utils/url';
import { fetch } from '../../utils/request';

import CategoryCard from '../../components/molecules/CategoryCard';
import Loader from '../../components/atom/Loader';
import Layout from '../../components/templates/Layout';

export async function getServerSideProps() {
  const getCategories = await fetch(`${ROOT_URL}/api/category`);
  return {
    props: {
      categoryList: getCategories,
    },
  };
}

const Categories = (props) => {
  const { categoryList } = props;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Layout>
          {error && <Message status="error" message={error} />}
          <section className="mb-10">
            <div className="container">
              <div className="categories-wrapper">
                <div className="w-full flex justify-between">
                  <h2 className="text-2xl font-bold text-slate-800 font-sans">
                    Categories
                  </h2>
                </div>
                <div className="flex flex-wrap justify-between mt-5 lg:mt-10">
                  {categoryList.map((category, index) => (
                    <CategoryCard key={index} category={category} />
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

export default Categories;
