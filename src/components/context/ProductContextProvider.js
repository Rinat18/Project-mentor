import React, { createContext, useContext } from "react";
import { ACTIONS, API } from "../../helpers/const";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const productContext = createContext();
export const useProducts = () => useContext(productContext);
const INIT_STATE = {
  products: [],
  oneProduct: {},
};

const ProductContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case ACTIONS.GET_PRODUCTS:
        return { ...state, products: action.payload };
      case ACTIONS.GET_ONE_PRODUCT:
        return { ...state, oneProduct: action.payload };
      default:
        return state;
    }
  };
  // ! CREATE
  const AddProducts = async (product) => {
    await axios.post(API, product);
    navigate("/products");
  };
  const values = {
    AddProducts,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
