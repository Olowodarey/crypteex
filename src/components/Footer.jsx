import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Footer = () => {
  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleDetails = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col lg:flex-col justify-center items-start lg:items-center h-full mt-[100px] lg:mt-[150px] pb-20 px-4 space-y-10 lg:space-y-0 lg:space-x-20">
      {/*  Frequently Asked Questions Title */}
      <div className="flex text-center lg:text-left">
        <h1 className="text-2xl md:text-3xl text-white leading-relaxed">
          Frequently Asked Questions
        </h1>
      </div>

      {/*FAQ section  */}
      <div className="flex flex-col pt-10 text-white w-full lg:w-[500px]">
        {/* FAQ Item 1 */}
        <div
          onClick={() => toggleDetails(0)}
          className="flex justify-between items-center border-b-2 py-2 cursor-pointer"
        >
          <p className="text-sm md:text-base">What is crypto?</p>
          <span>
            {visibleIndex === 0 ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        </div>

        {visibleIndex === 0 && (
          <div className="mt-2 text-sm md:text-base text-amber">
            <p>
              <strong>What are Cryptocurrencies?</strong> Cryptocurrencies are
              digital tokens. They are a type of digital currency that allows
              people to make payments directly to each other through an online
              system. Cryptocurrencies have no legislated or intrinsic value;
              they are simply worth what people are willing to pay for them in
              the market.
            </p>
          </div>
        )}

        {/* FAQ Item 2 */}
        <div
          onClick={() => toggleDetails(1)}
          className="flex justify-between items-center border-b-2 py-2 cursor-pointer"
        >
          <p className="text-sm md:text-base">Where to buy crypto?</p>
          <span>
            {visibleIndex === 1 ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        </div>

        {visibleIndex === 1 && (
          <div className="mt-2 text-sm md:text-base text-amber">
            <p>
              You can buy crypto on various cryptocurrency exchanges, such as
              Coinbase, Binance, and others, where you can trade fiat currency
              for digital assets.
            </p>
          </div>
        )}

        {/* FAQ Item 3 */}
        <div
          onClick={() => toggleDetails(2)}
          className="flex justify-between items-center border-b-2 py-2 cursor-pointer"
        >
          <p className="text-sm md:text-base">How to earn crypto?</p>
          <span>
            {visibleIndex === 2 ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        </div>

        {visibleIndex === 2 && (
          <div className="mt-2 text-sm md:text-base text-amber">
            <p>
              You can earn crypto by staking, mining, or participating in
              decentralized finance (DeFi) programs, among other methods.
            </p>
          </div>
        )}

        {/* FAQ Item 4 */}
        <div
          onClick={() => toggleDetails(3)}
          className="flex justify-between items-center border-b-2 py-2 cursor-pointer"
        >
          <p className="text-sm md:text-base">How to earn rewards?</p>
          <span>
            {visibleIndex === 3 ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        </div>

        {visibleIndex === 3 && (
          <div className="mt-2 text-sm md:text-base text-amber">
            <p>
              You can earn rewards by staking your cryptocurrency, holding
              certain tokens that pay dividends, or by participating in reward
              programs offered by various platforms.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
