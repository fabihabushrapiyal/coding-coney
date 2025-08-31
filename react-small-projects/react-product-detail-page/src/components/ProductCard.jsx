import { Link } from 'react-router-dom';
import Button from './Button';

const ProductCard = ({ product }) => {
  return (
    <div className='dark:bg-gray-800 bg-white rounded-xl shadow-md max-w-md w-full h-full dark:shadow-[#000] overflow-hidden group'>
      <div className='p-5 bg-gray-200 dark:bg-gray-900 h-[362px] grid place-items-center'>
        <img
          src={product.img}
          alt={product.title}
          className='max-w-56 w-full drop-shadow-md drop-shadow-gray-950 group-hover:scale-110 transition-all duration-300 transform'
        />
      </div>

      <div className='p-5'>
        <div className='flex justify-between'>
          <h3 className='text-xl'>{product.title}</h3>
          <span className='text-xl font-semibold'>${product.price}</span>
        </div>

        <div className='mt-6 flex justify-between items-center'>
          <Link
            to={`/product/${product.id}`}
            className='text-[#4592af] hover:text-[#5ea5bf] flex items-center font-semibold'
          >
            View Details
            <i className='fa-solid fa-arrow-right ml-1'></i>
          </Link>

          <Button
            icon={<i className='fa-solid fa-plus mr-1'></i>}
            text='Add to Card'
            className='!px-3 !py-2 text-white'
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
