import React from 'react';
import { FaShippingFast } from 'react-icons/fa'; // Importing the icon
import { MdStar } from 'react-icons/md'; // Import another icon for variety if needed
import { Ri24HoursLine } from 'react-icons/ri'; // Another icon for different sections if needed

const items = [
  {
    icon: <FaShippingFast className="text-3xl text-red-600" />,
    title: "Free Shipping",
    description: "Get your orders fast",
  },
  {
    icon: <MdStar className="text-3xl text-yellow-500" />,
    title: "Top Rated",
    description: "Products rated highly by our customers",
  },
  {
    icon: <Ri24HoursLine className="text-3xl text-blue-600" />,
    title: "24/7 Support",
    description: "We're here to help you anytime",
  },
];

const MyComponent = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
