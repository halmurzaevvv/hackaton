import { API } from "../helpers/const";
import axios from "axios";
import React, { createContext, useReducer } from 'react';

export const productContext = createContext();

const INIT_STATE = {
    products: [],
    productDetails: {},
};

function reducer(state = INIT_STATE, action) {
    switch (action.type) {
        case "GET_PRODUCTS":
            return { ...state, products: action.payload };
        default:
            return state;
    };
};

const ProductContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    const addProd = async (prod) => {
        try {
            let res = await axios.post(API, prod);
        } catch (err) {

        };
    };

    const getProd = async (id) => {
        try {
            let res = await axios.get(`${API}/${id}`);
            dispatch({
                type: "GET_PRODUCTS",
                payload: res.data,
            });
        } catch (err) {

        };
    };

    const getProdDetails = async (id) => {
        const res = await axios.get(`${API}/${id}`);
        dispatch({
            type: "GET_PRODUCT_DETAILS",
            payload: res.data,
        });
    };

    return (
        <productContext.Provider
            value={{
                products: state.products,
                productDetails: state.productDetails,
                addProd,
                getProd,
                getProdDetails,
            }}
        >
            {children}
        </productContext.Provider>
    );
};

export default ProductContextProvider;