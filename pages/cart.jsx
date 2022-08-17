import { Checkbox } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Button from '../components/atom/Button';
import Card from '../components/atom/Card';
import Loader from '../components/atom/Loader';
import Message from '../components/atom/Message';

import Layout from '../components/templates/Layout';
import ProductCartItem from '../components/molecules/ProductCartitem';
import { useDispatch, useSelector } from 'react-redux';
import favoriteHooks from '../hooksRedux/favoriteHooks';
import cartHooks from '../hooksRedux/cartHooks';

const favorites = () => {
  const dispatch = useDispatch();
  const { getCarts } = cartHooks();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const productCartSelector = useSelector((state) => state.products);
  const { productCart } = productCartSelector;

  const [cart, setCart] = useState(productCart);

  useEffect(() => {
    getCarts();
  }, []);

  useEffect(() => {
    setCart(productCart);
  }, [productCart]);

  const cartCheckoutHandler = () => {
    console.log('cartCheckoutHandler');
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Layout>
          {error && <Message status="error" message={error} />}
          <section className="mb-10">
            <div className="container">
              <div className="products-wrapper">
                <h2 className="font-sans text-3xl font-bold capitalize text-slate-800 lg:my-5">
                  Shopping Cart
                </h2>
                <div className=" mt-7 flex w-full flex-col justify-between md:flex-row">
                  <div className="products-cart-list-wrapper mb-7 w-full md:mb-0 md:w-3/4">
                    <Card className=" md:mr-7 ">
                      {cart.length > 0 ? (
                        cart.map((product, index) => (
                          <ProductCartItem {...product} key={index} />
                        ))
                      ) : (
                        <div className="text-center">
                          <h3 className="text-xl font-semibold text-slate-800">
                            Your cart is empty
                          </h3>
                        </div>
                      )}
                    </Card>
                  </div>
                  <div className="products-bill-wrapper w-full  md:w-1/4">
                    <Card className="!p-4">
                      <div className="products-bill">
                        <div className="products-bill-header item-center flex justify-between">
                          <h2 className="font-sans text-lg font-medium text-slate-800">
                            Your shopping cart
                          </h2>
                          <span className="font-sans text-base text-slate-500">
                            0 item
                          </span>
                        </div>

                        <div className="products-bill-body item-center my-3 flex justify-between text-base">
                          <h2 className="font-sans ">Price : </h2>
                          <span className="font-sans font-semibold">
                            Rp. 15.000
                          </span>
                        </div>

                        <Button
                          variant="primary"
                          className="mt-3 w-full"
                          onClick={cartCheckoutHandler}
                        >
                          Checkout
                        </Button>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Layout>
      )}
    </>
  );
};

const CardChekout = ({ productCart = [] }) => {
  return (
    <Card className="!p-4">
      <div className="products-bill">
        <div className="products-bill-header item-center flex justify-between">
          <h2 className="font-sans text-lg font-medium text-slate-800">
            Your shopping cart
          </h2>
          <span className="font-sans text-base text-slate-500">0 item</span>
        </div>

        <div className="products-bill-body item-center my-3 flex justify-between text-base">
          <h2 className="font-sans ">Price : </h2>
          <span className="font-sans font-semibold">Rp. 15.000</span>
        </div>

        <Button
          variant="primary"
          className="mt-3 w-full"
          onClick={cartCheckoutHandler}
        >
          Checkout
        </Button>
      </div>
    </Card>
  );
};

export default favorites;
