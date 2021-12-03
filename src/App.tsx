import React, { useEffect } from 'react';
import './App.css';
import {Cards} from './components/Cards';
import {useDispatch, useSelector} from "react-redux";
import { RootState } from './store/reducers/indext';
import {fetchLeads} from "./store/actionCreators/leads";
import {StatusesType, TypesLeads, UsersType} from "./types/typesLeads";

function App() {






    const dispatch = useDispatch()

    useEffect(() =>  {
        dispatch(fetchLeads())
    }, [])

    const leads = useSelector<RootState, Array<TypesLeads>>( state => state.leads.leads)
    const statuses = useSelector<RootState, Array<StatusesType>>( state => state.leads.statuses)
    const contacts = useSelector<RootState, Array<UsersType>>( state => state.leads.contacts)

    const status = (id: number): { name: string, color: string } => {

        const status = statuses.find(status => status.id === id)

        if (status)
            return status
        return {name: 'string', color: 'string'}
    }
    const userName = (id: number): { id: number, name: string } => {

        const userName = contacts.find(contacts => contacts.responsible_user_id === id)
        if (userName) {
            return userName
        }
        return { id: 999, name: "string" }
    }



    return (
        <div className="App">

            {leads.map(el =>
                <Cards
                    tags={el._embedded.tags}
                    name={el.name}
                       status={status(el.status_id)}
                       responsibleUser={userName(el.responsible_user_id).name}
                       created_at={el.created_at}
                       price={el.price}/>
            )}

        </div>
    );
}

export default App;
