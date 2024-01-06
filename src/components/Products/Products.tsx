import { useGetAllProductsQuery } from "@/redux/features/products/productsApi";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const ProductsPage = () => {
  const { data } = useGetAllProductsQuery({});

  const [itemsToShow, setItemsToShow] = useState(5);

  const handleShowMore = () => {
    setItemsToShow(itemsToShow + 5);
  };

  const handleShowLess = () => {
    setItemsToShow(5);
  };

  console.log(data?.Items);
  return (
    <div className="mx-5">
      <div className="max-w-[1280px] mx-auto mt-20">
        <div className="flex justify-between">
          <p className="text-xl font-semibold">Popular</p>
          <p className="text-lg font-semibold text-orange-500 flex items-center">
            AddMore{" "}
            <span className="flex">
              <IoIosArrowBack
                onClick={handleShowLess}
                className=" text-slate-400 cursor-pointer text-xl"
              />
              <IoIosArrowForward
                onClick={handleShowMore}
                className=" text-slate-600 cursor-pointer text-xl"
              />
            </span>
          </p>
        </div>

        <div className="grid grid-cols-3 lg:grid-cols-5 gap-5 mt-5">
          {data?.Items?.slice(0, itemsToShow)?.map((item: any) => (
            <div key={item?.Id} className="">
              <Image
                className="w-full h-44 lg:h-[270px] rounded-xl shadow-lg"
                src={item?.ImageUrl}
                width={500}
                height={500}
                alt="Picture of the bike"
              />
              <p className="mt-2 text-lg font-semibold text-slate-500 text-center px-2">
                {item?.Name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
