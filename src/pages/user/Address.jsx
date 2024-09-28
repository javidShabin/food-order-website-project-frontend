import { useForm } from "react-hook-form";
import { axiosInstants } from "../../config/axiosInstants";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Address() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axiosInstants({
        method: "POST",
        url: "/addresses/address",
        data,
      });
      toast.success("Address created");
      navigate("/user/cart");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center h-[100vh] w-full  ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg flex flex-col"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">
          Address form
        </h2>

        <input
          className="mb-4 p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Name"
          {...register("name", { required: true })}
        />

        <input
          className="mb-4 p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />

        <input
          className="mb-4 p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Street"
          {...register("street", { required: true })}
        />

        <input
          className="mb-4 p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="City"
          {...register("city", { required: true })}
        />

        <input
          className="mb-4 p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Pincode"
          {...register("postalCode", { required: true })}
        />

        <input
          className="mb-4 p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Country"
          {...register("country", { required: true })}
        />

        <input
          className="mb-4 p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="tel"
          placeholder="Phone"
          {...register("phone", { required: true })}
        />

        <input
          className="bg-orange-400 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-500 cursor-pointer w-[100px] transition duration-300 mt-2"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}
