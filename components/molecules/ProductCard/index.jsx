import React from 'react';
import Link from 'next/link';

import Image from 'next/image';
import { Button } from '@chakra-ui/react';
import Cookies from 'js-cookie';

import Rating from '../Rating';

import localCurrency from '../../../utils/localCurrency';
import styles from './productCard.module.css';
import { useRouter } from 'next/router';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';

const ProductCard = ({ product }) => {
  const isLogin = Cookies.get('isLogin');
  const router = useRouter();
  const axiosPrivate = useAxiosPrivate();
  const { _id: productId } = product;

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
      const response = await axiosPrivate.post(
        `/product/${productId}/favorites`,
        {
          productId,
        }
      );
      const { data } = response;

      console.log(data);
    }
  };

  return (
    <div className={` ${styles['product-card']}`}>
      <Link href={`/product/${product._id}`}>
        <a>
          <div className="image-wrapper relative h-28 w-full lg:h-40">
            <Image
              src={`/products/${product.images[0].image}`}
              blurDataURL={`/products/${product.images[0].image}`}
              alt={product.name}
              layout="fill"
              className="rounded-xl"
              objectFit="contain"
              placeholder="blur"
              priority={true}
              position="relative"
            />
          </div>

          <div className="price-wrapper mt-3 text-center">
            <span className="font-sans text-lg font-bold text-slate-700">
              {localCurrency(product.price)}
            </span>
            <Rating value={product.rating} text={product.rating.toFixed(1)} />
          </div>

          <h3 className="mt-2 text-center text-base font-semibold leading-normal">
            {product.name}
          </h3>
        </a>
      </Link>

      <div className="product-info-wrapper z-3 mt-5 flex w-full items-center justify-evenly">
        <Button variant="outline_gray" onClick={favoriteButtonHandler}>
          <i className="fa-regular fa-heart"></i>
        </Button>

        <Button variant="outline_gray">
          <i className="fa-solid fa-bag-shopping"></i>
        </Button>

        <Button variant="primary" className="!rounded-xl">
          Buy
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
