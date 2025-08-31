import { useState } from 'react';
import products from '../data/products';
import Button from '../components/Button';
import { Link, useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  // parseInt() parses a string and returns an integer
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className='text-center py-20'>
        <h2 className='text-2xl mb-4'>product not found ☹️</h2>
        <Link to='/' className='text-[#4592af] hover:text-[#5ea5bf]'>
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <section>
      <div className='mb-6'>
        <Link
          to='/'
          className='text-[#4592af] hover:text-[#5ea5bf] flex items-center'
        >
          <i className='fa-solid fa-arrow-left mr-1'></i>
          Back to Products
        </Link>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
        <div className='p-4 bg-gray-300 dark:bg-gray-700 grid place-items-center rounded-xl'>
          <img
            src={product.img}
            alt={product.title}
            className='drop-shadow-md drop-shadow-gray-900 max-w-[490px] w-full'
          />
        </div>
        <div>
          <div className='mb-6'>
            <div className='flex justify-between'>
              <h1 className='text-3xl'>{product.title}</h1>
              <span className='text-2xl font-semibold text-[#2185d5]'>
                ${product.price}
              </span>
            </div>

            <div className='flex items-center mt-2'>
              <div className='flex text-amber-400'>
                {[...Array(5)].map((_, inx) => (
                  <i
                    key={inx}
                    className={`fa-solid fa-star mr-0.5 ${
                      inx < Math.floor(product.rating)
                        ? 'text-amber-400'
                        : 'text-gray-300 dark:text-gray-600'
                    }`}
                  ></i>
                ))}
              </div>
              <span className='text-clr ml-2'>({product.rating})</span>
            </div>
          </div>

          <p className='text-clr mb-8'>{product.description}</p>

          <div className='mb-8'>
            <h3 className='text-xl mb-3'>size</h3>
            <div className='flex space-x-3'>
              {product.sizes.map((size) => (
                <Button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`!px-4 !py-2 !bg-transparent border ${
                    selectedSize === size
                      ? 'border-[#2185d5] !text-[#2185d5]'
                      : 'border-gray-600 dark:border-gray-300 hover:border-gray-400'
                  }`}
                  text={size}
                />
              ))}
            </div>
          </div>

          <div className='mb-8'>
            <h3 className='text-lg mb-3'>quality</h3>
            <div className='flex'>
              <Button
                icon={<i className='fa-solid fa-minus'></i>}
                className='!p-2 !bg-transparent !rounded-r-none hover:!text-[#2185d5] border border-gray-600 dark:border-gray-300'
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              />

              <div className='px-7 py-2 border-t border-b border-gray-600 dark:border-gray-300'>
                {quantity}
              </div>

              <Button
                icon={<i className='fa-solid fa-plus'></i>}
                className='!p-2 !bg-transparent !rounded-l-none hover:!text-[#2185d5] border border-gray-600 dark:border-gray-300'
                onClick={() => setQuantity((q) => q + 1)}
              />
            </div>
          </div>

          <div className='flex flex-col sm:flex-row gap-4'>
            <Button
              text='Add to Card'
              className='flex-1 text-white'
              icon={<i className='fa-solid fa-cart-shopping mr-1'></i>}
            />

            <Button
              text='Buy Now'
              className='flex-1 !bg-white hover:!bg-gray-200 !text-gray-950'
            />
          </div>

          <div className='mt-12'>
            <h3 className='text-lg mb-4'>product features</h3>
            <ul className='grid grid-cols-1 md:grid-cols-2 gap-3'>
              {product.features.map((feature, inx) => (
                <li key={inx}>
                  <i className='fa-solid fa-check mr-2 text-[#2185d5]'></i>
                  <span className='text-clr'>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
