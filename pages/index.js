import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../redux/slicer/productSlicer';
import Layout from '../src/parts/Layout';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <Layout>
        <h1 className='container text-3xl font-bold underline  '>
          Hello world!
        </h1>
      </Layout>
    </>
  );
}
