import React from 'react';
import Link from 'next/link';

import Image from 'next/image';
import { Button } from '@chakra-ui/react';
import Rating from '../Rating';

import localCurrency from '../../../utils/localCurrency';
import styles from './productCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <Link href={`/product/${product._id}`} passHref>
      <a className={` ${styles['product-card']}`}>
        <div className="image-wrapper relative h-28 w-full lg:h-40">
          <a>
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
          </a>
        </div>

        <span className="mt-3 font-sans text-lg font-bold text-slate-700">
          {localCurrency(product.price)}
        </span>
        <Rating value={product.rating} text={product.rating.toFixed(1)} />

        <a className="mt-2 text-center text-base font-semibold leading-normal">
          {product.name}
        </a>

        <div className="product-info-wrapper mt-5 flex w-full items-center justify-evenly">
          <Button variant="outline_gray">
            <i className="fa-regular fa-heart"></i>
          </Button>

          <Button variant="outline_gray">
            <i className="fa-solid fa-bag-shopping"></i>
          </Button>

          <Button variant="primary" className="!rounded-xl">
            Buy
          </Button>
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;
