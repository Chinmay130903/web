import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import EmptyCart from '../assets/images/emptycart.png';
import productimage from '../assets/images/toy10.jpeg'; // Imported image
import { FaTrashAlt } from 'react-icons/fa';

const Cart: React.FC = () => {
  // State to store the cart
  const [cart, setCart] = useState({
    products: [
      { id: '1', name: 'Test Product', imageUrl: productimage, price: 250, quantity: 1 },
    ],
  });

  const [address, setAddress] = useState('Main Street, 0012');
  const navigate = useNavigate();

  // Calculate the total price of items in the cart
  const calculateTotal = () => {
    return cart.products.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  // Calculate the total quantity of items in the cart
  const calculateTotalQuantity = () => {
    return cart.products.reduce((total, product) => total + product.quantity, 0);
  };

  // Handle quantity change
  const handleQuantityChange = (productId: string, newQuantity: number) => {
    setCart((prevCart) => ({
      ...prevCart,
      products: prevCart.products.map((product) =>
        product.id === productId ? { ...product, quantity: newQuantity } : product
      ),
    }));
  };

  // Handle removing a product from the cart
  const handleRemoveProduct = (productId: string) => {
    setCart((prevCart) => ({
      ...prevCart,
      products: prevCart.products.filter((product) => product.id !== productId),
    }));
  };

  // Handle address change
  const handleChangeAddress = () => {
    const newAddress = prompt('Enter new shipping address:', address);
    if (newAddress) {
      setAddress(newAddress);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {cart.products.length > 0 ? (
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4">Shopping Cart</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 table-fixed">
                <thead>
                  <tr className="border-b">
                    <th className="p-4 text-left w-1/3">Product</th>
                    <th className="p-4 text-left w-1/6">Price</th>
                    <th className="p-4 text-left w-1/6">Quantity</th>
                    <th className="p-4 text-left w-1/6">Subtotal</th>
                    <th className="p-4 text-left w-1/6">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.products.map((product) => (
                    <tr key={product.id} className="border-b">
                      <td className="p-4 flex items-center">
                        <img src={product.imageUrl} alt={product.name} className="w-16 h-16 object-cover mr-4" />
                        <span>{product.name}</span>
                      </td>
                      <td className="p-4">Rs{product.price}</td>
                      <td className="p-4">
                        <input
                          type="number"
                          value={product.quantity}
                          min="1"
                          className="w-16 p-2 border border-gray-300 rounded"
                          onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                        />
                      </td>
                      <td className="p-4">Rs{(product.price * product.quantity).toFixed(2)}</td>
                      <td className="p-4">
                        <button
                          onClick={() => handleRemoveProduct(product.id)}
                          className="bg-red-500 text-white px-4 py-2 rounded flex items-center"
                        >
                          Remove <FaTrashAlt className="ml-2" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Checkout Box */}
          <div className="w-full md:w-1/3 md:ml-6 mt-6 md:mt-0 bg-gray-50 p-4 border border-gray-200 rounded">
            <h3 className="text-xl font-semibold mb-4">Checkout Summary</h3>

            <div className="mb-4">
              <div className="flex justify-between">
                <span>Total Items:</span>
                <span>{calculateTotalQuantity()}</span>
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-lg font-semibold">Total: Rs{calculateTotal().toFixed(2)}</p>
              </div>
            </div>

            <div className="mb-4">
              <p className="font-semibold">Shipping to:</p>
              <span>{address}</span>
              <button
                onClick={handleChangeAddress}
                className="bg-blue-500 text-white px-4 py-2 rounded ml-4 mt-2"
              >
                CHANGE ADDRESS
              </button>
            </div>

            <div>
              <button
                onClick={() => navigate('/checkout')}
                className="bg-green-500 text-white w-full px-6 py-2 rounded"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <img src={EmptyCart} alt="Empty Cart" className="h-96" />
          <p className="text-lg mt-4">Your cart is currently empty.</p>
          <button
            onClick={() => navigate('/shop')}
            className="bg-blue-500 text-white px-6 py-2 mt-4 rounded"
          >
            Return to Shop
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
