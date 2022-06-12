import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const ProductCard = ({ product }) => {
  return (
    <Link href={`/product/${product._id}`}>
      <a className='flex items-center justify-center flex-wrap flex-col py-4 px-3 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl text-slate-700 lg:max-w-[18%] max-w-[35%] mt-5 lg:mt-0   '>
        <div className='image-wrapper lg:h-40 w-full relative'>
          <Image
            src={`/products/${product.image}`}
            alt={product.name}
            layout='fill'
            className='rounded-xl'
            objectFit='contain'
          />
        </div>

        <span className='text-lg font-bold text-slate-700 font-sans mt-3'>
          Rp. {product.price}
        </span>
        <div className='text-base leading-normal text-center font-semibold mt-2'>
          {product.name}
        </div>
        <div className='product-info-wrapper flex justify-evenly items-center mt-5 w-full'>
          <button className='btn bg-white border border-slate-500  bg-opacity-80 p-2  text-slate-500 rounded-xl'>
            <FavoriteBorderOutlinedIcon />
          </button>

          <button className='btn bg-slate-white border border-slate-500 bg-opacity-80 p-2  text-slate-500  rounded-xl'>
            <LocalMallOutlinedIcon />
          </button>
          <button className='btn bg-slate-white bg-primary bg-opacity-80 p-2 shadow-md text-white  rounded-xl'>
            Buy
          </button>
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;
