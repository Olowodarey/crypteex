import React from "react";
import { FaChartLine } from "react-icons/fa6";
import graphred from "../assets/graphred.png";

const Price = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full px-4 md:px-0">
      {/* Heading */}
      <h1 className="font-bold text-3xl md:text-5xl text-center text-white">
        Buy Bitcoin, ETH, Polygon & <br className="hidden md:block" /> 250+ Cryptocurrencies
      </h1>

      {/* Check Price Button */}
      <div className="mt-6 md:mt-10">
        <button className="flex items-center text-white space-x-2 border border-white px-4 rounded-2xl py-2">
          <FaChartLine className="h-5 w-5" /> 
          <span>Check Price</span>
        </button>
      </div>

      {/* Chart List */}
      <div className="flex flex-col mt-5 space-y-6">
        {/* First Item */}
        <div className="flex flex-wrap justify-between items-center space-y-0 space-x-3">
          <div className="flex space-x-4 items-center">
            <h1 className="text-white text-xs md:text-xl">
              Bitcoin <span className="text-xs text-fadedprimary">BTC</span>
            </h1>
            <h2 className="text-white text-xs md:text-xl">$62,723.54</h2>
            <h3 className="hidden md:block text-white text-xs md:text-xl">
              <span className="text-xs text-green">+0.23%</span> $838,234,301,255.18
            </h3>
          </div>
          <img src={graphred} alt="Graph" className="w-10 h-12 md:w-24 md:h-16" />
          <button className="flex items-center text-white border border-white px-4 rounded-2xl py-1">
            Trade
          </button>
        </div>

       {/* First Item */}
       <div className="flex flex-wrap justify-between items-center space-y-0 space-x-3">
          <div className="flex space-x-4 items-center">
            <h1 className="text-white text-xs md:text-xl">
              Bitcoin <span className="text-xs text-fadedprimary">BTC</span>
            </h1>
            <h2 className="text-white text-xs md:text-xl">$62,723.54</h2>
            <h3 className="hidden md:block text-white text-xs md:text-xl">
              <span className="text-xs text-green">+0.23%</span> $838,234,301,255.18
            </h3>
          </div>
          <img src={graphred} alt="Graph" className="w-10 h-12 md:w-24 md:h-16" />
          <button className="flex items-center text-white border border-white px-4 rounded-2xl py-1">
            Trade
          </button>
        </div>

        <div className="flex flex-wrap justify-between items-center space-y-0 space-x-3">
          <div className="flex space-x-4 items-center">
            <h1 className="text-white text-xs md:text-xl">
              Bitcoin <span className="text-xs text-fadedprimary">BTC</span>
            </h1>
            <h2 className="text-white text-xs md:text-xl">$62,723.54</h2>
            <h3 className="hidden md:block text-white text-xs md:text-xl">
              <span className="text-xs text-green">+0.23%</span> $838,234,301,255.18
            </h3>
          </div>
          <img src={graphred} alt="Graph" className="w-10 h-12 md:w-24 md:h-16" />
          <button className="flex items-center text-white border border-white px-4 rounded-2xl py-1">
            Trade
          </button>
        </div>


        <div className="flex flex-wrap justify-between items-center space-y-0 space-x-3">
          <div className="flex space-x-4 items-center">
            <h1 className="text-white text-xs md:text-xl">
              Bitcoin <span className="text-xs text-fadedprimary">BTC</span>
            </h1>
            <h2 className="text-white text-xs md:text-xl">$62,723.54</h2>
            <h3 className="hidden md:block text-white text-xs md:text-xl">
              <span className="text-xs text-green">+0.23%</span> $838,234,301,255.18
            </h3>
          </div>
          <img src={graphred} alt="Graph" className="w-10 h-12 md:w-24 md:h-16" />
          <button className="flex items-center text-white border border-white px-4 rounded-2xl py-1">
            Trade
          </button>
        </div>


           
        
     
      </div>
    </div>
  );
};

export default Price;
