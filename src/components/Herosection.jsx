import React from "react";
import checkmark from "../assets/checkmark.png";
import backgd from "../assets/backgd.png"

const Herosection = () => {
  return (
    <section
      className=" 
       sm:h-[100vh] 
      flex flex-col justify-center"
      style={{
        backgroundImage: `url(${backgd})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "80vh", // Default height for small screens
      }}
    >
      <div className="flex flex-col justify-center items-center h-full px-4 md:px-0">
        <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl mb-4 sm:mb-7 text-center leading-snug">
          Empower Your Future <br /> With Crypteez's Trading <br /> Platform
        </h1>

        <div className="text-center text-white font-bold text-lg sm:text-xl mb-6">
          <h2>Buy 250+ Cryptocurrencies in the comfort of your own phone</h2>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-5 sm:space-y-0 sm:space-x-6 mb-8">
          <div className="flex items-center space-x-2 text-xs sm:text-sm">
            <img
              className="w-5 h-5 sm:w-6 sm:h-6"
              src={checkmark}
              alt="Checkmark"
            />
            <p className="text-white">Zero-fee via ACH and Apple Pay</p>
          </div>

          <div className="flex items-center space-x-2 text-xs sm:text-sm">
            <img
              className="w-5 h-5 sm:w-6 sm:h-6"
              src={checkmark}
              alt="Checkmark"
            />
            <p className="text-white">Zero-fee via ACH and Apple Pay</p>
          </div>

          <div className="flex items-center space-x-2 text-xs sm:text-sm">
            <img
              className="w-5 h-5 sm:w-6 sm:h-6"
              src={checkmark}
              alt="Checkmark"
            />
            <p className="text-white">Zero-fee via ACH and Apple Pay</p>
          </div>
        </div>

        
        <div className="flex justify-center w-full">
          <button className="border border-white text-white rounded-3xl px-6 py-3  bg-fadedprimary">
            Download the APP
          </button>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
