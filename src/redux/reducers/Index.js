import { combineReducers } from "redux";
import { productReducer } from "./ProductReducer.js";

const reducers=combineReducers({
    allProducts:productReducer
});

export default reducers;