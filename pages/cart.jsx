import { Checkbox } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useState } from 'react';
import Button from '../components/atom/Button';
import Card from '../components/atom/Card';
import Loader from '../components/atom/Loader';
import Message from '../components/atom/Message';

import Layout from '../components/templates/Layout';
import QuantityControl from '../components/atom/QuantityControl';

const favorites = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const imageExample = 'phone.jpg';
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
                      <div className="flex flex-row items-center justify-between">
                        <div className="checkbox-wrapper">
                          <Checkbox />
                        </div>

                        <div className="product-wrapper flex items-center">
                          <div className="product-image-wrapper ">
                            <div className="image-wrapper relative mx-2 h-28 w-36 lg:h-40">
                              <Image
                                src={`/products/${imageExample}`}
                                blurDataURL={`/products/${imageExample}`}
                                alt="product"
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
                                Rp 1.400.000
                              </h3>
                            </div>
                            <div className="product-text-wrapper">
                              <h3 className="font-sans text-lg font-bold text-slate-800">
                                Airpods Wireless Bluetooth Headphones
                              </h3>
                              <p
                                className="text-sm text-slate-600 line-clamp-2"
                                title="Bluetooth technology lets you connect it with
                                compatible devices wirelessly High-quality AAC
                                audio offers immersive listening experience
                                Built-in microphone allows you to take calls
                                while working"
                              >
                                Bluetooth technology lets you connect it with
                                compatible devices wirelessly High-quality AAC
                                audio offers immersive listening experience
                                Built-in microphone allows you to take calls
                                while working
                              </p>
                            </div>

                            <div className="product-buton-wrapper">
                              <Button variant="no_border">
                                <i className="fa-regular fa-heart mr-3"></i>
                                Add to favorites
                              </Button>
                            </div>
                          </div>

                          <div className="product-quantity-control-wrapper">
                            <QuantityControl
                              defaultValue={1}
                              min={1}
                              max={10}
                            />
                          </div>
                        </div>
                      </div>
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
