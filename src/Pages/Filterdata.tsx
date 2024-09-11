import React from 'react';
import { useSelector } from 'react-redux';
import NoProduct from '../assets/images/product-not-found.png'; // Ensure the path is correct

const Filterdata = () => {
  const filterProducts = useSelector((state) => state.product.filteredData);

  return (
    <div className="p-4">
      {filterProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filterProducts.map((product) => (
            <div key={product.id} className="border border-gray-300 rounded-lg p-4">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-32 object-cover mb-4 rounded"
              />
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-gray-800 font-bold">${product.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <img
            src={NoProduct}
            alt="No products found"
            className="w-64 h-64 object-cover mb-4"
          />
          <p className="text-center text-gray-500">No products found.</p>
        </div>
      )}
    </div>
  );
};

export default Filterdata;
