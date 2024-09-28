import React, { useEffect, useState } from "react";
import { axiosInstants } from "../../config/axiosInstants";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showBtn, setShowBtn] = useState(false);
  const [userAddress, setUserAddress] = useState([]);

  console.log(userAddress);

  const navigate = useNavigate();

  let deliveryCharge = 50;

  const getCartItems = async () => {
    try {
      const response = await axiosInstants({
        method: "GET",
        url: "/cart/getCart",
      });
      setCartItems(response.data.items);
      setTotalPrice(response.data.totalPrice);
    } catch (error) {
      console.log(error);
    }
  };

  const updateCartItemQuantity = async (menuItemId, newQuantity) => {
    try {
      if (newQuantity < 1) return;
      const response = await axiosInstants({
        method: "PUT",
        url: "/cart/update",
        data: {
          items: [{ menuItem: menuItemId, quantity: newQuantity }],
        },
      });
      setCartItems(response.data.items);
      setTotalPrice(response.data.totalPrice);
    } catch (error) {
      console.log(error);
    }
  };

  const removeCartItem = async (menuItemId) => {
    try {
      const response = await axiosInstants({
        method: "DELETE",
        url: "/cart/remove",
        data: { menuItem: menuItemId },
      });
      setCartItems(response.data.items);
      setTotalPrice(response.data.totalPrice);
    } catch (error) {
      console.log(error);
    }
  };

  const getAddress = async () => {
    try {
      const response = await axiosInstants({
        method: "GET",
        url: "/addresses/address",
      });
      setUserAddress(response.data);
      if (response.data.length > 0) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    } catch (error) {
      console.error("Failed to fetch address:", error);
    }
  };

  const makePayment = async () => {
    try {
      const stripe = await loadStripe(
        import.meta.env.VITE_STRIPE_publisheble_key
      );

      const session = await axiosInstants({
        method: "POST",
        url: "/payment/create-checkout-session",
        data: { products: cartItems },
      });
      console.log(session, "====session");
      const result = stripe.redirectToCheckout({
        sessionId: session.data.sessionId,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCartItems();
    getAddress();
  }, []);

  return (
    <div className="container mx-auto p-4 relative ">
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
                      className="w-16 h-16 object-cover mr-4 rounded-md"
                    />
                    <span className="font-medium">{item.ItemName}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                      <button
                        className="bg-gray-200 px-2 py-1 text-lg font-bold text-gray-700 hover:bg-gray-300"
                        onClick={() =>
                          updateCartItemQuantity(
                            item.menuItem,
                            item.quantity - 1
                          )
                        }
                      >
                        -
                      </button>
                      <span className="px-4 text-lg font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        className="bg-gray-200 px-2 py-1 text-lg font-bold text-gray-700 hover:bg-gray-300"
                        onClick={() =>
                          updateCartItemQuantity(
                            item.menuItem,
                            item.quantity + 1
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="py-4 px-6">₹{item.price}</td>
                  <td className="py-4 px-6">₹{item.price * item.quantity}</td>
                  <td className="py-4 px-6 text-right">
                    <button
                      className="text-red-600 hover:text-red-800"
                      onClick={() => removeCartItem(item.menuItem)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="mt-6 flex justify-between">
        <div className="shadow-xl w-full max-w-sm py-12 px-6 leading-8 bg-white rounded-lg">
          <h2 className="text-lg text-gray-700">Total Price: ₹{totalPrice}</h2>
          <hr className="mt-5" />
          <h2 className="text-lg text-gray-700 mt-5">
            Delivery charge: ₹{deliveryCharge}
          </h2>
          <hr className="mt-5" />
          <h2 className="text-2xl font-bold text-gray-900 mt-4">
            Grand Total: ₹{totalPrice > 0 ? totalPrice + deliveryCharge : 0}
          </h2>
          {showBtn ? (
            <button
              onClick={makePayment}
              className="py-1 px-5 rounded-md bg-orange-400 font-semibold mt-5 "
            >
              Check out
            </button>
          ) : (
            <button
              onClick={() => {
                navigate("/user/address");
              }}
              className="py-1 px-5 rounded-md bg-orange-400 font-semibold mt-5 "
            >
              Add address
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
