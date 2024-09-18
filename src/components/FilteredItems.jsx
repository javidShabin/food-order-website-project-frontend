import React, { useState, useEffect } from "react";
import cardDatas from "./FilteredData";
import { axiosInstants } from "../config/axiosInstants";
import { X } from "lucide-react";
import toast from "react-hot-toast";

const FilteredItems = () => {
  const [category, setCategory] = useState("");
  const [catDatas, setCatDatas] = useState([]);
  const [showItems, setShowItems] = useState(false);

  // get filterd items form backend, database
  const Filtered = async (category) => {
    try {
      const response = await axiosInstants({
        method: "GET",
        url: "/menus/items/filter",
        params: { category: category },
      });
      // send datas for dispalying
      setCatDatas(response.data);

      // show filtered items
      setShowItems(true);
    } catch (error) {
      toast.error("No items found"); // show toast when get error
      console.error("Error fetching filtered items:", error);
    }
  };

  useEffect(() => {
    // Fetch filtered items when category changes
    if (category) {
      Filtered(category);
    }
  }, [category]);

  // handle remove function for remove filtered items
  const handleRemove = () => {
    setShowItems(false);
  };

  return (
    <>
      <div className="category container mx-auto p-4 relative cursor-pointer ">
        <h2 className="text-2xl font-bold mb-4 text-center">
          What's on your mind
        </h2>

        <main className="wrapper overflow-x-scroll sm:overflow-x-auto whitespace-nowrap p-4 rounded-lg shadow-md">
          <div className=" grid grid-cols-7 gap-56 space-x-4 w-full ">
            {cardDatas.map((items) => (
              <div
                key={items.id}
                className="w-48 p-2 bg-white rounded-md shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105"
              >
                <img
                  src={items.imgSrc}
                  alt={items.name}
                  className="w-full h-32 object-cover rounded-md"
                  onClick={() => setCategory(items.category)}
                />
                <h2 className="text-lg font-semibold text-center mt-2">
                  {items.name}
                </h2>
              </div>
            ))}
            {console.log(cardDatas)}
          </div>
        </main>

        {showItems ? (
          <div className="p-4 backdrop-blur-sm bg-[#3d3d3da6] rounded-lg shadow-md mt-4 absolute top-0 left-0 w-full h-[100vh] ">
            <div
              onClick={handleRemove}
              className="cursor-pointer flex justify-end"
            >
              <div className="text-white font-bold bg-orange-500 rounded-full p-3  ">
                <X />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 md:grid-cols-3 gap-4 mt-4">
              {catDatas.map((items) => (
                <div
                  key={items._id}
                  className="bg-white p-4 rounded-md shadow-md w-[250px]"
                >
                  <img
                    src={items.image}
                    alt={items.name}
                    className="w-full h-32 object-cover rounded-md"
                  />
                  <h1 className="text-lg font-bold text-center mt-2">
                    {items.name}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default FilteredItems;
