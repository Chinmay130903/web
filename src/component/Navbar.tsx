import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  
  // Corrected openSignUp function
  const openSignUp = () => {
    setIsLogin(false);
    setIsModelOpen(true);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <nav className='bg-gray-800 shadow-lg'>
      <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
        {/* Brand/Logo */}
        <div className='text-lg font-bold text-white'>
          <Link to="/" className='hover:text-gray-300 transition duration-300'>
            MahalaxmiShopy
          </Link>
        </div>

        {/* Search Bar */}
        <div className='relative flex-grow max-w-md'>
          <form className='flex'>
            <input
              type="text"
              placeholder='Search Product'
              className='w-full border border-gray-600 rounded-lg py-2 px-4 pl-10 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300'
            />
            <FaSearch className='absolute top-3 left-3 text-gray-500' />
          </form>
        </div>

        {/* Action Buttons */}
        <div className='flex items-center space-x-4'>
          <Link to="/cart" className='text-white hover:text-gray-300 transition duration-300'>
            <FaShoppingCart className='text-lg' />
          </Link>
          <button 
            onClick={handleLoginClick} 
            className='text-white hover:text-gray-300 transition duration-300'
          >
            Login
          </button>
          <button 
            onClick={handleRegisterClick} 
            className='text-white hover:text-gray-300 transition duration-300'
          >
            Register
          </button>
          <button className='block md:hidden text-white hover:text-gray-300 transition duration-300'>
            <FaUser className='text-xl' />
          </button>
        </div>
      </div>

      {/* Additional Navigation Links */}
      <div className='bg-gray-700'>
        <div className='container mx-auto px-4 py-2 flex items-center justify-center space-x-6 text-sm font-bold'>
          <Link to="/" className='text-white hover:underline'>
            Home
          </Link>
          <Link to="/shop" className='text-white hover:underline'>
            Shop
          </Link>
          <Link to="/contact" className='text-white hover:underline'>
            Contact
          </Link>
          <Link to="/about" className='text-white hover:underline'>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
