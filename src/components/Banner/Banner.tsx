import Image from "next/image";
import React from "react";
import img from "../../assets/Image1.png";

const Banner = () => {
  return (
    <div className="mx-5">
      <div className="max-w-[1280px] mx-auto lg:bg-yellow-500 lg:text-white rounded-3xl mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:ps-28 lg:pe-10 items-center">
          <div className="text-center lg:text-start">
            <h2 className="text-3xl lg:text-5xl font-bold lg:leading-[55px]	">
              Deliver Food To Your Door Stepl
            </h2>
            <p className="text-lg mt-5">
              Authentic Food, Quick Service, Fast Delivery
            </p>
          </div>
          <Image
            className=" lg:h-96 bg-yellow-500 rounded-2xl mt-10 lg:mt-0"
            src={img}
            width={1000}
            height={1000}
            alt="Picture of the logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
