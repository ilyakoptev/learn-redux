import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger"

const mathReducer = (state = {
    result: 1,
    lastValues: []
}, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
        case "SUBSTRACT":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]

            }
            break;
    }
    return state;
}


const userReducer = (state = {
    name: "Ilya",
    age: 40
}, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload
            }
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload

            }
            break;
    }
    return state;
}

const myLogger = (store) => (next) => (action) => {
    console.log("Logged ACtion: ", action);
    next(action);
}

const store = createStore(combineReducers({math: mathReducer, user: userReducer }), {},
    applyMiddleware(createLogger())); //  applyMiddleware(myLogger, createLogger()));

store.subscribe(() => {
    // console.group("Store updated", store.getState())
})



 ReactDOM.render(
          <Provider store={store}>
               <App />
          </Provider>, 
          document.getElementById('root'));