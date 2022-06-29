import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCategories } from '../redux/actions/categoryActions';
import { getProducts } from '../redux/actions/productActions';
import { categoryListSelector } from '../redux/reducers/categoryReducers';
import { productListSelector } from '../redux/reducers/productReducers';

import Loader from '../components/atom/Loader';
import Message from '../components/atom/Message';
// import Layout from '../src/parts/Layout'
import Layout from '../components/templates/Layout';
import ProductCard from '../components/molecules/ProductCard';
import CategoryCard from '../components/molecules/CategoryCard';

import SearchBox from '../components/molecules/SearchBox';

export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
        dispatch(getCategories());
    }, [dispatch]);

    const { loading, error } = useSelector((state) => state.productList);
    const productList = useSelector(productListSelector.selectAll);
    const categoryList = useSelector(categoryListSelector.selectAll);
    const isLogin = false;

    return (
        <Layout isLogin={isLogin}>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message status="error" message={error} />
            ) : (
                categoryList &&
                productList && (
                    <>
                        {/* Hero Section */}
                        <section className="rounded-3xl overflow-hidden bg-[#D6EFFB] ">
                            <div className="hero-section-wrapper">
                                <div className="flex flex-col lg:flex-row">
                                    <div className="container pt-20 pl-16 lg:w-1/2">
                                        <h1 className="text-4xl leading-normal font-bold text-slate-800 font-sans">
                                            Online store with a wide variety of
                                            electronic goods
                                        </h1>
                                        <p className="text-xl pt-5 leading-normal font-sans text-slate-600">
                                            Use the search box to find products
                                            you are looking for.
                                        </p>
                                        <SearchBox className="mt-6" />
                                    </div>
                                    <div className="lg:w-1/2">
                                        <div className="image-wrapper flex justify-end">
                                            <Image
                                                src="/hero-image.png"
                                                quality={50}
                                                alt="Picture of the author"
                                                width={270}
                                                height={400}
                                                objectFit="cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Categories */}
                        <section className="mt-20 mb-10">
                            <div className="container">
                                <div className="categories-wrapper">
                                    <div className="w-full flex justify-between">
                                        <h2 className="text-2xl font-bold text-slate-800 font-sans">
                                            Hot Categories 🔥
                                        </h2>
                                        <Link href="/category">
                                            <a className="text-xl text-primary">
                                                Show All
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="flex flex-wrap justify-between mt-5 lg:mt-10">
                                        {categoryList
                                            .slice(0, 6)
                                            .map((category, index) => (
                                                <CategoryCard
                                                    key={index}
                                                    category={category}
                                                />
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Product */}
                        <section className="mt-20 mb-10">
                            <div className="container">
                                <div className="categories-wrapper">
                                    <div className="w-full flex justify-between">
                                        <h2 className="text-2xl font-bold text-slate-800 font-sans">
                                            Popular Goods
                                        </h2>
                                        <Link href="/product">
                                            <a className="text-xl text-primary">
                                                Show All
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="flex flex-wrap justify-between mt-5 lg:mt-10">
                                        {productList
                                            .slice(0, 5)
                                            .map((product, index) => (
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
}
