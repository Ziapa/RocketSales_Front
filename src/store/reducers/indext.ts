import {combineReducers} from "redux";
import {leadsReducer} from "./leadsReducer";


export const rootReducer = combineReducers({
    leads: leadsReducer
})

export type RootState = ReturnType<typeof rootReducer>