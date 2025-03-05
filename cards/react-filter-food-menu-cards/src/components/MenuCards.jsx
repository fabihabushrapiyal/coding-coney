import { useState } from 'react';
import { menuInfo } from '../data';
import Card from './Card';

const MenuCards = () => {
  const buttons = ['All', 'Breakfast', 'Lunch', 'Dinner'];
  const [data, setData] = useState(menuInfo);
  const [isActive, setIsActive] = useState('All');

  const handelBtn = (e) => {
    let btn = e.target.innerText;

    if (btn === 'All') {
      setData(menuInfo);
    } else if (btn === 'Breakfast') {
      const filteredData = menuInfo.filter((item) => item.type === 'breakfast');
      setData(filteredData);
    } else if (btn === 'Lunch') {
      const filteredData = menuInfo.filter((item) => item.type === 'lunch');
      setData(filteredData);
    } else if (btn === 'Dinner') {
      const filteredData = menuInfo.filter((item) => item.type === 'dinner');
      setData(filteredData);
    }
  };

  return (
    <section className='container m-auto px-4 py-20 '>
      <h2 className='capitalize text-center mb-10 lg:text-5xl md:text-4xl text-3xl font-semibold'>
        menu list
      </h2>

      <div className='flex flex-wrap justify-center gap-5 mb-20'>
        {buttons.map((btn) => (
          <button
            type='button'
            key={btn}
            onClick={(e) => {
              setIsActive(btn);
              handelBtn(e);
            }}
            className={`px-4 py-1 bg-slate-200 dark:bg-slate-800 border-2 border-transparent hover:border-red-800 hover:bg-transparent cursor-pointer transition ${
              isActive === btn && 'active-menu'
            }`}
          >
            {btn}
          </button>
        ))}
      </div>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
        {data.map((menu) => (
          <Card
            key={menu.id}
            img={menu.img}
            type={menu.type}
            title={menu.title}
            description={menu.description}
            dollar={menu.price.dollar}
            cents={menu.price.cents}
          />
        ))}
      </div>
    </section>
  );
};

export default MenuCards;
