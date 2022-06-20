import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { Button } from '@chakra-ui/react';

import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import { getProductDetails } from '../../redux/actions/productActions';
import {
  categoryDetailsSelector,
  productDetailsSelector,
} from '../../redux/reducers/productReducers';

import Loader from '../../src/components/Loader';
import Message from '../../src/components/Message';
import Layout from '../../src/parts/Layout';
import Rating from '../../src/components/rating';
import Card from '../../src/components/Card';
import localCurrency from '../../utils/localCurrency';
import { getCategoryDetail } from '../../redux/actions/categoryActions';
import Link from 'next/link';

const ProductDetails = () => {
  const { isReady, query } = useRouter();
  const { id } = query;
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.productDetail);

  const product = useSelector((state) =>
    productDetailsSelector.selectById(state, id)
  );
  const categoryId = product ? product.category : '';
  const category = useSelector((state) =>
    categoryDetailsSelector.selectById(state, categoryId)
  );

  useEffect(() => {
    if (isReady) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, isReady, id]);

  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        product &&
        category && (
          <>
            {/* Product */}
            <section className='mb-10'>
              <div className='container'>
                <div className='categories-wrapper'>
                  {/* Product Details Top */}
                  <Card className='mb-10'>
                    <div className='w-full flex '>
                      {/* Image Wrapper */}
                      <div className='product-image-view-wrapper pr-10 '>
                        <div className='image-wrapper '>
                          <div className='image '>
                            <Zoom>
                              <Image
                                src={`/products/${product.images[0].image}`}
                                blurDataURL={`/products/${product.images[0].image}`}
                                alt={product.name}
                                width={400}
                                height={300}
                                objectFit='cover'
                                className='rounded-xl'
                                placeholder='blur'
                                priority={true}
                              />
                            </Zoom>
                          </div>
                        </div>
                      </div>
                      {/* Product Info Wrapper */}
                      <div className='product-info-wrapper'>
                        <h2 className='text-3xl font-bold text-slate-800 font-sans'>
                          {product.name}
                        </h2>
                        <div className='rating wrapper mt-3 flex'>
                          <Rating
                            value={product.rating}
                            text={product.rating.toFixed(1)}
                            isLarge
                          />

                          <span className='ml-1 text-lg font-semibold'>
                            ({product.numReviews} Reviews)
                          </span>
                        </div>
                        <div className='block mt-4'>
                          <Link href={`/category/${category.slug}`}>
                            <a className='text-slate-600 underline'>
                              {category.name}
                            </a>
                          </Link>
                        </div>
                        <Card className='mt-5  w-fit'>
                          <div className='flex flex-col'>
                            <div className='price-wrapper '>
                              <span className='text-2xl font-semibold'>
                                {localCurrency(product.price)}
                              </span>
                            </div>
                            <div className='product-info-wrapper flex justify-evenly items-center mt-5 w-full'>
                              <Button className='bg-white border border-slate-500 px-4 mr-2  bg-opacity-80 p-2  text-slate-500 rounded-xl'>
                                <i className='fa-regular fa-heart'></i>
                              </Button>

                              <Button className='bg-white border border-slate-500 px-4 mr-2 bg-opacity-80 p-2  text-slate-500  rounded-xl'>
                                <i className='fa-solid fa-bag-shopping'></i>
                              </Button>

                              <Button className='btn bg-slate-white bg-primary px-5 bg-opacity-80 p-2 shadow-md text-white  rounded-xl'>
                                Buy
                              </Button>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </div>
                  </Card>

                  {/* Product Description */}
                  <Card>
                    <div className='w-full flex flex-col'>
                      <div className='product-description-wrapper'>
                        <h2 className='text-3xl font-bold text-slate-800 font-sans'>
                          Description
                        </h2>
                        <p className='text-slate-600 text-xl font-sans mt-5'>
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </section>
          </>
        )
      )}
    </Layout>
  );
};

export default ProductDetails;
