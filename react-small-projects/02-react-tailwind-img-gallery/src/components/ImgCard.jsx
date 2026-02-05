const ImgCard = ({ imgInfo }) => {
  const tags = imgInfo.tags.split(',', 5);

  return (
    <div className='relative overflow-hidden border-2 border-pink-700 rounded-lg aspect-square lg:odd:aspect-auto lg:odd:row-span-2 lg:odd:my-7 group'>
      <img
        src={imgInfo.webformatURL}
        alt=''
        className='object-cover w-full h-full'
      />

      <div className='absolute bg-linear-to-t from-40% from-neutral-800 to-white/5 backdrop-blur-xs w-full p-5 -bottom-full group-hover:bottom-0 transition-all duration-300'>
        <div className='flex gap-2 items-center'>
          <img
            src={imgInfo.userImageURL}
            alt=''
            className='w-8 h-8 rounded-full'
          />
          <p className='text-sm'>{imgInfo.user}</p>
        </div>
        <ul className='flex justify-between my-4'>
          <li className='text-center leading-4'>
            {imgInfo.likes} <br />
            <strong className='text-sm'>Likes</strong>
          </li>

          <li className='text-center leading-4'>
            {imgInfo.views} <br />
            <strong className='text-sm'>Views</strong>
          </li>

          <li className='text-center leading-4'>
            {imgInfo.downloads} <br />
            <strong className='text-sm'>Downloads</strong>
          </li>
        </ul>
        {tags.map((tag, inx) => (
          <span
            key={inx}
            className='inline-block bg-neutral-700 text-xs mr-2 mb-2 px-2 py-1 rounded-full'
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImgCard;
