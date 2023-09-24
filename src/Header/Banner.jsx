import React from 'react';
import Navbar from './Navbar';
import backgroundImage from '../../public/Img/35987109_l_normal_none.png'; // Import the background image

const Banner = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-[70vh] relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay with opacity */}
        <div className="opacity-95 bg-white h-full w-full absolute top-0 left-0"></div>

        {/* Title without opacity */}
        <h1 className="text-5xl font-bold text-center text-black absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          I Grow By Helping People In Need
        </h1>

        {/* Search input and button */}
        <div className="absolute bottom-72 left-1/2 transform -translate-x-1/2 flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border rounded-l-lg"
          />
          <button className="bg-[#FF444A] text-white px-4 py-2 rounded-r-lg">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;


