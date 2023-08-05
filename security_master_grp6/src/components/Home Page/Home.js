import React from "react";
import {Link} from "react-router-dom"
import AddModeratorIcon from '@mui/icons-material/AddModerator';


const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        {/*  */}
        <div className="flex flex-col justify-centre md:items-start w-full px-2 space-y-8" style={{marginLeft:50}}>
          <div className="text-3xl text-white">
             One stop destination for managing securities!
          </div>
          <h1 className="flex flex-col space-y-0">
            <div className="text-5xl md:text-7xl font-bold text-white">
              SecMaster
            </div>
            <div className="text-xl text-white py-3" style={{marginRight:120}}>Must for Asset Managers</div>
          </h1>
          <button className="py-3 px-6 sm:w-[60%] my-8 rounded-md bg-green-600 hover:bg-green-700 text-white">
            <Link to ="/sec-upload">Get Started</Link>
          </button>
        </div>

        {/* Image */}
        <div>
          <AddModeratorIcon className="text-white" style={{fontSize:'17rem',marginBottom:100}}/>
        </div>
      </div>
    </div>
  );
};

export default Home;