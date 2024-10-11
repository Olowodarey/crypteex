import * as React from "react";
import { useEffect, useState } from "react";
import Menu from "@mui/material/Menu";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Company() {
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
    <div>
      <button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="flex items-center"
      >
        Company <RiArrowDropDownLine />
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
            <h1 className="text-secondary font-bold">About Us</h1>
            <div className="flex space-x-[0px] sm:space-x-[30px] ">
              <div className="border-l-2 pl-2 text-black">
                <h1 className="font-bold underline underline-offset-[4px]">
                  About
                </h1>
                <p className="text-xs sm:text-sm ">
                  Learn more about our vision, our <br /> team, and our purpose
                </p>
              </div>

              <div className="border-l-2 pl-2 text-black">
                <h1 className="font-bold underline underline-offset-[4px]">
                  Support
                </h1>
                <p className="text-xs sm:text-sm ">Get 24/7 Chat Support</p>
              </div>
            </div>
          </div>

          <div className="my-4">
            <h1 className="text-secondary font-bold">Opportunities</h1>
            <div className="flex space-x-[-10px] sm:space-x-[15px]">
              <div className="border-l-2 pl-2 text-black">
                <h1 className="font-bold underline underline-offset-[4px]">
                  Careers
                </h1>
                <p className="text-xs sm:text-sm pt-2">Create web3 with us </p>
              </div>

                <div className="pl-[100px]">
                <div className="border-l-2 pl-2 text-black ">
                <h1 className="font-bold underline underline-offset-[4px]">
                  Partners
                </h1>
                <p className="text-xs sm:text-sm  pt-2">
                  Discover our World Class Partners
                </p>
              </div>
                </div>
            </div>
          </div>
        </div>
      </Menu>
    </div>
  );
}
