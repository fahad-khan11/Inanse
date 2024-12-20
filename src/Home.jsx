import React from "react";
import { GiAutoRepair } from "react-icons/gi";
import { MdOutlineSelfImprovement } from "react-icons/md";
import { GrVmMaintenance } from "react-icons/gr";

const Home = () => {
  return (
    <div className="md:relative h-screen">
      <div className="flex flex-col md:flex-row justify-center items-center bg-[#d1e3ff]">
        <div className="flex flex-col gap-8 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold max-w-[300px] md:max-w-[400px] text-[#0355cc]">
            Repair and Maintenance Services
          </h1>
          <p className="text-sm md:text-base max-w-[300px] md:max-w-[600px] mx-auto md:mx-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum
            voluptatem adipisci. Quos molestiae saepe dicta nobis pariatur,
            tempora iusto, ad possimus soluta hic praesentium mollitia
            consequatur beatae, aspernatur culpa.
          </p>
          <button className="bg-orange-400 w-[140px] md:w-[160px] h-[35px] text-white rounded-md mx-auto md:mx-0">
            CONTACT US
          </button>
        </div>
        <div className="md:order-2">
          <img src="/Images/image1.png" alt="" className="w-[200px] md:w-[300px] lg:w-[400px]" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row  justify-center items-center gap-2 md:absolute  md:bottom-[50px] lg:bottom-[50px] w-full">
        <div className="flex flex-col gap-1 justify-center items-center w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-white border shadow-2xl border-white transition-colors duration-500 hover:bg-orange-400 hover:text-white group">
          <GiAutoRepair className="w-[70px] md:w-[100px] h-[70px] md:h-[100px] text-gray-500 transition-colors duration-500 group-hover:text-white" />
          <p className="text-xl md:text-2xl font-semibold text-gray-500 transition-colors duration-500 group-hover:text-white">
            REPAIR
          </p>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-white border shadow-2xl border-white transition-colors duration-500 hover:bg-orange-400 hover:text-white group">
          <MdOutlineSelfImprovement className="w-[70px] md:w-[100px] h-[70px] md:h-[100px] text-gray-500  transition-colors duration-500 group-hover:text-white" />
          <p className="text-xl md:text-2xl font-semibold text-gray-500  transition-colors duration-500 group-hover:text-white">
            IMPROVE
          </p>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-white border shadow-2xl border-white transition-colors duration-500 hover:bg-orange-400 hover:text-white group">
          <GrVmMaintenance className="w-[70px] md:w-[100px] h-[70px] md:h-[100px] text-gray-500 transition-colors duration-500 group-hover:text-white" />
          <p className="text-xl md:text-2xl font-semibold text-gray-500 transition-colors duration-500 group-hover:text-white">
            MAINTAIN
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
