import { useState } from 'react';
import AltMessage from './components/AltMessage';
import ImgCard from './components/ImgCard';
import ImgSearch from './components/ImgSearch';
import { useQuery } from '@tanstack/react-query';

const fetchData = async (search) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const res = await fetch(
    `https://pixabay.com/api/?key=${
      import.meta.env.VITE_REACT_APP_PIXABAY_API_KEY
    }&q=${search}&image_type=photo`
  );

  return res.json();
};

const App = () => {
  const [searchText, setSearchText] = useState('');
  const query = useQuery({
    queryKey: ['images', searchText],
    queryFn: () => fetchData(searchText),
  });

  // console.log(searchText);

  if (query.isError) {
    return <AltMessage message='Something went wrong 😢' />;
  }

  return (
    <div className='container mx-auto px-4 pt-12 pb-6'>
      <ImgSearch searchText={(input) => setSearchText(input)} />
      {query.isPending ? (
        <AltMessage
          message={<i className='fa-solid fa-spinner animate-spin'></i>}
        />
      ) : query.data.hits.length !== 0 ? (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6'>
          {query.data.hits.map((imgInfo) => (
            <ImgCard key={imgInfo.id} imgInfo={imgInfo} />
          ))}
        </div>
      ) : (
        <AltMessage message='Sorry, no image found ☹️' />
      )}
    </div>
  );
};

export default App;
