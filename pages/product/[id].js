import { useRouter } from 'next/router';
import React from 'react';

import Loader from '../../src/components/Loader';
import Message from '../../src/components/Message';
import Layout from '../../src/parts/Layout';

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const loading = false;
  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* Product */}
          <section className='mb-10'>
            <div className='container'>
              <div className='categories-wrapper'>
                <div className='w-full flex justify-between'>
                  <h2 className='text-2xl font-bold text-slate-800 font-sans'>
                    Products -
                  </h2>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </Layout>
  );
};

export default ProductDetails;
