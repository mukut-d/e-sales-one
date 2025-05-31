import { useNavigate } from "react-router-dom";
import { images } from "../../constants/images";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../store/products";
import { createOrder } from "../../api/OrderService";
import toast, { Toaster } from "react-hot-toast";

const notifySuccess = () => toast.success("Approved Transaction.");
const notifyError = () => toast.error("Declined Transaction.");
const notifyGatewayError = () => toast.error("Gateway Error/ Failure.");

const Cart = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { productDetails, saveOrderId } = useContext(ProductContext);

  const [status, setStatus] = useState(0);

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  // console.log(
  //   "product details in checkout " + JSON.stringify(productDetails, null, 2)
  // );

  const total = productDetails?.quantity * productDetails?.price;

  const onSubmit = async (data) => {
    // console.log("Order Details", data);

    if (status == 2) {
      notifyError();
      return;
    }
    if (status == 3) {
      notifyGatewayError();
      return;
    }

    const { fullname, email, phoneNo, address, city, state, zip } = data;

    const result = await createOrder({
      fullname,
      city,
      state,
      zip,
      address,
      phoneNo,
      email,
      status,
      ...productDetails,
    });

    console.log("response from create  " + JSON.stringify(result, null, 2));

    // call the orderSummary API here to save it to database.
    if (result?.order?._id) {
      saveOrderId(result?.order?._id);
    }

    // ✅ Show toast then redirect
    notifySuccess();

    // ✅ Wait 2.5s, then redirect
    setTimeout(() => {
      navigate("/greeting");
    }, 2500); // Give toast time to show
    // error, success, warn toast
  };

  const goBackHandler = () => {
    navigate(`/products`);
  };

  console.log(status);

  return (
    <div className="flex flex-col flex-1">
      <div className=" bg-red-200">
        <div className="flex items-center cursor-pointer p-3 w-[50%] bg-blue-200">
          <img
            className=""
            src={images.back}
            width={"22px"}
            height={"22px"}
            onClick={goBackHandler}
          />
          <p className="px-2">Go Back</p>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-1 m-5">
        {/* Billing Info */}
        <div className="p-5  bg-white rounded shadow  mx-4">
          <h2 className="text-2xl font-semibold">Billing Information</h2>

          <div className="p-2">
            <label>Full Name</label>
            <input
              {...register("fullname", { required: "Name is required" })}
              className="w-full bg-gray-100 p-2 my-1"
              placeholder="John Doe"
            />
            {errors.fullname && (
              <span className="text-red-400">{errors?.fullname?.message}</span>
            )}
          </div>

          <div className="p-2">
            <label>Email</label>
            <input
              className="w-full bg-gray-100 my-1 p-2"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format",
                },
              })}
              placeholder="xyz@email.com"
            />
            {errors.email && (
              <span className="text-red-400">{errors.email.message}</span>
            )}
          </div>
          <div className="p-2">
            <label>Phone Number</label>
            <input
              type="text"
              className="w-full bg-gray-100 my-1 p-2"
              {...register("phoneNo", {
                required: "phoneNo is required",
                validate: (value) =>
                  (value.length === 14 &&
                    value.charAt(0) === "+" &&
                    !!value.charAt(3) &&
                    !isNaN(value.substring(4))) ||
                  "Invalid Phone Number format",
              })}
              placeholder="+12 0123456789"
            />
            {errors.phoneNo && (
              <span className="text-red-400">{errors.phoneNo.message}</span>
            )}
          </div>

          <div className="p-2">
            <label>Address</label>
            <input
              className="w-full bg-gray-100 mt-2 p-2"
              {...register("address")}
              placeholder="Address"
            />
          </div>
          <div className="p-2">
            <input
              className="w-full bg-gray-100 my-1 p-2"
              {...register("city")}
              placeholder="City"
            />
            <input
              className="w-full bg-gray-100 my-1 p-2"
              {...register("state")}
              placeholder="State"
            />
            <input
              className="w-full bg-gray-100 my-1 p-2"
              {...register("zip")}
              placeholder="Zip Code"
            />
          </div>

          {/* Card Info */}
          <div className="p-2">
            <h3 className="font-normal text-2xl">Card Information</h3>
            <div className="p-2">
              <label>Card Number</label>
              <input
                className="w-full bg-gray-100 my-1 p-2"
                {...register("cardNumber", {
                  required: "Card number is required",
                  validate: (value) =>
                    (String(value).length === 16 && !isNaN(value)) ||
                    "Must be 16 digits",
                })}
              />
              {errors.cardNumber && (
                <span className="text-red-400">
                  {errors.cardNumber.message}
                </span>
              )}
            </div>

            <div className="p-2">
              <input
                className="w-full bg-gray-100 my-1 p-2"
                {...register("expiryDate", {
                  required: "Expiry is required",
                  validate: (value) =>
                    new Date(value) > new Date() || "Must be future date",
                })}
                type="month"
                placeholder="Expiry Date"
              />
              {errors.expiryDate && (
                <span className="text-red-400">
                  {errors.expiryDate.message}
                </span>
              )}
              <input
                className="w-full bg-gray-100 my-1 p-2"
                {...register("cvv", {
                  required: "CVV is required",
                  validate: (value) =>
                    (value >= 100 && value <= 999) || "CVV must be 3 digits",
                  // pattern: {
                  //   value: /^\d{3}/,
                  //   message: "CVV must be 3 digits",
                  // },
                })}
                placeholder="CVV"
              />
              {errors.cvv && (
                <span className="text-red-400">{errors.cvv.message}</span>
              )}
            </div>
            <div className="p-4">
              <label
                htmlFor="dropdown"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Choose an option:
              </label>
              <select
                id="dropdown"
                value={status}
                onChange={handleStatusChange}
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">-- Select --</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>

              <div className="mt-4 text-gray-700">
                Selected: <strong>{status || "None"}</strong>
              </div>
            </div>
          </div>
          <button type="submit" className="button mx-4">
            Place Order
          </button>
        </div>
        {/* Order Summary */}
        <div className="w-full md:w-[40%] bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <div className="mb-2">
            <strong>Product:</strong> {productDetails.name}
          </div>

          <div className="mb-2">
            <strong>Quantity:</strong> {productDetails.quantity}
          </div>
          <div className="mb-2">
            <strong>Subtotal:</strong> ₹{" "}
            {productDetails?.price * productDetails?.quantity}
          </div>
          <div className="mt-4 text-xl font-bold">Total: ₹ {total}</div>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default Cart;
