import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [serachText , setSearchText] =useState();
    let count =0;

    useEffect(()=>{
        const data = setTimeout(()=>{

         console.log("data fetched ",count++)
        },300)

        return ()=> clearTimeout(data)
    },[serachText])


  return (
    <div className="sticky  w-full">
      <div>
        <div className="flex flex-row shadow-lg justify-between p-6">
          <div className="flex flex-row items-center cursor-pointer">
            <span>
              <h1 className="hover:text-yellow-700">FlipCart Clone</h1>
            </span>
          </div>
          <nav className="hidden md:flex flex-row items-center gap-8">
            <input  className="border border-gray-400 w-96 p-1 m-1 rounded-lg"  placeholder="Search here....." 
            onChange={(e)=>setSearchText(e.target.value)}/>
            <Link className="font-medium cursor-pointer hover:text-yellow-700">
              Home
            </Link>

            <div className="relative group">
              <div className="flex  items-center gap-1">
                <Link className="font-medium cursor-pointer hover:text-yellow-700">
                  Login
                </Link>
                <ul className="absolute hidden 
                space-y-2 group-hover:block bg-white border border-gray-500 rounded-lg p-5  items-start top-6  w-40">
                  <li>
                    <Link className="font-medium cursor-pointer hover:text-yellow-700">
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="font-medium cursor-pointer hover:text-yellow-700">
                      Orders
                    </Link>
                  </li>
                  <li>
                    <Link className="font-medium cursor-pointer hover:text-yellow-700">
                      Wishlist
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <Link className="font-medium cursor-pointer hover:text-yellow-700">
              Cart
            </Link>
            <Link className="font-medium cursor-pointer hover:text-yellow-700">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
