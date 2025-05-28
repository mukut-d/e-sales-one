import { useNavigate, useParams } from "react-router-dom";
import { homeProducts } from "../../constants/data";
import Ratings from "./Ratings";
import { images } from "../../constants/images";

const ProductDetails = () => {
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
            <div>ratings</div>
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
            <span className="px-3 font-semibold">Add to cart</span>
          </div>
        </div>
      </div>
      <div className="flex  flex-col  mx-10 my-5">
        <div className="flex justify-center border-b-1  border-gray-400">
          <span className="text-3xl py-4 font-normal">Product Reviews</span>
        </div>
        <div className="my-5">
          <div>Mukutmani Das</div>
          <div>stars</div>
          <div>This is a nice pant</div>
        </div>
      </div>

      {/* <Ratings className="" /> */}
    </div>
  );
};

export default ProductDetails;
