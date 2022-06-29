import React from 'react';
import Link from 'next/link';
import Brand from '../../atom/Brand';
const Footer = () => {
    return (
        <>
            <footer className="pt-20 bg-zinc-700">
                <div className="footer-wrapper ">
                    {/* Footer Top */}
                    <div className="footer-section flex justify-between container pb-14">
                        {/*  Brand Info */}
                        <div className="footer-items text-white ">
                            <Brand isDark />
                            <p className="my-3">
                                Chanstore is a platform for electronic commerce.
                            </p>
                            <p className="text-xl font-semibold my-5">
                                Follow Us :
                            </p>
                            <div className="footer-icons opacity-80 text-2xl">
                                <a href="#" target="_blank">
                                    <i className="fa-brands fa-facebook mr-5"></i>
                                </a>
                                <a href="#" target="_blank">
                                    <i className="fa-brands fa-twitter mr-5"></i>
                                </a>
                                <a href="#" target="_blank">
                                    <i className="fa-brands fa-instagram mr-5"></i>
                                </a>
                            </div>
                        </div>
                        {/*  Product */}
                        <div className="footer-items text-white ">
                            <p className="text-xl font-semibold ">Product </p>
                            <ul className="footer-list mt-3">
                                <li className="my-3 opacity-80">
                                    <Link href="/">Super Sale</Link>
                                </li>
                                <li className="my-3 opacity-80">
                                    <Link href="/">Categories</Link>
                                </li>
                                <li className="my-3 opacity-80">
                                    <Link href="/">Popular</Link>
                                </li>
                                <li className="my-3 opacity-80">
                                    <Link href="/">New Goods</Link>
                                </li>
                            </ul>
                        </div>
                        {/*  Marketplace */}
                        <div className="footer-items text-white">
                            <p className="text-xl font-semibold">
                                Marketplace{' '}
                            </p>
                            <ul className="footer-list mt-3">
                                <li className="my-3 opacity-80">
                                    <Link href="/">About Us</Link>
                                </li>
                                <li className="my-3 opacity-80">
                                    <Link href="/">Contact Us</Link>
                                </li>
                                <li className="my-3 opacity-80">
                                    <Link href="/">News and Blog</Link>
                                </li>
                                <li className="my-3 opacity-80">
                                    <Link href="/">Partners </Link>
                                </li>
                            </ul>
                        </div>
                        {/*  Information */}
                        <div className="footer-items text-white">
                            <p className="text-xl font-semibold">
                                Information{' '}
                            </p>
                            <ul className="footer-list mt-3">
                                <li className="my-3 opacity-80">
                                    <Link href="/">Terms & Conditions</Link>
                                </li>
                                <li className="my-3 opacity-80">
                                    <Link href="/">Privacy Policy</Link>
                                </li>
                                <li className="my-3 opacity-80">
                                    <Link href="/">License Agreement</Link>
                                </li>
                                <li className="my-3 opacity-80">
                                    <Link href="/">FAQ </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Footer Bottom */}
                    <div className="footer-section border-t py-5">
                        <div className="footer-section-wrapper container  flex justify-between mt-4 ">
                            <div className="footer-items text-white">
                                <p className="text-base font-light text-center block w-full">
                                    © 2022 Chanstore. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
