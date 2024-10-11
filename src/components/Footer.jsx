import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center h-full mt-[100px] lg:mt-[150px] pb-20 px-4 space-y-10 lg:space-y-0 lg:space-x-20">
      
      {/* Left section: Frequently Asked Questions Title */}
      <div className="flex flex-col text-center lg:text-left">
        <h1 className="text-2xl md:text-3xl text-white leading-relaxed">
          frequently <br /> Asked <br /> Questions
        </h1>
      </div>

      {/* Right section: FAQ items */}
      <div className="flex flex-col text-white w-full lg:w-auto">
        
        {/* FAQ Item */}
        <div className="flex justify-between items-center border-b-2 py-2">
          <p className="text-sm md:text-base">What is crypto?</p>
          <span>
            <IoIosArrowForward />
          </span>
        </div>

        {/* FAQ Item */}
        <div className="flex justify-between items-center border-b-2 py-2">
          <p className="text-sm md:text-base">Where to buy crypto?</p>
          <span>
            <IoIosArrowForward />
          </span>
        </div>

        {/* FAQ Item */}
        <div className="flex justify-between items-center border-b-2 py-2">
          <p className="text-sm md:text-base">How to earn crypto?</p>
          <span>
            <IoIosArrowForward />
          </span>
        </div>

        {/* FAQ Item */}
        <div className="flex justify-between items-center border-b-2 py-2">
          <p className="text-sm md:text-base">How to earn rewards?</p>
          <span>
            <IoIosArrowForward />
          </span>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
