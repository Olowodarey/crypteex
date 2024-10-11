import React from "react";
import { GiNetworkBars } from "react-icons/gi";
import { IoWifi } from "react-icons/io5";
import { FaBatteryQuarter } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";
import { HiMiniInboxArrowDown } from "react-icons/hi2";
import { IoCartOutline } from "react-icons/io5";
import graph from "../assets/graph.png";
import { CiBitcoin } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { IoWalletOutline } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa6";
import { GoCreditCard } from "react-icons/go";


const Moblie = () => {
  return (
    <div className="relative flex justify-center items-center h-auto  mb-5 md:px-0">
      {/* Background for Blur  */}
      <div className="absolute inset-0 z-0 flex justify-center items-center">
        <div
          className="w-[390px] h-[390px] sm:w-[550px] sm:h-[550px] rounded-full"
          style={{
            background: "linear-gradient(to bottom, #3824B5 100%, #8A2BE2 0%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      <div className="relative z-10 bg-secondary h-[760px] sm:h-[760px] w-[350px] border-[10px] border-bblack rounded-3xl ">
        {/* Nav Section */}
        <div className="flex justify-between items-center px-6 mt-4">
          <p className="text-white px-3">9.41</p>
          <div className="bg-bblack rounded-md h-[18px] w-[120px]"></div>
          <div className="flex space-x-0">
            <div className="text-white">
              <GiNetworkBars className="h-[18px] w-[25px]" />
            </div>
            <div className="text-white">
              <IoWifi className="h-[18px] w-[25px]" />
            </div>
            <div className="text-white">
              <FaBatteryQuarter className="h-[18px] w-[25px]" />
            </div>
          </div>
        </div>

        {/* quests Section */}
        <div className="flex items-center justify-between mt-5 px-6 ">
          <div className="text-white flex items-center">
            <IoSettingsOutline className="h-[40px] w-[40px]" />
          </div>

          <button className="flex bg-fadedprimary rounded-3xl px-3 py-2 items-center space-x-2 text-white border border-white">
            <span>Quests</span>
            <BsFileEarmarkPlus className="h-[20px] w-[20px]" />
          </button>
        </div>

        {/* Balance Section */}
        <div className="flex flex-col items-center justify-center mt-5 p-2 px-6 ">
          <h1 className="text-black">Current Total Balance</h1>
          <h2 className="flex items-center">
            <BsCurrencyDollar className="text-black" />{" "}
            <span className="font-bold text-white text-2xl">10,0111</span>
          </h2>
          <p className="text-green">+3.33% | +$232</p>
        </div>

        {/* trade sectiom */}

        <div className="flex items-center justify-between text-xs mt-10 px-6">
          <div className="flex text-white items-center ">
            {" "}
            <IoIosAddCircleOutline /> <span>Buy</span>
          </div>
          <div className="flex items-center text-white">
            {" "}
            <CiCircleMinus /> <span>Sell</span>
          </div>
          <div className="flex text-white items-center">
            {" "}
            <HiMiniInboxArrowDown /> <span>Deposit</span>
          </div>
          <div className="flex text-white items-center">
            {" "}
            <IoCartOutline /> <span>Pay</span>
          </div>
        </div>

        {/* watchlist sectiom */}
        <div className="px-6">
          <h1 className=" mt-5 text-white">Watchlist</h1>
          <div className="flex items-center justify-between mt-3 bg-primary rounded-md px-2  text-white text-xs h-[60px]">
            <div>
              <h1 className="flex items-center text-xs">
                {" "}
                <CiBitcoin />
                <span> Bitcoin</span>
              </h1>
              <p className="font-thin">BTC</p>
            </div>
            <div>
              {" "}
              <img src={graph} alt="" className="h-10" />
            </div>

            <div className="text-xs text-right">
              <h1>$62,456.23</h1>
              <p className="text-green">+1.35%</p>
            </div>
          </div>

          <div className="flex items-center justify-between mt-3 bg-primary rounded-md px-2  text-white text-xs h-[60px]">
            <div>
              <h1 className="flex items-center text-xs">
                {" "}
                <CiBitcoin />
                <span> Ethereum</span>
              </h1>
              <p className="font-thin">ETH</p>
            </div>
            <div>
              {" "}
              <img src={graph} alt="" className="h-10" />
            </div>

            <div className="text-xs text-right">
              <h1>$2,400.23</h1>
              <p className="text-green">+3.25%</p>
            </div>
          </div>

          <div className="flex items-center justify-between mt-3 bg-primary rounded-md px-2  text-white text-xs h-[60px]">
            <div>
              <h1 className="flex items-center text-xs">
                {" "}
                <CiBitcoin />
                <span> polygon</span>
              </h1>
              <p className="font-thin">POL</p>
            </div>
            <div>
              {" "}
              <img src={graph} alt="" className="h-10" />
            </div>

            <div className="text-xs text-right">
              <h1>$2.23</h1>
              <p className="text-green">+0.15%</p>
            </div>
          </div>

          <div className="flex items-center justify-between mt-3 bg-primary rounded-md px-2  text-white text-xs h-[60px]">
            <div>
              <h1 className="flex items-center text-xs">
                {" "}
                <CiBitcoin />
                <span> Ton</span>
              </h1>
              <p className="font-thin">TON</p>
            </div>
            <div>
              {" "}
              <img src={graph} alt="" className="h-10" />
            </div>

            <div className="text-xs text-right">
              <h1>$5.23</h1>
              <p className="text-green">+8.35%</p>
            </div>
          </div>

      

        </div>

        {/* footer sectiom */}

       <div>

       <div className="flex justify-end  ">
            <button className=" bg-fadedprimary border border-white rounded-3xl text-white px-2 text-xs p-1">
              Refar a friend & get a suprise crypto
            </button>
          </div>

          
          <div className="flex justify-center mt-6">
            <p className=" text-white text-sm">Explore More coins</p>
          </div>

                 {/* footer  */}

       <div className=" flex justify-between mt-[11px] bg-white px-6 p-2.5 rounded-b-3xl font-bold">
          <div className="flex flex-col justify-center items-center">
            <p>
              <CiHome className="h-5 w-5" />
            </p>
            <p className="text-xs">Home</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <p>
            <IoWalletOutline className="h-5 w-5" />
            </p>
            <p className="text-xs">Wallet</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <p>
            <FaChartLine className="h-5 w-5" />
            </p>
            <p className="text-xs">Track</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <p>
            <GoCreditCard  className="h-5 w-5" />
            </p>
            <p className="text-xs">Card</p>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Moblie;
