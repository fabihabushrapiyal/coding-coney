const Card = ({ key, img, type, title, description, dollar, cents }) => {
  return (
    <div
      key={key}
      className='max-w-72 m-auto h-full bg-slate-100 dark:bg-slate-900'
    >
      <div className='p-4'>
        <img
          src={img}
          alt={`${title} image`}
          className='m-auto animate-[spin_15s_linear_infinite]'
        />
      </div>

      <div className='relative p-4 mt-4 border-t-2 border-red-800'>
        <h4 className='capitalize my-2 bg-white dark:bg-slate-950 inline-block px-4 rounded-full'>
          {type}
        </h4>
        <h5 className='capitalize text-xl font-semibold mb-3'>{title}</h5>

        <p className='text-slate-600 dark:text-slate-400 mb-5 text-sm'>
          {description}
        </p>

        <div className='absolute bg-red-800 w-20 h-20 rounded-full -top-11 right-0 text-white flex items-center justify-center'>
          <sup className='text-base'>$</sup>
          <span className='text-3xl font-semibold'>{dollar}</span>
          <sub className='text-base -bottom-1.5'>{cents}</sub>
        </div>

        <button
          type='button'
          className='py-1 px-6 capitalize text-lg bg-red-800 hover:bg-red-700 text-white cursor-pointer transition'
        >
          order now
        </button>
      </div>
    </div>
  );
};

export default Card;
