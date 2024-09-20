import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstants } from "../../config/axiosInstants";
import MenuItems from "../../components/user/MenuItems";

const ResDetails = () => {
  const { id } = useParams();
  const [resDetails, setResDetails] = useState(null);

  const getResById = async () => {
    try {
      const response = await axiosInstants({
        method: "GET",
        url: `/restaurant/rest/${id}`,
      });
      setResDetails(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching restaurant details:", error);
    }
  };

  useEffect(() => {
    getResById();
  }, [id]);

  if (!resDetails) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto p-4 lg:p-8">
        <img
          src={resDetails.image}
          alt={resDetails.name}
          className="w-full h-64 md:h-96 object-cover rounded-md shadow-md"
        />
        <div className="mt-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            {resDetails.name}
          </h2>
          <div className="mt-2 text-gray-600 space-y-2">
            <p className="text-base md:text-lg">{resDetails.address}</p>
            <p>{resDetails.description}</p>
          </div>
        </div>
      </div>
      {/* Menu items section */}
      <div className="mt-8">
        {/* Add menu items */}
      </div>
    </>
  );
};

export default ResDetails;
