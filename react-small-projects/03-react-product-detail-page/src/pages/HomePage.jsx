import ProductCard from '../components/ProductCard';
import products from '../data/products';

const HomePage = () => {
  return (
    <section>
      <div className='text-center pb-12'>
        <h1 className='text-4xl mb-4'>for men</h1>
        <p className='text-lg text-clr max-w-2xl mx-auto'>
          Discover the latest trends for men. From casual wear to formal attire,
          explore our curated collection of stylish clothing and accessories
          designed to elevate your wardrobe.
        </p>
      </div>
      <h3 className='text-2xl mb-8'>featured products</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default HomePage;
