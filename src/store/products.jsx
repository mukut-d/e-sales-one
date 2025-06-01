import { useState } from "react";
import { createContext } from "react";

export const ProductContext = createContext({
  orderId: null,
  productDetails: {},
  saveProductDetails: () => {},
  saveOrderId: () => {},
});

const ProductProvider = ({ children }) => {
  const [productDetails, setProductDetails] = useState({});
  const [orderId, setOrderId] = useState(null);

  const saveProductDetailsHandler = (productObj) => {
    setProductDetails(productObj);
  };

  const saveOrderIdHandler = (orderId) => {
    setOrderId(orderId);
  };

  const ctxValue = {
    orderId: orderId,
    productDetails: productDetails,
    saveProductDetails: saveProductDetailsHandler,
    saveOrderId: saveOrderIdHandler,
  };
  return (
    <ProductContext.Provider value={ctxValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
