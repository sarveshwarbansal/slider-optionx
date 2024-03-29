import React from "react";
import Image from "next/image";
import main from "../assets/main_asset.svg";
const Hero = () => {
  return (
    <div className="w-full relative bg-custom p-8 md:p-16 flex flex-col  sm:flex-row justify-evenly">
      <div className="w-full  sm:w-2/6 flex-col justify-center items-center md:pt-[24px]  md:justify-start md:items-start  inline-flex order-2 ss:order-1 mt-6">
        <div className="text-center md:text-left ">
          <span className="text-[42px] text-white  md:text-[54px] font-bold  font-lexend ">
            Trade With Unleashed{" "}
          </span>
          <span className=" text-[42px] text-gradient md:text-[54px] font-bold font-lexend">
            Speed
          </span>
          <span className="text-[42px] text-white md:text-[54px] font-bold font-lexend">
            {" "}
            And{" "}
          </span>
          <span className="text-[42px] text-gradient md:text-[54px] font-bold font-lexend">
            Execution
            <br />
          </span>
        </div>

        <div className=" justify-center items-center sm:justify-center md:justify-start sm:items-start flex py-8">
          <a href="https://platform.optionx.trade/">
            <button className="text-white text-base font-medium  p-2.5 bg-indigo-700 border-2 border-indigo-700 hover:bg-indigo-600">
              Try FREE for 7 Days
            </button>
          </a>
          {/* <button className="text-white text-base font-medium p-2.5 border-2 border-white px-8 hover:bg-slate-800">
            Demo Video
          </button> */}
        </div>
      </div>
      <div className="hidden sm:block  sm:w-4/6 sm:px-16 md:px-24 justify-end order-1 ss:order-2 ">
        <Image className="h-full " src={main} alt="" loading="lazy" />
      </div>
    </div>
  );
};

export default Hero;
