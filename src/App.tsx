import React, { useEffect } from 'react';
import './App.css';
import {Cards} from './components/Cards';
import {useDispatch, useSelector} from "react-redux";
import { RootState } from './store/reducers/indext';
import {fetchLeads} from "./store/actionCreators/leads";
import {LeadsStateType} from "./types/typesLeads";

function App() {


    // const status = (id: number): { name: string, color: string } => {
    //
    //     const status = leads.pipeline._embedded.statuses.find(status => status.id === id)
    //
    //     if (status)
    //         return status
    //     return {name: 'string', color: 'string'}
    // }
    //
    // const userName = (id: number): { id: number, name: string } => {
    //
    //     const userName = leads.users.find(users => users.id === id)
    //     if (userName) {
    //         return userName
    //     }
    //     return { id: 999, name: "string" }
    // }

    const dispatch = useDispatch()

    useEffect(() =>  {
        dispatch(fetchLeads())
    }, [])

    const leads = useSelector<RootState>( state => state.leads)


    return (
        <div className="App">



        </div>
    );
}

export default App;
