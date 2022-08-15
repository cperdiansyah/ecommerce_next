import React, { useState } from 'react';
import Button from '../components/atom/Button';
import Card from '../components/atom/Card';
import Loader from '../components/atom/Loader';
import Message from '../components/atom/Message';

import Layout from '../components/templates/Layout';

const favorites = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
                <div className=" justify-be mt-7 flex w-full">
                  <div className="products-cart-list-wrapper  md:w-3/4">
                    <Card className="mr-7">
                      <div className="flex flex-col items-center justify-center">
                        asd
                      </div>
                    </Card>
                  </div>
                  <div className="products-bill-wrapper md:w-1/4">
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

export default favorites;
