import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./reducers/indext";
import thunk from "redux-thunk";


export const store = createStore(rootReducer, applyMiddleware(thunk))




// @ts-ignore
window.store = store