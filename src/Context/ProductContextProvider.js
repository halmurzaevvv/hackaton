import { API } from "../helpers/const";
import axios from "axios";
import React, { createContext, useReducer } from 'react';

export const productContext = createContext();

const INIT_STATE = {
    products: [],
};

function reducer(state = INIT_STATE, action) {
    switch (action.type) {
        case "GET_PRODUCTS":
            return { ...state, products: action.payload };
            default:
                state;
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

    const getProd = async () => {
        try {
            let res = await axios.get(`${API}/${id}`);
            dispatch({
                type: "GET_PRODUCTS",
                payload: res.data,
            });
        } catch (err) {

        };
    };
    return (
        <productContext.Provider 
        value={{
            addProd,
            getProd,
        }}
        >
            {children}
        </productContext.Provider>
    );
};

export default ProductContextProvider;