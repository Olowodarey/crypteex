import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import logo from "../assets/logo.png";

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
          <div className="flex flex-col justify-center h-[75vh]">
            <div className="bg-[url('src/assets/reward.png')] bg-no-repeat bg-center bg-cover h-full w-full rounded-2xl p-5 sm:p-10 md:p-16 lg:p-20">
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
          <div className="flex flex-col justify-center items-center h-[75vh]">
            <div className="bg-gradient-to-b from-[#85b0cb] to-[#753775] h-full w-full rounded-2xl p-5 sm:p-10 md:p-16">
              <div className="flex flex-col sm:flex-row  space-x-10 space-y-6 sm:space-y-0">
                {/* header */}
                <div className="flex flex-col">
                  <div className="flex items-center space-x-4 mb-2">
                    <img src={logo} alt="Logo" className="w-12 h-12 sm:w-16 sm:h-16" />
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

                {/*  circles */}
                <div className="relative mt-10 sm:mt-0">
                  <div className="w-24 h-24 sm:w-40 sm:h-40 bg-fadedprimary rounded-full absolute top-0 left-20 mix-blend-multiply"></div>
                  <div className="w-24 h-24 sm:w-40 sm:h-40 bg-secondary rounded-full absolute top-16 left-10 mix-blend-multiply"></div>
                  <div className="w-24 h-24 sm:w-40 sm:h-40 bg-primary rounded-full absolute top-12 left-32 mix-blend-multiply"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Third slide */}

          


<div className="flex flex-col justify-center items-center h-[75vh]">
<div className="bg-gradient-to-b from-[#85b0cb] to-[#46938b] h-full w-full rounded-2xl p-5 sm:p-10 md:p-16">
  <div className="flex flex-col sm:flex-row  space-x-10 space-y-6 sm:space-y-0">
    {/* header */}
    <div className="flex flex-col">
      <div className="flex items-center space-x-4 mb-2">
        <img src={logo} alt="Logo" className="w-12 h-12 sm:w-16 sm:h-16" />
        <span className="text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-2xl">
        Up or Down Options
        </span>
      </div>

      <div>
        <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-3xl leading-tight">
          Pinpoint opportunities in  <br /> any market condition
        </h1>
      </div>

      <div className="pt-8 sm:pt-10">
        <button className="rounded-3xl border border-white px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base">
          Start Trading
        </button>
      </div>
    </div>

    {/*  circles */}
    <div className="relative mt-10 sm:mt-0">
  {/* Triangle 1 - Top Triangle */}
  <div className="w-0 h-0 border-l-[40px] border-r-[40px] border-b-[70px] border-l-transparent border-r-transparent border-b-secondary absolute top-0 left-[50%] translate-x-[-50%] mix-blend-multiply"></div>
  
  {/* Triangle 2 - Bottom Left Triangle */}
  <div className="w-0 h-0 border-l-[40px] border-r-[40px] border-b-[70px] border-l-transparent border-r-transparent border-b-secondary absolute top-[70px] sm:top-[100px] left-[30%] mix-blend-multiply"></div>
  
  {/* Triangle 3 - Bottom Right Triangle */}
  <div className="w-0 h-0 border-l-[40px] border-r-[40px] border-b-[70px] border-l-transparent border-r-transparent border-b-secondary absolute top-[70px] sm:top-[100px] left-[70%] mix-blend-multiply"></div>
</div>
  </div>
</div>
</div>
        
        </Slider>
      </div>
    </div>
  );
};

export default Advarts;
