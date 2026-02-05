import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <>
      <header className='shadow-md dark:shadow-gray-900'>
        <div className='wrapper py-4 flex justify-between items-center'>
          <Link to='/' className='text-xl font-bold text-[#2185d5]'>
            🛍️ FancyShop
          </Link>
          <nav>
            <ul className='flex space-x-6'>
              <li>
                <Link
                  to='/'
                  className='text-lg font-semibold hover:text-gray-700 dark:hover:text-gray-300'
                >
                  Home
                </Link>
              </li>
              <li>
                <button className='relative text-lg font-semibold cursor-pointer hover:text-gray-700 dark:hover:text-gray-300'>
                  <i className='fa-solid fa-cart-shopping'></i>
                  <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 grid place-items-center'>
                    1
                  </span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className='wrapper py-8'>{children}</main>

      <footer className='py-6'>
        <div className='wrapper text-center text-gray-500'>
          © {new Date().getFullYear()} FancyShop. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Layout;
