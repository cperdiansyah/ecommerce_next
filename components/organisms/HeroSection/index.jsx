import Image from 'next/image';
import React from 'react';
import SearchBox from '../SearchBox';

const HeroSection = () => {
  return (
    <section className='rounded-3xl overflow-hidden bg-[#D6EFFB] '>
      <div className='hero-section-wrapper'>
        <div className='flex flex-col lg:flex-row'>
          <div className='container pt-20 pl-16 lg:w-1/2'>
            <h1 className='text-4xl leading-normal font-bold text-slate-800 font-sans'>
              Online store with a wide variety of electronic goods
            </h1>
            <p className='text-xl pt-5 leading-normal font-sans text-slate-600'>
              Use the search box to find products you are looking for.
            </p>
            <SearchBox className='mt-6' />
          </div>
          <div className='lg:w-1/2'>
            <div className='image-wrapper flex justify-end'>
              <Image
                src='/hero-image.png'
                alt='Picture of the author'
                width={270}
                height={400}
                objectFit='cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
