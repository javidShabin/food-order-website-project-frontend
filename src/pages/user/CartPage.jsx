import React, { useEffect, useState } from "react";
import { axiosInstants } from "../../config/axiosInstants";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const getCartItems = async () => {
    try {
      const response = await axiosInstants({
        method: "GET",
        url: "/cart/getCart",
      });
      console.log(response);
      setCartItems(response.data.items);
      setTotalPrice(response.data.totalPrice);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Your Shopping Cart
      </h1>
      {cartItems.length === 0 ? (
        <p className="text-lg text-gray-600 text-center">Your cart is empty.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="w-full bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Product</th>
                <th className="py-3 px-6 text-left">Quantity</th>
                <th className="py-3 px-6 text-left">Price</th>
                <th className="py-3 px-6 text-left">Total</th>
                <th className="py-3 px-6 text-left"></th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {cartItems.map((item) => (
                <tr
                  key={item._id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-4 px-6 flex items-center">
                    <img
                      src={item.image}
                      alt={item.ItemName}
                      className="w-16 h-16 object-cover mr-4 rounded"
                    />
                    <span className="font-medium">{item.ItemName}</span>
                  </td>
                  <td className="py-4 px-6">{item.quantity}</td>
                  <td className="py-4 px-6">₹{item.price}</td>
                  <td className="py-4 px-6">₹{item.price * item.quantity}</td>
                  <td className="py-4 px-6 text-right">
                    <button className="text-red-600 hover:text-red-800">
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="mt-6 text-right">
        <h2 className="text-2xl font-bold text-gray-900">
          Total Price: ₹{totalPrice}
        </h2>
      </div>
    </div>
  );
};

export default CartPage;
