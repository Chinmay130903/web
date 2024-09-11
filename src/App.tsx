import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './Pages/Home';
import Shop from './Pages/shop';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';

import OrderConfirmation from './Pages/Orderconformation';
import Contact from './Pages/Contact';
import Register from './component/Register'; // Import the Signup component
import Login from './component/Login'; // Import the Login component (if available)
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signup" element={<Register />} /> {/* Add the Signup route */}
              <Route path="/login" element={<Login />} /> {/* Add the Login route if available */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
