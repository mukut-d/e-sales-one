import React from "react";
import { images } from "../constants/images";
import Card from "./Products/Card";
import { homeProducts } from "../constants/data";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const producs = homeProducts.slice(0, 4);

  const productDetailsHandler = (id) => navigate(`/products/${id}`);

  return (
    <div className="flex flex-col flex-1 ">
      <div className="p-2 flex flex-col text-4xl text-gray-600  items-center justify-center">
        <img src={images.companyLogo} width={350} height={350} />
        <p className="text-sm m-2">
          <span className="font-bold text-6xl">
            <span className="font-light text-lg">Welcome to </span>EveryDay
            BlackFriday
          </span>
        </p>
      </div>

      {/* <div className="flex flex-1 flex-col bg-red-400"> */}
      <div className="">
        <div className="flex items-center px-10">
          <span className=" m-4 text-amber-300 text-3xl font-bold border-b-2 py-2">
            People's Choices
          </span>
          <img src={images.award} width={50} height={40} />
        </div>
        <div className="flex  justify-center">
          {producs?.map((item, index) => (
            <Card
              id={item.id}
              key={index}
              name={item?.name}
              icon={item?.icon}
              price={item?.price}
              onClick={productDetailsHandler}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
