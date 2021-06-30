import React from "react";
import { Link } from "react-router-dom";
// import Cloudinary from '../cloudinary'

const Hero = () => {
  return (
    <div>
      {/* <Cloudinary /> */}
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
        <div className="max-w-full mx-auto sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden mb-12">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover "
                src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                alt="People working on laptops"
              />
              <div
                className="absolute inset-0 bg-gray-500"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white">It's An </span>
                <span className="block text-yellow-200">"Add To Carts"</span>
                <span className="block text-white">Kinda Day! </span>
              </h1>
              <p className="mt-6 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl capitalize">
                Online shopping. No make up, no pants, no problem.
              </p>
              <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                  <Link
                    to="/shop"
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-black bg-white hover:bg-yellow-50 sm:px-8"
                  >
                    Shop
                  </Link>
                  <Link
                    to="/wishlist"
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-300 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                  >
                    Go to wishlist
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
