import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
import Company from './modals/Company';
import Product from './modals/Product';

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="bg-primary text-white px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="flex items-center">
          <img className="h-[30px] w-10 mr-2" src={logo} alt="Logo" />
          <span>crypteez.com</span>
        </div>

        {/*  Button for Mobile */}
        <div className="lg:hidden md:flex flex-col justify-end">
          <button onClick={toggleNavbar}>
            {mobileDrawerOpen ? <X /> : <Menu />}
          </button>
        </div>

    
        <div className={`md:flex hidden w-full md:w-auto`}>
          <ul className="flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0 mt-4 md:mt-0">
            <li>Price</li>
            <li><Product /></li>
            <li><Company /></li>
          </ul>
        </div>

    
        <div className="hidden md:block">
          <button className="border border-white rounded-3xl px-6">Get Started</button>
        </div>
      </div>

      {/* Mobile view  */}
      {mobileDrawerOpen && (
        <div className="lg:hiddenflex flex-col space-y-4 mt-4">
          <ul className="flex flex-col items-center space-y-4">
            <li>Price</li>
            <li><Product /></li>
            <li><Company /></li>
          </ul>
          <div className="flex justify-center mt-4">
            <button className="border border-white rounded-3xl px-6">Get Started</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
