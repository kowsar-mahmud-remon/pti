import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import img from "../../assets/Image2.png";

const Footer = () => {
  return (
    <div className=" bg-yellow-500 mt-20">
      <footer className="max-w-[1280px] mx-auto pb-20">
        <div className="flex gap-10 justify-center lg:justify-between px-5">
          <div className="pt-20">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="input input-bordered w-[300px] lg:w-[700px] h-16 rounded-2xl"
              />
              <button className="flex items-center rounded-2xl lg:bg-orange-600 px-5 lg:px-10 py-2 text-md lg:text-lg text-orange-500 lg:text-white font-semibold ms-[-170px] lg:ms-[-200px]">
                Subscribe <FaArrowRightLong className="ms-3" />
              </button>
            </div>
            <div className="hero-content mt-16 flex-col lg:flex-row-reverse lg:justify-between items-center">
              <div className="">
                <div className="text-orange-600 flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start">
                  <FaGoogle className=" text-4xl p-2 bg-white rounded-full" />
                  <FaTwitter className=" text-4xl p-2 bg-white rounded-full" />
                  <FaInstagram className=" text-4xl p-2 bg-white rounded-full" />
                </div>
              </div>

              <div className="">
                <p className="text-4xl text-slate-900 font-bold text-center lg:text-start">
                  pti<span className="text-orange-700">.</span>
                </p>
                <p className="font-semibold text-md mt-5">
                  Copyright©Tripp.All Right Reserved
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <Image
              className="w-full h-80"
              src={img}
              width={1000}
              height={1000}
              alt="Picture of the product"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
