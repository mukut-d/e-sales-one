import React from "react";
import { homeProducts } from "../../constants/data";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const productDetailsHandler = (id) => navigate(`/products/${id}`);

  return (
    <>
      <div className="flex flex-1  flex-wrap justify-center">
        {homeProducts?.map((item, index) => {
          return (
            <Card
              key={item.id}
              name={item?.name}
              icon={item?.icon}
              price={item?.price}
              id={item.id}
              onClick={productDetailsHandler}
            />
          );
        })}
      </div>
      <div className="self-center m-3">pagination ... here</div>
    </>
  );
};

export default Products;
