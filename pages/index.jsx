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
          <section className="overflow-hidden rounded-3xl bg-[#D6EFFB] ">
            <div className="hero-section-wrapper">
              <div className="flex flex-col lg:flex-row">
                <div className="container px-7 py-8 lg:w-1/2 lg:pt-20 lg:pl-16">
                  <h1 className="font-sans text-3xl font-bold leading-normal text-slate-800 lg:text-4xl">
                    Online store with a wide variety of electronic goods
                  </h1>
                  <p className="pt-5 font-sans text-xl leading-normal text-slate-600">
                    Use the search box to find products you are looking for.
                  </p>
                  <SearchBox className="mt-6" />
                </div>
                <div className="lg:w-1/2">
                  <div className="image-wrapper hidden justify-end lg:flex">
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
