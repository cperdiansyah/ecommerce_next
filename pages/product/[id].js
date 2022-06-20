import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../redux/actions/productActions';
import { productDetailsSelector } from '../../redux/reducers/productReducers';

import Loader from '../../src/components/Loader';
import Message from '../../src/components/Message';
import Layout from '../../src/parts/Layout';

const ProductDetails = () => {
  const { isReady, query } = useRouter();
  const { id } = query;
  const dispatch = useDispatch();

  useEffect(() => {
    if (isReady) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, isReady, id]);

  const { loading, error } = useSelector((state) => state.productDetail);

  const product = useSelector((state) =>
    productDetailsSelector.selectById(state, id)
  );

  console.log(id);
  console.log(product);
  console.log(loading);

  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        product && (
          <>
            {/* Product */}
            <section className='mb-10'>
              <div className='container'>
                <div className='categories-wrapper'>
                  <div className='w-full flex justify-between'>
                    <h2 className='text-2xl font-bold text-slate-800 font-sans'>
                      {/* Products - */}
                      Products -{product.name}
                    </h2>
                  </div>
                </div>
              </div>
            </section>
          </>
        )
      )}
    </Layout>
  );
};

export default ProductDetails;
