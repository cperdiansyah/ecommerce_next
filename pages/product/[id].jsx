import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@chakra-ui/react';

import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import Loader from '../../components/atom/Loader';
import Layout from '../../components/templates/Layout';
import Rating from '../../components/molecules/Rating';
import Card from '../../components/atom/Card';

import localCurrency from '../../utils/localCurrency';

import Cookies from 'js-cookie';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { getCarts, getFavorites } from '../../redux/actions/productActions';
import axios from '../../config/axios';
import { productFavoriteSelector } from '../../redux/reducers/productReducers';
import cartHooks from '../../hooksRedux/cartHooks';
import favoriteHooks from '../../hooksRedux/favoriteHooks';

export async function getServerSideProps(context) {
  const { id } = context.query;
  const { data } = await axios.get(`/product/${id}`, {
    withCredentials: true,
  });

  return {
    props: {
      product: data,
    },
  };
}

const ProductDetails = (props) => {
  const { product } = props;
  const { category } = product;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        product && (
          <Layout>
            {error && <Message status="error" message={error} />}
            {/* Product */}
            <section className="mb-10">
              <div className="container">
                <div className="categories-wrapper">
                  {/* Product Details Top */}
                  <Card className="mb-10">
                    <div className="flex w-full flex-col flex-wrap lg:flex-row ">
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
  const router = useRouter();
  const dispatch = useDispatch();
  const { getFavorites, addFavorite } = favoriteHooks();
  const { getCarts, addCarts } = cartHooks();

  const isLogin = Cookies.get('isLogin');
  const axiosPrivate = useAxiosPrivate();
  const [favorite, setFavorite] = useState(false);
  const { _id: productId } = product;

  const favoriteState = useSelector(productFavoriteSelector).filter(
    (item) => item.product._id === productId
  );

  useEffect(() => {
    if (favoriteState.length > 0) {
      setFavorite(true);
    }
  }, [productId]);

  const loginCehck = () => {
    if (!parseInt(isLogin)) {
      return router.push({
        pathname: '/login',
        query: {
          type: 'info',
          message: 'Please login first',
        },
      });
    }
  };

  const favoriteButtonHandler = async () => {
    loginCehck();
    if (parseInt(isLogin)) {
      addFavorite(product);
      getFavorites();
      setFavorite(!favorite);
    }
  };

  const cartButtonHandler = async () => {
    loginCehck();
    if (parseInt(isLogin)) {
      
      addCarts(product);
      getCarts();
    }
  };
  return (
    <div className="product-info-wrapper">
      <h2 className="mt-5 font-sans text-3xl font-bold text-slate-800 lg:mt-5 ">
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
      <div className="mt-4 block">
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
          <div className="product-info-wrapper mt-5 flex w-full items-center justify-evenly">
            <Button
              variant="outline_gray"
              className="mx-3 w-1/3"
              onClick={favoriteButtonHandler}
            >
              {favorite ? (
                <i className="fa-solid fa-heart text-rose-400"></i>
              ) : (
                <i className="fa-regular fa-heart"></i>
              )}
            </Button>

            <Button
              variant="outline_gray"
              className="mx-3 w-1/3"
              onClick={cartButtonHandler}
            >
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
      <div className="flex w-full flex-col">
        <div className="product-description-wrapper">
          <h2 className="font-sans text-3xl font-bold text-slate-800">
            Description
          </h2>
          <p className="mt-5 font-sans text-xl text-slate-600">
            {product.description}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ProductDetails;
