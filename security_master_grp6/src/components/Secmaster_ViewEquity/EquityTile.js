import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const EquityTile = () => {
  return (
    <div className="text-center my-24 mx-auto md:px-60 mb-20 mt-20">
      <div className="grid lg:grid-cols-2 lg:gap-x-12">
        <div className="mb-16 lg:mb-0">
          <div className="block h-full rounded-lg bg-gray-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div className="flex justify-center">
              <div className="-mt-8 inline-block rounded-full bg-gray-200 p-4 text-primary shadow-md">
                <ArrowUpwardIcon className="text-green-700" />
              </div>
            </div>
            <div className="p-6">
              <h1 className="mb-4 text-5xl text-green-700 font-bold text-primary dark:text-primary-400">
                10
              </h1>
              <h5 className="mb-4 text-2xl text-green-700 font-medium">
                Active Bonds
              </h5>
            </div>
          </div>
        </div>

        <div className="mb-16 lg:mb-0">
          <div className="block h-full rounded-lg bg-gray-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div className="flex justify-center">
              <div className="-mt-8 inline-block rounded-full bg-gray-200 p-4 text-primary shadow-md">
                <ArrowDownwardIcon className="text-red-700" />
              </div>
            </div>
            <div className="p-6">
              <h1 className="mb-4 text-5xl text-red-700 font-bold text-primary dark:text-primary-400">
                7
              </h1>
              <h5 className="mb-4 text-2xl text-red-700 font-medium">
                Inactive Bonds
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquityTile;
