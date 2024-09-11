import React from 'react';
import ToyCategory from '../assets/images/toy3.jpeg';
import SwodCategory from '../assets/images/sword1.png';
import MobileCategory from '../assets/images/mob1 (2).jpeg';

const categories = [
  {
    title: 'Toy',
    imageUrl: ToyCategory,
  },
  {
    title: 'Swod',
    imageUrl: SwodCategory,
  },
  {
    title: 'MobileSkin',
    imageUrl: MobileCategory,
  },
];

const CategorySection = () => {
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer'>
      {categories.map((category, index) => (
        <div key={index} className="relative h-64">
          <img
            src={category.imageUrl}
            alt={category.title}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          <div className="absolute top-20 left-12">
            <p className="text-xl font-bold text-red-600">{category.title}</p>
            <p className="text-gray-600">View All</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
