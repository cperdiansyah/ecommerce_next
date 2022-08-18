import { useEffect, useState } from 'react';
import { Button, Checkbox } from '@chakra-ui/react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import cartHooks from '../../../hooksRedux/cartHooks';
import favoriteHooks from '../../../hooksRedux/favoriteHooks';
import { productFavoriteSelector } from '../../../redux/reducers/productReducers';
import localCurrency from '../../../utils/localCurrency';
import QuantityControl from '../../atom/QuantityControl';
import Link from 'next/link';

const ProductCartItem = (props) => {
  const { addFavorite } = favoriteHooks();
  const { updateCart, deleteCarts } = cartHooks();
  const [favorite, setFavorite] = useState(false);
  const { product, quantity, _id: id } = props;

  const favoriteState = useSelector(productFavoriteSelector).filter(
    (item) => item.product._id === product._id
  );

  useEffect(() => {
    if (favoriteState.length > 0) {
      setFavorite(true);
    }
  }, [id, favoriteState.length]);

  const deleteCartHandler = () => {
    deleteCarts(id);
  };

  const addFavoriteHandler = () => {
    addFavorite(product);
    setFavorite(!favorite);
  };

  const updateCartHandler = (value) => {
    updateCart(id, value);
  };

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="checkbox-wrapper">
        <Checkbox size="lg" colorScheme="orange" />
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
              {localCurrency(product.price * quantity)}
            </h3>
          </div>
          <div className="product-text-wrapper">
            <h3 className="font-sans text-lg font-bold text-slate-800">
              <Link href={`/product/${product._id}`}>{product.name}</Link>
            </h3>
            <p
              className="text-sm text-slate-600 line-clamp-2"
              title={`${product.description}`}
            >
              {product.description}
            </p>
          </div>

          <div className="product-buton-wrapper">
            <Button variant="no_border" onClick={addFavoriteHandler}>
              {favorite ? (
                <i className="fa-solid fa-heart mr-2 text-rose-400"></i>
              ) : (
                <i className="fa-regular fa-heart mr-2"></i>
              )}

              <span className="text-slate-700">Add to favorites</span>
            </Button>

            <Button variant="no_border" onClick={deleteCartHandler}>
              <i className="fa-regular fa-trash-can mr-2"></i>
              <span className="text-slate-700">Delete</span>
            </Button>
          </div>
        </div>

        <div className="product-quantity-control-wrapper">
          <QuantityControl
            id={id}
            defaultValue={quantity}
            max={product.countInStock}
            updateQuantity={updateCartHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCartItem;
