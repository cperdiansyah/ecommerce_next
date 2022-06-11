import React, { useState } from 'react';
import { useRouter } from 'next/router';

const SearchBox = (props) => {
  const { className } = props;
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');

  const classNames = ['search-box', className].join(' ');
  const handleSearch = (e) => {
    e.preventDefault();
    // router.push('/search?q=' + searchValue);
  };
  return (
    <form onSubmit={handleSearch} className={classNames}>
      <div className='relative'>
        <input
          type='text'
          className='w-full px-4 py-2 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:shadow-outline'
          placeholder='Search'
        />
        <div className='absolute inset-y-0 right-2 flex items-center px-2 text-gray-500'>
          <svg
            className='fill-current h-4 w-4'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
          >
            <path d='M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z'></path>
          </svg>
        </div>
      </div>
    </form>
  );
};

export default SearchBox;
