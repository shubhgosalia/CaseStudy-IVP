import React, {useState,useEffect} from "react";
import axios from "axios"
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const EquityTile = () => {
  const[active,setActive]=useState()
  const[inactive,setInactive]=useState()

  useEffect(()=>{
        fetchActiveSecurity();
        fetchInactiveSecurity();
  },[])

  const fetchActiveSecurity=async()=>{
    axios.get(`http://localhost:53388/api/count`).then(response=>{
      console.log(response)
      setActive(response.data)
  })
  .catch(error=>{
      console.log(error)
  }) }

  const fetchInactiveSecurity=async()=>{
    axios.get(`http://localhost:53388/api/incount`).then(response=>{
      console.log(response)
      setInactive(response.data)
  })
  .catch(error=>{
      console.log(error)
  })}

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
                {active}
              </h1>
              <h5 className="mb-4 text-2xl text-green-700 font-medium">
                Active Equities
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
                {inactive}
              </h1>
              <h5 className="mb-4 text-2xl text-red-700 font-medium">
                Inactive Equities
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquityTile;
