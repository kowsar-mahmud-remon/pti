import React from "react";
import { CiSearch } from "react-icons/ci";
import { LuUser2 } from "react-icons/lu";

const Navbar = () => {
  const navbarShadow = {
    boxShadow: "0 2px 3px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div className="w-full sticky top-0 z-10 bg-white" style={navbarShadow}>
      <div className=" max-w-[1280px] mx-auto navbar flex justify-between py-0">
        <div className="navbar flex justify-between">
          <a className="text-3xl cursor-pointer font-semibold mr-7">pti.</a>

          <div className="">
            <div className="form-control">
              <div className="flex items-center">
                <span className="me-[-22px] z-10 text-orange-600 mt-1">
                  <CiSearch />
                </span>

                <input
                  type="text"
                  placeholder="Search Audiobook"
                  className="input input-bordered max-w-32 h-9 md:w-auto ps-6"
                />
              </div>
            </div>
            <ul className="menu menu-horizontal flex justify-center">
              <li>
                <details className=" text-orange-500">
                  <summary className=" text-center">
                    <span className="text-black">Menu</span>
                  </summary>
                  <ul className="w-32">
                    <li className="">
                      <a className="text-black hover:text-orange-500">Home</a>
                    </li>
                    <li>
                      <a className="text-black hover:text-orange-500">
                        Category
                      </a>
                    </li>
                    <li>
                      <a className="text-black hover:text-orange-500">
                        My Favorites
                      </a>
                    </li>
                    <li>
                      <a className="text-black hover:text-orange-500">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="text-black hover:text-orange-500">
                        Log In / Sign Up
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <div className="avatar placeholder cursor-pointer ">
            <div className="bg-orange-500 rounded-full w-11 text-3xl text-white">
              <LuUser2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
