import React from "react";
import Technology from "../assets/Technology.png";
import { TfiApple } from "react-icons/tfi";
import { CiGift } from "react-icons/ci";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
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

const Advarttwo = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full mt-20 px-4 md:px-0">
      {/* Title */}
      <div>
        <h1 className="text-white text-2xl">Your crypto future begins here</h1>
      </div>

      {/* Content with gradient background and image */}
      <div className="flex space-x-2">
        <div className="flex flex-col  mb-20">
          <div
            className=" h-60 w-[350px] flex px-5 bg-fadedprimary bg-no-repeat bg-right-bottom mt-5 rounded-md"
            style={{
              backgroundImage: `url(${Technology})`,
              backgroundSize: "contain",
              backgroundPosition: "right bottom",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* 
                first add */}
            <div className="mt-10 flex flex-col ">
              <h1 className=" text-white text-xl">
                Buy Crypto via bank <br /> transfer easily
              </h1>

              <div className="text-white pt-8">
                <button className="flex items-center px-2 space-x-2 bg-primary rounded-lg p-1 ">
                  <span className=" text-white text-sm ">
                    Pay with Apple pay
                  </span>{" "}
                  <TfiApple />
                </button>
              </div>
              <div className="text-white pt-5">
                <button className="flex items-center px-2 space-x-2 bg-primary rounded-lg p-1 ">
                  <span className=" text-white text-sm ">
                    Pay with Google pay
                  </span>{" "}
                  <CiGift />
                </button>
              </div>
            </div>

            {/* 2nd add */}
          </div>
          <div className="text-white  h-60 w-[350px] flex px-5 bg-gradient-to-b from-fadedprimary to-primary mt-5 rounded-md">
            <div className="flex flex-col mt-5">
              <h1 className="text-xl text-justify">
                Up & Down Options in <br /> any market condition
              </h1>

              <div className="flex flex-col mt-3">
                <div className="flex justify-between bg-gradient-to-r from-fadedprimary to-secondary h-6 w-[300px] px-10 border border-white rounded-md">
                  <div className="text-white flex items-center space-x-2 ">
                    <span>Up</span> <FaArrowUp className="text-white" />
                  </div>
                  <div className="text-white flex items-center space-x-2 ">
                    <span>down</span> <FaArrowDown className="text-white" />
                  </div>
                </div>

                <div className=" flex mt-2 bg-fadedprimary h-30 w-[300px] border border-white rounded-md ">
                  <div className="flex">
                    <div className="flex flex-col pb-2 px-2">
                      <h1 className="text-sm pt-2">
                        Terget <span className=" text-green">$15,000.00</span>
                      </h1>
                      <p className="text-xs pt-2 text-black">Max Profit</p>
                      <p className="text-xs pt-2 text-black">% to terget</p>
                      <p className="text-xs pt-2 text-black">You pay [mins]</p>
                    </div>

                    <div className="flex flex-col pb-2 px-2">
                      <h1 className="text-sm pt-2">
                        Stop <span className=" text-red">$18,000.00</span>
                      </h1>
                      <p className="text-xs pt-2 text-black">Max loss</p>
                      <p className="text-xs pt-2 text-black">% to stop</p>
                      <p className=" text-xs pt-2 text-black  ">
                        Expires in <span className="">1d 5hr</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col text-white bg-gradient-to-b from-primary to-secondary h-[500px] w-[350px] mt-5 rounded-md z-10 ">
          <div className="flex flex-col px-5">
            <h1 className="pt-8 text-xl">
              Grow your portifolio <br /> with automatic trades{" "}
            </h1>
                    {/* mobile section */}

            <div className="relative z-10 bg-secondary h-[760px] sm:h-[392px] w-[300px] border-[10px] border-bblack rounded-t-3xl border-b-0 mt-5 ">
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
                <div className="flex items-center justify-between mt-3 bg-primary rounded-md px-2  text-white text-xs h-[50px]">
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
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advarttwo;
