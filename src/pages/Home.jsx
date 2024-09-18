import React from "react";
import { home } from "../assets";
import FilteredItems from "../components/FilteredItems";

const Home = () => {
  return (
    <>
      <main className="home bg-gray-100 py-6 sm:py-10 md:py-16 lg:py-7 custom-rouded xl:h-[80vh] ">
        <div className="container w-[95%] mx-auto px-4 flex flex-col items-center md:flex-row justify-between">
          {/* Text Section */}
          <div className="text-center sm:text-justify space-y-3 md:space-y-7 lg:space-y-8">
            <div className="font-extrabold space-y-2 lg:space-y-4">
              <h1 className="text-[28px] md:text-[27px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px] ">
                Craving something{" "}
                <span className="text-orange-400">delicious?</span>
              </h1>
              <h3 className="text-[20px] md:text-[25px] lg:text-[30px] xl:text-[35px] 2xl:text-[45px] ">
                Let us bring it to your{" "}
                <span className="text-orange-400">door!</span>
              </h3>
            </div>
            <p className="md:w-[450px] lg:w-[550px] xl:w-[600px] font-medium text-gray-600 ">
              Craving something special? At [Your Website Name], we deliver top
              dishes from local restaurants right to your door. Easy ordering,
              secure payment, and fast delivery—your favorite meal is just a
              click away!
            </p>
            <button
              className="bg-orange-400 text-white font-semibold sm:font-bold py-1 sm:py-2 px-3 sm:px-4 custom-btn-rouded 
             transition duration-300 ease-in-out transform hover:bg-orange-500 hover:scale-105 hover:rounded-md"
            >
              Explore
            </button>
          </div>
          {/* Image Section */}
          <div>
            <img
              src={home}
              alt="Delicious food"
              className="mt-4 sm:mt-0 w-[300px] md:w-[600px] h-auto "
            />
          </div>
        </div>
      </main>
      {/* Filtered items section */}
      <FilteredItems/>
    </>
  );
};

export default Home;
