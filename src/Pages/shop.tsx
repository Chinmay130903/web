import React from 'react';
import { useSelector } from 'react-redux';
import ProductCart from '../component/ProductCart';

const Shop = () => {
  const products = useSelector(state => state.product.products); // Ensure this path is correct

  return (
    <div className='mx-auto py-12 px-4 md:px-16 lg:px-24'>
      <h2 className="text-3xl font-bold mb-4 text-center">Top Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 cursor-pointer">
        {products && products.length > 0 ? (
          products.slice(0, 5).map(product => (
            <ProductCart key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center">No products available</p>
        )}
      </div>
    </div>
  );
};

export default Shop;
