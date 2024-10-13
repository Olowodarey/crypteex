import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import logo from "../assets/logo.png";
import reward from "../assets/reward.png";
import slider1 from "../assets/slider1.jpg";
import sliser2 from "../assets/sliser2.jpg";

const Advarts = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="text-white bg-gradient-to-b from-black via-[#3824B5] to-black min-h-[80vh] sm:h-[100vh]">
      {/* Main container with gradient background */}
      <div className="container mx-auto px-4 sm:px-10 md:px-16 lg:px-20 h-[75vh]">
        <Slider {...settings}>
          {/* First slide */}
          <div className="flex flex-col justify-center h-[65vh]">
            <div
              className=" h-full w-full rounded-2xl p-5 sm:p-10 md:p-16 lg:p-20"
              style={{
                backgroundImage: `url(${reward})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="flex items-center space-x-4 mb-2">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-12 h-12 sm:w-16 sm:h-16"
                />
                <span className="text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  Rewards Program
                </span>
              </div>

              <div>
                <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                  A loyalty program <br /> that's actually Rewarding
                </h1>
              </div>

              <div className="pt-8 sm:pt-10">
                <button className="rounded-3xl border border-white px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base">
                  Discover Rewards
                </button>
              </div>
            </div>
          </div>

          {/* Second slide */}
          <div className="flex flex-col justify-center items-center h-[65vh]">
            <div
              className="bg-gradient-to-b from-[#85b0cb] to-[#753775] h-full w-full rounded-2xl p-5 sm:p-10 md:p-16 "
              style={{
                backgroundImage: `url(${slider1})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="flex flex-col sm:flex-row  space-x-10 space-y-6 sm:space-y-0">
                {/* header */}
                <div className="flex flex-col">
                  <div className="flex items-center space-x-4 mb-2">
                    <img
                      src={logo}
                      alt="Logo"
                      className="w-12 h-12 sm:w-16 sm:h-16"
                    />
                    <span className="text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-2xl">
                      Strike Options
                    </span>
                  </div>

                  <div>
                    <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-3xl leading-tight">
                      Predict where your <br /> investment will be in 20mins
                    </h1>
                  </div>

                  <div className="pt-8 sm:pt-10">
                    <button className="rounded-3xl border border-white px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base">
                      Start Trading
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third slide */}

          <div className="flex flex-col justify-center items-center h-[65vh]">
            <div
              className="bg-gradient-to-b from-[#85b0cb] to-[#46938b] h-full w-full rounded-2xl p-5 sm:p-10 md:p-16"
              style={{
                backgroundImage: `url(${sliser2})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="flex flex-col sm:flex-row  space-x-10 space-y-6 sm:space-y-0">
                {/* header */}
                <div className="flex flex-col">
                  <div className="flex items-center space-x-4 mb-2">
                    <img
                      src={logo}
                      alt="Logo"
                      className="w-12 h-12 sm:w-16 sm:h-16"
                    />
                    <span className="text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-2xl">
                      Up or Down Options
                    </span>
                  </div>

                  <div>
                    <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-3xl leading-tight">
                      Pinpoint opportunities in <br /> any market condition
                    </h1>
                  </div>

                  <div className="pt-8 sm:pt-10">
                    <button className="rounded-3xl border border-white px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base">
                      Start Trading
                    </button>
                  </div>
                </div>

                {/*  circles */}
            
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Advarts;
