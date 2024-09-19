import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstants } from "../../config/axiosInstants";

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
    return <div>Loading...</div>;
  }

  return (
    <div >
      <img src={resDetails.image} alt={resDetails.name} className="w-full " />
      <div >
        <h2 className="text-2xl font-bold">{resDetails.name}</h2>
        <div>
          <p>{resDetails.address}</p>
          <p>{resDetails.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ResDetails;

