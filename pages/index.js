import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../redux/actions/categoryActions';
import { getProducts } from '../redux/actions/productActions';
import { categoryListSelector } from '../redux/reducers/categoryReducers';
import { productListSelector } from '../redux/reducers/productReducers';
import CategoryCard from '../src/components/CategoryCard';

import Loader from '../src/components/Loader';
import Message from '../src/components/Message';
import ProductCard from '../src/components/ProductCard';
import SearchBox from '../src/components/SearchBox';
import Layout from '../src/parts/Layout';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, [dispatch]);

  const { loading, error } = useSelector((state) => state.productList);
  const productList = useSelector(productListSelector.selectAll);
  const categoryList = useSelector(categoryListSelector.selectAll);

  return (
    <>
      <Layout>
        {loading ? (
          <Loader />
        ) : (
          <>
            {error && <Message severity='error' message={error} />}

            {/* Hero Section */}
            <section className='rounded-3xl overflow-hidden bg-[#D6EFFB] '>
              <div className='hero-section-wrapper'>
                <div className='flex flex-col lg:flex-row'>
                  <div className='container pt-20 pl-16 lg:w-1/2'>
                    <h1 className='text-4xl leading-normal font-bold text-slate-800 font-sans'>
                      Online store with a wide variety of electronic goods
                    </h1>
                    <p className='text-xl pt-5 leading-normal font-sans text-slate-600'>
                      Use the search box to find products you are looking for.
                    </p>
                    <SearchBox className='mt-6' />
                  </div>
                  <div className='lg:w-1/2'>
                    <div className='image-wrapper flex justify-end'>
                      <Image
                        src='/hero-image.png'
                        alt='Picture of the author'
                        width={270}
                        height={400}
                        objectFit='cover'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Categories */}
            <section className='mt-20 mb-10'>
              <div className='container'>
                <div className='categories-wrapper'>
                  <div className='w-full flex justify-between'>
                    <h2 className='text-2xl font-bold text-slate-800 font-sans'>
                      Hot Categories 🔥
                    </h2>
                    <Link href='/category'>
                      <a className='text-xl text-primary'>Show All</a>
                    </Link>
                  </div>
                  <div className='flex flex-wrap justify-between mt-5 lg:mt-10'>
                    {categoryList.map((category, index) => (
                      <CategoryCard key={index} category={category} />
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Product */}
            <section className='mt-20 mb-10'>
              <div className='container'>
                <div className='categories-wrapper'>
                  <div className='w-full flex justify-between'>
                    <h2 className='text-2xl font-bold text-slate-800 font-sans'>
                      Popular Goods
                    </h2>
                    <Link href='/category'>
                      <a className='text-xl text-primary'>Show All</a>
                    </Link>
                  </div>
                  <div className='flex flex-wrap justify-between mt-5 lg:mt-10'>
                    {productList.slice(0, 5).map((product, index) => (
                      <ProductCard key={index} product={product} />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </Layout>
    </>
  );
}
