import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProducts } from '../../redux/actions/productActions';
import { productListSelector } from '../../redux/reducers/productReducers';

import Loader from '../../components/atom/Loader';
import ProductCard from '../../components/molecules/ProductCard';
import Layout from '../../components/templates/Layout';

const Products = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const { loading, error } = useSelector((state) => state.productList);
    const productList = useSelector(productListSelector.selectAll);

    return (
        <Layout>
            {loading ? (
                <Loader />
            ) : (
                productList && (
                    <>
                        {/* Product */}
                        <section className="mb-10">
                            <div className="container">
                                <div className="categories-wrapper">
                                    <div className="w-full flex justify-between">
                                        <h2 className="text-2xl font-bold text-slate-800 font-sans">
                                            Products
                                        </h2>
                                    </div>
                                    <div className="flex flex-wrap justify-between mt-5 lg:mt-10">
                                        {productList.map((product, index) => (
                                            <ProductCard
                                                key={index}
                                                product={product}
                                            />
                                        ))}
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

export default Products;
