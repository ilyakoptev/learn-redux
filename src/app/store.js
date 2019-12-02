import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger"

import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";

export default createStore(combineReducers({math, user }), {},  // the same => math: math, user:user 
applyMiddleware(createLogger())); //  applyMiddleware(myLogger, createLogger()));