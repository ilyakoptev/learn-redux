import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger"
import thunk from "redux-thunk"
import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";
import promise from  "redux-promise-middleware";
export default createStore(
    combineReducers({
        math, 
        user 
    }), {},     // the same => math: math, user:user 
applyMiddleware(createLogger(), thunk, promise )); //  applyMiddleware(myLogger, createLogger()));