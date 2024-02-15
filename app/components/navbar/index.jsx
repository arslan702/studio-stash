import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-transparent py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <div className="flex items-center">
          <img src="/your-logo.png" alt="Logo" className="w-10 h-10 mr-2" />
          <span className="text-white font-bold text-xl">YourLogo</span>
        </div>

        {/* Menu icon for mobile */}
        <div className="md:hidden">
          <button className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Menu items for medium and larger screens */}
        <div className="hidden md:flex flex-grow justify-center">
          <a href="#" className="text-white px-4 py-2 hover:text-gray-300">Home</a>
          <a href="#" className="text-white px-4 py-2 hover:text-gray-300">Benefits</a>
          <a href="#" className="text-white px-4 py-2 hover:text-gray-300">How it Works</a>
          <a href="#" className="text-white px-4 py-2 hover:text-gray-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
