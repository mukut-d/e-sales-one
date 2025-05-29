import { useNavigate, useParams } from "react-router-dom";
import { homeProducts } from "../../constants/data";
import Ratings from "./Ratings";
import { images } from "../../constants/images";
import { useState } from "react";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("silver");
  const [selectedSize, setSelectedSize] = useState("11");
  const { id } = useParams();
  const products = homeProducts.filter((item) => item.id === +id)[0];
  console.log("id " + JSON.stringify(products, null, 2));
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate(`/products`);
  };

  const cartNavigationHandler = () => {
    navigate(`/cart`);
  };

  const colors = [
    { id: "rose-gold", name: "Rose Gold", class: "bg-[#DEE1E6]" },
    { id: "silver", name: "Silver", class: "bg-[#E6AE87]" },
  ];

  const sizes = ["8", "9", "10", "11", "12", "13", "14"];

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex flex-col ">
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
      <div className="flex ">
        <div className="w-1/2 bg-blue-200 p-10 flex justify-center">
          <img src={products.icon} className="w-[400px] h-[358px]" />
        </div>
        <div className="w-1/2 bg-red-200 items-center ">
          <div className="m-5  ">
            <div className="text-5xl font-semibold">{products.name}</div>
            <div className="text-3xl font-medium ">
              <span className="text-yellow-400">$ </span>
              {products?.price}
            </div>
            <div className=" p-2">
              <p className="text-sm font-medium mb-2 text-stone-900">
                Color: Silver
              </p>
              <div className="flex space-x-2">
                {colors.map((color) => (
                  <button
                    key={color.id}
                    className={`w-8 h-8 rounded-full ${color.class} ${
                      selectedColor === color.id
                        ? "ring-2 ring-red-800 ring-offset-2"
                        : ""
                    }`}
                    onClick={() => setSelectedColor(color.id)}
                    aria-label={`Select ${color.name} color`}
                  />
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div className=" p-2 my-2">
              <p className="text-sm font-bold mb-2 text-stone-900">Quantity</p>
              <div className="flex  items-center border bg-white border-gray-300 w-28">
                <button
                  className="w-8 h-8  flex items-center justify-center border-r border-gray-300 text-stone-900"
                  onClick={decrementQuantity}
                >
                  -
                </button>
                <span className="flex-1 text-center text-stone-900">
                  {quantity}
                </span>
                <button
                  className=" text-stone-900 w-8 h-8 flex items-center justify-center border-l border-gray-300"
                  onClick={incrementQuantity}
                >
                  +
                </button>
              </div>
            </div>

            <div className="text-xl text-stone-900 underline font-normal my-2">
              Product Description
            </div>
            <p className="text-md px-4">
              Versatile and comfortable pants designed for everyday wear. Made
              from durable fabric with a relaxed fit that moves with you.
              Features include reinforced seams, convenient pockets, and a
              timeless style that pairs well with any top. Perfect for casual
              outings, work, or lounging at home. Available in multiple sizes
              and colors.
            </p>
            <div className="my-2 text-xl text-stone-900">Ratings</div>
            <div>⭐ ⭐ ⭐ ⭐ ⭐</div>
          </div>
          <div
            className="flex m-5 w-[80%]  button justify-center items-center"
            onClick={cartNavigationHandler}
          >
            <img
              src={images.cart}
              width={"18px"}
              height={"18px"}
              className=""
            />
            <span className="px-3 font-semibold">Buy Now</span>
          </div>
        </div>
      </div>
      <div className="flex  flex-col  mx-10 my-5">
        <div className="flex justify-center border-b-1  border-gray-400">
          <span className="text-3xl py-4 font-normal">Product Reviews</span>
        </div>
        <div className="my-5">
          <div>Mukutmani Das</div>
          <div>⭐ ⭐ ⭐ ⭐ ⭐</div>
          <div>This is a nice pant</div>
        </div>
      </div>

      {/* <Ratings className="" /> */}
    </div>
  );
};

export default ProductDetails;
