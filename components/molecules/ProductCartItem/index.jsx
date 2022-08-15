import { Button, Checkbox } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import localCurrency from '../../../utils/localCurrency';
import QuantityControl from '../../atom/QuantityControl';

const ProductCartItem = (props) => {
  const { product, quantity, _id: id } = props;
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="checkbox-wrapper">
        <Checkbox />
      </div>

      <div className="product-wrapper flex items-center">
        <div className="product-image-wrapper ">
          <div className="image-wrapper relative mx-2 h-28 w-36 lg:h-40">
            <Image
              src={`/products/${product.images[0].image}`}
              blurDataURL={`/products/${product.images[0].image}`}
              alt={product.name}
              layout="fill"
              className="rounded-xl"
              objectFit="contain"
              placeholder="blur"
              position="relative"
            />
          </div>
        </div>
        <div className="product-info-wrapper mx-2 max-w-md">
          <div className="product-price-wrapper">
            <h3 className="font-sans text-base font-semibold text-slate-700">
              {localCurrency(product.price)}
            </h3>
          </div>
          <div className="product-text-wrapper">
            <h3 className="font-sans text-lg font-bold text-slate-800">
              {product.name}
            </h3>
            <p
              className="text-sm text-slate-600 line-clamp-2"
              title={`${product.description}`}
            >
              {product.description}
            </p>
          </div>

          <div className="product-buton-wrapper">
            <Button variant="no_border">
              <i className="fa-regular fa-heart mr-2"></i>
              Add to favorites
            </Button>

            <Button variant="no_border">
              <i className="fa-regular fa-trash-can mr-2"></i>
              Delete
            </Button>
          </div>
        </div>

        <div className="product-quantity-control-wrapper">
          <QuantityControl
            id={id}
            defaultValue={quantity}
            max={product.countInStock}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCartItem;
