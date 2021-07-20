import React from "react";

import { FcShipped } from "react-icons/fc";
import { RiShirtFill, RiErrorWarningFill } from "react-icons/ri";
import Hero from "../components/Hero/Hero";

const Home = () => {
  return (
    <div className="flex flex-col mx-auto px-10">
      <span className="flex w-[95%] m-14 bg-gray-100 rounded-lg mx-auto p-3 tracking-widest px-20 space-x-24 items-center justify-center text-sm font-Bold">
        <div className="flex sm: w-60">
          <FcShipped className="mx-4 text-lg" />
          Free shipping
        </div>
        <span> {"|"} </span>
        <div className="flex sm: w-60">
          <RiShirtFill className="mx-4 text-lg text-black" />
          Discover the freshest arrivals
        </div>
        <span> {"|"} </span>
        <div className="flex">
          <RiErrorWarningFill className="mx-4 text-lg text-black" /> Norms
          related co-vid followed
        </div>
      </span>
      <Hero />
    </div>
  );
};

export default Home;
