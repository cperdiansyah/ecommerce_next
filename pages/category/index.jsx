import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/actions/categoryActions';
import { categoryListSelector } from '../../redux/reducers/categoryReducers';

import CategoryCard from '../../components/molecules/CategoryCard';
import Loader from '../../components/atom/Loader';
import Layout from '../../components/templates/Layout';

const Categories = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    const { loading, error } = useSelector((state) => state.productList);
    const categoryList = useSelector(categoryListSelector.selectAll);
    return (
        <Layout>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <section className="mb-10">
                        <div className="container">
                            <div className="categories-wrapper">
                                <div className="w-full flex justify-between">
                                    <h2 className="text-2xl font-bold text-slate-800 font-sans">
                                        Categories
                                    </h2>
                                </div>
                                <div className="flex flex-wrap justify-between mt-5 lg:mt-10">
                                    {categoryList.map((category, index) => (
                                        <CategoryCard
                                            key={index}
                                            category={category}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </Layout>
    );
};

export default Categories;
