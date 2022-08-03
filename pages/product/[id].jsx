import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@chakra-ui/react';

import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import Loader from '../../components/atom/Loader';
import Layout from '../../components/templates/Layout';
import Rating from '../../components/molecules/Rating';
import Card from '../../components/atom/Card';

import localCurrency from '../../utils/localCurrency';

import ROOT_URL from '../../utils/url';
import { fetch } from '../../utils/request';

export async function getServerSideProps(context) {
  const { id } = context.query;

  const getProductDetails = await fetch(`${ROOT_URL}/api/product/${id}`);
  const categoryId = getProductDetails.category;
  const getCategory = await fetch(`${ROOT_URL}/api/category/${categoryId}`);

  return {
    props: {
      product: getProductDetails,
      category: getCategory,
    },
  };
}

const ProductDetails = (props) => {
  const { product, category } = props;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        product &&
        category && (
          <Layout>
            {error && <Message status="error" message={error} />}
            {/* Product */}
            <section className="mb-10">
              <div className="container">
                <div className="categories-wrapper">
                  {/* Product Details Top */}
                  <Card className="mb-10">
                    <div className="w-full flex flex-wrap flex-col lg:flex-row ">
                      {/* Image Wrapper */}
                      <div className="product-image-view-wrapper mx-auto lg:mx-0 lg:pr-10 ">
                        <div className="image-wrapper ">
                          <div className="image ">
                            <Zoom>
                              <Image
                                src={`/products/${product.images[0].image}`}
                                blurDataURL={`/products/${product.images[0].image}`}
                                alt={product.name}
                                width={400}
                                height={300}
                                objectFit="cover"
                                className="rounded-xl"
                                placeholder="blur"
                                priority={true}
                              />
                            </Zoom>
                          </div>
                        </div>
                      </div>

                      {/* Product Info Wrapper */}
                      <ProductInfo product={product} category={category} />
                    </div>
                  </Card>
                  {/* Product Description */}
                  <Description product={product} />
                </div>
              </div>
            </section>
          </Layout>
        )
      )}
    </>
  );
};

const ProductInfo = ({ product, category }) => {
  return (
    <div className="product-info-wrapper">
      <h2 className="text-3xl font-bold text-slate-800 font-sans mt-5 lg:mt-5 ">
        {product.name}
      </h2>
      <div className="rating wrapper mt-3 flex">
        <Rating
          value={product.rating}
          text={product.rating.toFixed(1)}
          isLarge
        />
        <span className="ml-1 text-lg font-semibold">
          ({product.numReviews} Reviews)
        </span>
      </div>
      <div className="block mt-4">
        <Link href={`/category/${category.slug}`}>
          <a className="text-slate-600 underline">{category.name}</a>
        </Link>
      </div>
      <div className="mt-5  w-full lg:w-2/3">
        <div className="flex flex-col">
          <div className="price-wrapper ">
            <span className="text-2xl font-semibold">
              {localCurrency(product.price)}
            </span>
          </div>
          <div className="product-info-wrapper flex justify-evenly items-center mt-5 w-full">
            <Button variant="outline_gray" className="mx-3 w-1/3">
              <i className="fa-regular fa-heart"></i>
            </Button>

            <Button variant="outline_gray" className="mx-3 w-1/3">
              <i className="fa-solid fa-bag-shopping"></i>
            </Button>

            <Button variant="primary" className="mx-3 w-1/3">
              Buy
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Description = ({ product }) => {
  return (
    <Card>
      <div className="w-full flex flex-col">
        <div className="product-description-wrapper">
          <h2 className="text-3xl font-bold text-slate-800 font-sans">
            Description
          </h2>
          <p className="text-slate-600 text-xl font-sans mt-5">
            {product.description}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ProductDetails;
