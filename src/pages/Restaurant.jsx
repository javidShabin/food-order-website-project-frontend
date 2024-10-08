import React, { useState, useEffect } from "react";
import { axiosInstants } from "../config/axiosInstants";
import { Link } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Restaurant = () => {
  const [restData, setRestData] = useState([]);

  // navigate function for navigate restaurant detauls page
  const navigate = useNavigate();

  const getRestaurants = async () => {
    try {
      const response = await axiosInstants({
        method: "GET",
        url: "/restaurant/allRest",
      });
      console.log(response.data);
      setRestData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {restData.map((restaurant) => (
        <div
          key={restaurant._id}
          className="py-5 px-5 mx-auto shadow-xl rounded-md"
        >
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-[300px] rounded-md "
          />
          <h2>{restaurant.name}</h2>
          <h3>{restaurant.address}</h3>
          <div>
            <button
              onClick={() => {
                navigate(`/user/res-details/${restaurant._id}`);
              }}
              className="py-1 px-4 bg-orange-400 font-semibold text-white rounded-md mt-4 hover:bg-orange-500 transition duration-300 ease-in-out"
            >
              Explore
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Restaurant;
