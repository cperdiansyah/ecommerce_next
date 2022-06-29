import React from 'react';
import Link from 'next/link';

import Image from 'next/image';
import { Button } from '@chakra-ui/react';
import Rating from '../rating';

import localCurrency from '../../../utils/localCurrency';

const ProductCard = ({ product }) => {
  return (
    <div className='flex items-center mb-5 justify-center flex-wrap flex-col py-4 px-3 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl text-slate-700 lg:max-w-[18%] max-w-[35%]     '>
      <div className='image-wrapper lg:h-40 w-full relative'>
        <Link href={`/product/${product._id}`}>
          <a>
            <Image
              src={`/products/${product.images[0].image}`}
              blurDataURL={`/products/${product.images[0].image}`}
              alt={product.name}
              layout='fill'
              className='rounded-xl'
              objectFit='contain'
              placeholder='blur'
              priority={true}
              position='relative'
            />
          </a>
        </Link>
      </div>

      <span className='text-lg font-bold text-slate-700 font-sans mt-3'>
        {localCurrency(product.price)}
      </span>
      <Rating value={product.rating} text={product.rating.toFixed(1)} />

      <Link href={`/product/${product._id}`}>
        <a className='text-base leading-normal text-center font-semibold mt-2'>
          {product.name}
        </a>
      </Link>

      <div className='product-info-wrapper flex justify-evenly items-center mt-5 w-full'>
        <Button className='bg-white border border-slate-500  bg-opacity-80 p-2  text-slate-500 rounded-xl'>
          <i className='fa-regular fa-heart'></i>
        </Button>

        <Button className='bg-white border border-slate-500 bg-opacity-80 p-2  text-slate-500  rounded-xl'>
          <i className='fa-solid fa-bag-shopping'></i>
        </Button>

        <Button className='btn bg-slate-white bg-primary bg-opacity-80 p-2 shadow-md text-white  rounded-xl'>
          Buy
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
