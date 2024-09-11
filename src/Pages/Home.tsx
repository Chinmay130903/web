// src/Pages/Home.tsx
import React, { useEffect } from 'react';
import BannerImage from '../assets/images/banner.png';
import InfoSection from '../component/InfoSection';
import CategorySection from '../component/CategorySection';
import { setProducts } from '../redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { mockdata } from '../assets/mockdata';
import ProductCart from '../component/ProductCart';

// Import images directly
import SwordImage from '../assets/images/sword1.jpeg';
import TshirtImage from '../assets/images/tshirt1.jpeg';
import ToyImage from '../assets/images/toy2.jpeg';

const animeCategories = [
  { name: 'Sword', image: SwordImage },
  { name: 'T-shirt', image: TshirtImage },
  { name: 'Toy', image: ToyImage },
];

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.product.products);

  useEffect(() => {
    dispatch(setProducts(mockdata));
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      {/* Banner Section */}
      <div
        className="hero-section bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${BannerImage})` }}
      >
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Anime Shop</h1>
          <p className="text-lg mb-8">
            Explore the best anime merchandise, from toys to t-shirts!
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full">
            Shop Now
          </button>
        </div>
      </div>

      <InfoSection />
      <CategorySection />

      {/* Categories Section */}
      <div className="categories py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Shop by Anime Categories</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {animeCategories.map((category, index) => (
              <li key={index} className="bg-white shadow-lg rounded-lg p-4">
                <div className="category-icon mb-4">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-20 h-20 mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Top Products Section */}
      <div className='container mx-auto py-12'>
        <h2 className="text-3xl font-bold mb-4 text-center">Top Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 cursor-pointer">
          {products.slice(0, 5).map((product: any) => (
            <ProductCart key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
