import React from 'react';
import { useLocation } from 'react-router-dom';

const OrderConfirmation: React.FC = () => {
  const location = useLocation();
  const order = location.state?.order;

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-semibold mb-6">Order Confirmation</h1>
      {order ? (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
          <p><strong>Name:</strong> {order.name}</p>
          <p><strong>Address:</strong> {order.address}</p>
          <p><strong>City:</strong> {order.city}</p>
          <p><strong>State:</strong> {order.state}</p>
          <p><strong>Pin Code:</strong> {order.pin}</p>
          <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
          {order.paymentMethod === 'card' && (
            <div>
              <p><strong>Card Number:</strong> {order.cardNumber}</p>
              <p><strong>Expiry Date:</strong> {order.expiryDate}</p>
              <p><strong>CVV:</strong> {order.cvv}</p>
            </div>
          )}
          {order.paymentMethod === 'upi' && (
            <p><strong>UPI ID:</strong> {order.upiId}</p>
          )}
          <h2 className="text-2xl font-semibold mt-6 mb-4">Products</h2>
          <ul>
            {order.products.map((product: any) => (
              <li key={product.id}>
                {product.name} - ${product.price} x {product.quantity}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No order details available.</p>
      )}
    </div>
  );
};

export default OrderConfirmation;
