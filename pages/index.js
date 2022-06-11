import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions/productActions';
import { productListSelector } from '../redux/reducers/productReducers';
import HeroSection from '../src/components/HeroSection';
import Loader from '../src/components/Loader';
import Message from '../src/components/Message';
import Layout from '../src/parts/Layout';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const { loading, error } = useSelector((state) => state.productList);
  const productList = useSelector(productListSelector.selectAll);

  console.log(loading);

  return (
    <>
      <Layout>
        {loading ? (
          <Loader />
        ) : (
          <>
            {error && <Message severity='error' message={error} />}
            <HeroSection />
          </>
        )}
      </Layout>
    </>
  );
}
