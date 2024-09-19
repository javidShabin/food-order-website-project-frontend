import React from "react";
import { cafe, delivery, food, home } from "../assets";
import FilteredItems from "../components/FilteredItems";
import Restaurant from "./Restaurant";

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
      <div>
        <FilteredItems />

        <hr className="border-gray-600 border-1 w-[95%] mx-auto mt-16" />

        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-left mt-8 ml-4">
          How its works
        </h2>
        <div className="flex justify-around text-center mt-9 ">
          <div>
            <img src={cafe} className="w-[50px] sm:w-[70px] mx-auto" />
            <h3 className="mt-2 sm:mt-8 text-center font-semibold text-[15px] sm:text-[18px] ">
              <span className="text-orange-400 text-[20px] sm:text-[25px] ">
                1
              </span>{" "}
              Select Restaurant
            </h3>
          </div>
          <div>
            <img src={food} className="w-[50px] sm:w-[70px] mx-auto" />
            <h3 className="mt-2 sm:mt-8 text-center font-semibold text-[15px] sm:text-[18px] ">
              <span className="text-orange-400 text-[20px] sm:text-[25px] ">
                2
              </span>{" "}
              Select Menu
            </h3>
          </div>
          <div>
            <img src={delivery} className="w-[50px] sm:w-[70px] mx-auto" />
            <h3 className="mt-2 sm:mt-8 text-center font-semibold text-[15px] sm:text-[18px] ">
              <span className="text-orange-400 text-[20px] sm:text-[25px] ">
                3
              </span>{" "}
              Wait for Delivery
            </h3>
          </div>
        </div>
      </div>
      {/* Restaurant section */}
      <div className="mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-left mt-11 px-6 ml-4">Restaurants</h2>
        <div className="">
          <Restaurant />
        </div>
      </div>
    </>
  );
};

export default Home;
