import React, {ChangeEvent, useEffect, useState} from 'react';
import s from "./App.module.css"
import './App.css';
import {Cards} from './components/Cards';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from './store/reducers/indext';
import {fetchLeads, searchLeads} from "./store/actionCreators/leads";
import {StatusesType, TypesLeads, UsersType} from "./types/typesLeads";

function App() {


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchLeads())
    }, [dispatch])

    const leads = useSelector<RootState, Array<TypesLeads>>(state => state.leads.leads)
    const statuses = useSelector<RootState, Array<StatusesType>>(state => state.leads.statuses)
    const contacts = useSelector<RootState, Array<UsersType>>(state => state.leads.contacts)
    const loading = useSelector<RootState, boolean>(state => state.leads.loading)

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
        return {id: 999, name: "string"}
    }

    const [value, setValue] = useState("")

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    useEffect(()=>{
        if(value.length > 3){
            dispatch(searchLeads(value))
        }
    },[value])

    return (
        <div className={s.app}>
            { value.length < 3 && value.length > 0 ?
                <span>поиск работает от 3 символов</span>
                : ""
            }
            <input value={value} placeholder={"Поиск"} onChange={onChangeHandler}/>
            <div className={s.cardsContainer}>

                {
                    loading ?
                    <p> ИДЕТ ЗАГРУЗКА.....</p>  :
                    leads.map(el =>
                    <Cards
                        key={el.id}
                        tags={el._embedded.tags}
                        name={el.name}
                        status={status(el.status_id)}
                        responsibleUser={userName(el.responsible_user_id).name}
                        created_at={el.created_at}
                        price={el.price}/>
                )}
            </div>
        </div>
    );
}

export default App;
