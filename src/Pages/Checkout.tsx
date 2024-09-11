import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout: React.FC<{ setOrder?: (order: any) => void }> = ({ setOrder }) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pin, setPin] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('card'); // Default payment method is card
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [upiId, setUpiId] = useState('');

    const navigate = useNavigate();

    // Static test data for cart items (replace with actual cart data or prop)
    const cart = {
        products: [
            { id: '1', name: 'Test Product', price: 250, quantity: 1 },
        ],
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newOrder = {
            name,
            address,
            city,
            state,
            pin,
            paymentMethod,
            cardNumber,
            expiryDate,
            cvv,
            upiId,
            products: cart.products,
        };

        // Call setOrder if it exists
        if (setOrder) {
            setOrder(newOrder);
        }

        console.log(newOrder);

        // Navigate to the Order Confirmation page
        navigate('/order-confirmation', { state: { order: newOrder } });

        alert('Order placed successfully!');
    };

    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <h1 className="text-3xl font-semibold mb-6">Checkout</h1>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Shipping Details */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Shipping Details</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700">Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Address</label>
                            <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                                placeholder="Enter your address"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">City</label>
                            <input
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                                placeholder="Enter your city"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">State</label>
                            <input
                                type="text"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                                placeholder="Enter your state"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Pin Code</label>
                            <input
                                type="text"
                                value={pin}
                                onChange={(e) => setPin(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                                placeholder="Enter your pin code"
                                required
                            />
                        </div>
                    </div>

                    {/* Payment Details */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700">Payment Method</label>
                            <select
                                value={paymentMethod}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                            >
                                <option value="card">Credit/Debit Card</option>
                                <option value="upi">UPI</option>
                                <option value="cod">Cash on Delivery</option>
                            </select>
                        </div>

                        {/* Render fields based on payment method */}
                        {paymentMethod === 'card' && (
                            <>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Card Number</label>
                                    <input
                                        type="text"
                                        value={cardNumber}
                                        onChange={(e) => setCardNumber(e.target.value)}
                                        className="w-full p-2 border border-gray-300 rounded"
                                        placeholder="Enter your card number"
                                        required
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label className="block text-gray-700">Expiry Date</label>
                                        <input
                                            type="text"
                                            value={expiryDate}
                                            onChange={(e) => setExpiryDate(e.target.value)}
                                            className="w-full p-2 border border-gray-300 rounded"
                                            placeholder="MM/YY"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700">CVV</label>
                                        <input
                                            type="text"
                                            value={cvv}
                                            onChange={(e) => setCvv(e.target.value)}
                                            className="w-full p-2 border border-gray-300 rounded"
                                            placeholder="Enter your CVV"
                                            required
                                        />
                                    </div>
                                </div>
                            </>
                        )}

                        {paymentMethod === 'upi' && (
                            <div className="mb-4">
                                <label className="block text-gray-700">UPI ID</label>
                                <input
                                    type="text"
                                    value={upiId}
                                    onChange={(e) => setUpiId(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    placeholder="Enter your UPI ID"
                                    required
                                />
                            </div>
                        )}

{paymentMethod === 'cod' && (
                  <div className="mb-4">
                    <p className="text-green-500 font-semibold">Cash on Delivery is available.</p>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded"
              >
                Place Order
              </button>
            </div>
          </form>
        </div>
      );
    };

    export default Checkout;