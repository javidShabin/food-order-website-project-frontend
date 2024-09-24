import React, { useEffect, useState } from "react";
import { axiosInstants } from "../../config/axiosInstants";
import toast from "react-hot-toast";

const MenuItems = () => {
  const [menuItems, setMenuItems] = useState([]);

  const getMenuList = async () => {
    try {
      const response = await axiosInstants({
        method: "GET",
        url: "/menus/allmenus",
      });
      setMenuItems(response.data);
    } catch (error) {
      console.error("Error fetching menu items:", error);
    }
  };

  const addToCart = async (menuItemId, ItemName, price) => {
    console.log(price, typeof price);
    price = Number(price);

    try {
      const response = await axiosInstants({
        method: "POST",
        url: "/cart/addCart",
        data: {
          items: [
            {
              menuItem: menuItemId, // Correctly passing menuItem ID
              ItemName: ItemName,
              quantity: 1, // Replace with the desired quantity
            },
          ],
        },
      });
      console.log(response);
      toast.success("Item add in the cart");
    } catch (error) {
      console.log(error.response?.data || error.message); // Improved error handling
    }
  };

  useEffect(() => {
    getMenuList();
  }, []);

  return (
    <div className="container mx-auto p-6 lg:p-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Our Menu
      </h2>
      {menuItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
          {menuItems.map((item) => (
            <div
              key={item._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-lg font-bold text-gray-900">
                    ₹{item.price}
                  </p>
                  <button
                    onClick={() => {
                      addToCart(item._id, item.ItemName, item.price);
                    }}
                    className="bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600 transition-colors duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-600 text-center text-lg">
          No menus available yet.
        </div>
      )}
    </div>
  );
};

export default MenuItems;
