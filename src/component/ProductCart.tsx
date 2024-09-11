import React from 'react';
import { FaStar } from 'react-icons/fa';
import { addToCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';

const ProductCart = ({ product }) => {
  const dispatch = useDispatch();

  // Function to handle adding the product to the cart
  const handleAddToCart = () => {
    dispatch(addToCart(product)); // Dispatching product to the cart
  };

  return (
    <div className='bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105'>
      <div className='relative'>
        <img src={product.image} alt={product.name} className='w-full h-40 object-cover mb-2' />
        <h3 className='text-lg font-semibold mb-1'>{product.name}</h3>
        <p className='text-gray-600 mb-2'>rs{product.price}</p>

        {/* Rating Section */}
        <div className='flex mb-2'>
          <FaStar className='text-yellow-500' />
          <FaStar className='text-yellow-500' />
          <FaStar className='text-yellow-500' />
          <FaStar className='text-yellow-500' />
          <FaStar className='text-gray-300' />
        </div>

        {/* Add to Cart Button */}
        <button
          className='absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all'
          onClick={handleAddToCart}
        >
          <span className='block'>+</span>
          <span className='hidden hover:block'>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
