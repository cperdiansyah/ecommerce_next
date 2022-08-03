import { useState } from 'react';
import Image from 'next/image';

import Loader from '../components/atom/Loader';
import Message from '../components/atom/Message';

import Layout from '../components/templates/Layout';

import SearchBox from '../components/molecules/SearchBox';
import { fetch } from '../utils/request';
import ROOT_URL from '../utils/url';
import PopularProducts from '../components/organisms/PopularProducts';
import HotCategories from '../components/organisms/HotCategories';

export async function getServerSideProps() {
  const getProducts = await fetch(`${ROOT_URL}/api/product`);
  const getCategories = await fetch(`${ROOT_URL}/api/category`);

  return {
    props: {
      productList: getProducts,
      categoryList: getCategories,
    },
  };
}
const Home = (props) => {
  const { categoryList, productList } = props;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Layout>
          {error && <Message status="error" message={error} />}
          {/* Hero Section */}
          <section className="rounded-3xl overflow-hidden bg-[#D6EFFB] ">
            <div className="hero-section-wrapper">
              <div className="flex flex-col lg:flex-row">
                <div className="container pt-20 pl-16 lg:w-1/2">
                  <h1 className="text-4xl leading-normal font-bold text-slate-800 font-sans">
                    Online store with a wide variety of electronic goods
                  </h1>
                  <p className="text-xl pt-5 leading-normal font-sans text-slate-600">
                    Use the search box to find products you are looking for.
                  </p>
                  <SearchBox className="mt-6" />
                </div>
                <div className="lg:w-1/2">
                  <div className="image-wrapper flex justify-end">
                    <Image
                      src="/hero-image.png"
                      quality={50}
                      alt="Picture of the author"
                      width={270}
                      height={400}
                      objectFit="cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Categories */}
          <HotCategories categoryList={categoryList} />
          {/* Product */}
          <PopularProducts productList={productList} />
        </Layout>
      )}
    </>
  );
};

export default Home;
