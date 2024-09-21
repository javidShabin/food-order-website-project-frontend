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
    price = Number(price)
    
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
    <div className="container mx-auto p-4 lg:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        Menu Items
      </h2>
      {menuItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div
              key={item._id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 relative">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-gray-600">{item.description}</p>
                <p className="mt-2 font-bold text-xl text-gray-900">
                  ₹{item.price}
                </p>
                <button
                  onClick={() => {
                    addToCart(item._id, item.ItemName, item.price); // Passing correct menuItem ID
                  }}
                  className="bg-orange-400 py-2 px-5 rounded-lg font-semibold absolute right-2 bottom-2"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-600 text-base md:text-lg">
          No menus available yet.
        </div>
      )}
    </div>
  );
};

export default MenuItems;
