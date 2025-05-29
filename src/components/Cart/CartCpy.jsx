import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { images } from "../../constants/images";

const CartCpy = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Replace this with your actual product/cart data from context or props/state
  const order = location.state?.order || {
    productName: "Premium Shirt",
    variant: "Blue - M",
    quantity: 2,
    price: 25,
  };

  const total = order.quantity * order.price;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Order Details:", data);
    alert("Order placed successfully!");
    navigate("/products");
  };

  const goBackHandler = () => {
    navigate(`/products`);
  };

  return (
    <div className="flex flex-col p-5 bg-gray-100 min-h-screen">
      {/* Go Back Button */}
      <div className="bg-red-200 mb-5">
        <div className="flex items-center cursor-pointer p-3 w-[50%] bg-blue-200">
          <img
            src={images.back}
            width={"22px"}
            height={"22px"}
            onClick={goBackHandler}
          />
          <p className="px-2">Go Back</p>
        </div>
      </div>

      {/* Checkout Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col md:flex-row gap-10"
      >
        {/* Billing Info */}
        <div className="flex-1 bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-4">Billing Information</h2>

          <div className="mb-4">
            <label className="block mb-1">Full Name</label>
            <input
              {...register("fullName", { required: "Name is required" })}
              className="w-full border p-2 rounded"
            />
            {errors.fullName && (
              <span className="text-red-500">{errors.fullName.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
              className="w-full border p-2 rounded"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1">Phone Number</label>
            <input
              {...register("phone", {
                required: "Phone is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit number",
                },
              })}
              className="w-full border p-2 rounded"
            />
            {errors.phone && (
              <span className="text-red-500">{errors.phone.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1">Address</label>
            <input
              {...register("address", { required: "Address is required" })}
              className="w-full border p-2 rounded"
            />
          </div>

          <div className="flex gap-3 mb-4">
            <input
              {...register("city", { required: "City is required" })}
              className="w-1/3 border p-2 rounded"
              placeholder="City"
            />
            <input
              {...register("state", { required: "State is required" })}
              className="w-1/3 border p-2 rounded"
              placeholder="State"
            />
            <input
              {...register("zip", {
                required: "Zip is required",
                pattern: {
                  value: /^[0-9]{5,6}$/,
                  message: "Invalid Zip Code",
                },
              })}
              className="w-1/3 border p-2 rounded"
              placeholder="Zip Code"
            />
          </div>

          {/* Card Info */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Card Information</h3>
            <div className="mb-4">
              <label className="block mb-1">Card Number</label>
              <input
                {...register("cardNumber", {
                  required: "Card number is required",
                  pattern: {
                    value: /^\d{16}$/,
                    message: "Must be 16 digits",
                  },
                })}
                className="w-full border p-2 rounded"
              />
              {errors.cardNumber && (
                <span className="text-red-500">
                  {errors.cardNumber.message}
                </span>
              )}
            </div>

            <div className="flex gap-3 mb-4">
              <input
                {...register("expiryDate", {
                  required: "Expiry is required",
                  validate: (value) =>
                    new Date(value) > new Date() || "Must be a future date",
                })}
                type="month"
                className="w-1/2 border p-2 rounded"
                placeholder="Expiry Date"
              />
              <input
                {...register("cvv", {
                  required: "CVV is required",
                  pattern: {
                    value: /^\d{3}$/,
                    message: "CVV must be 3 digits",
                  },
                })}
                className="w-1/2 border p-2 rounded"
                placeholder="CVV"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Place Order
          </button>
        </div>

        {/* Order Summary */}
        <div className="w-full md:w-[40%] bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <div className="mb-2">
            <strong>Product:</strong> {order.productName}
          </div>
          <div className="mb-2">
            <strong>Variant:</strong> {order.variant}
          </div>
          <div className="mb-2">
            <strong>Quantity:</strong> {order.quantity}
          </div>
          <div className="mb-2">
            <strong>Subtotal:</strong> ${order.price * order.quantity}
          </div>
          <div className="mt-4 text-xl font-bold">Total: ${total}</div>
        </div>
      </form>
    </div>
  );
};

export default CartCpy;
