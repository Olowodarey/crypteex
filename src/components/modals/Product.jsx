import * as React from "react";
import Menu from "@mui/material/Menu";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useEffect, useState } from "react";

export default function Product() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // Handle the click to open/close the modal
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
   // to  close modal when i transition to larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
      // to close  modal when resizing to large screens
        handleClose();
      }
    };

    // Set up the event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="">
      <button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="flex items-center"
      >
        Product <RiArrowDropDownLine />
      </button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
   
      >
        <div className="px-4">
          <div className="my-4">
            <h1 className="text-secondary font-bold">Buy and sell</h1>
            <div className="flex space-x-7 sm:space-x-3">
              <div className="border-l-2 pl-2 text-black">
                <h1 className="font-bold underline underline-offset-[4px]">App</h1>
                <p className="text-xs sm:text-sm ">
                  Buy over 250+ Cryptocurrencies <br /> right from your phone
                </p>
              </div>

              <div className="border-l-2 pl-2 text-black">
                <h1 className="font-bold underline underline-offset-[4px]">App</h1>
                <p className="text-xs sm:text-sm ">
                  Buy over 250+ Cryptocurrencies <br /> right from your phone
                </p>
              </div>
            </div>
          </div>

          <div className="my-4">
            <h1 className="text-secondary font-bold">Advanced Trading with Defi</h1>
            <div className="flex space-x-[30px] sm:space-x-[60px]">
              <div className="border-l-2 pl-2 text-black">
                <h1 className="font-bold underline underline-offset-[4px]">Defi Wallet</h1>
                <p className="text-xs sm:text-sm pt-2">App, Multiple Defi Wallet</p>
              </div>

              <div className="border-l-2 pl-2 text-black">
                <h1 className="font-bold underline underline-offset-[4px]">Defi Wallet</h1>
                <p className="text-xs sm:text-sm  pt-2">App, Multiple Defi Wallet</p>
              </div>
            </div>
          </div>
        </div>
      </Menu>
    </div>
  );
}
