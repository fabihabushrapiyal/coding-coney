import { useEffect, useRef } from 'react';

const ImgSearch = ({ searchText }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    searchText(inputRef.current.value);
  };

  useEffect(() => inputRef.current.focus(), []);

  return (
    <form className='max-w-sm mx-auto mb-10'>
      <input
        type='text'
        name='text'
        placeholder='Search Photo'
        className='w-full py-2 border-b-2 border-pink-700 placeholder:text-neutral-300 focus:outline-none'
        ref={inputRef}
        onChange={handleSearch}
      />
    </form>
  );
};

export default ImgSearch;
