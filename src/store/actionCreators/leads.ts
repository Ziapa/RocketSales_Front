import {LeadsActionsType, LeadsActionTypes} from "../../types/typesLeads";
import {Dispatch} from "redux";
import {leadsAPI} from "../../DAL/API";


export const fetchLeads = () => {
    return async (dispatch: Dispatch<LeadsActionsType>) => {
        try {
            dispatch({type: LeadsActionTypes.FETCH_USERS})
            const responseLeads = await leadsAPI.getLeads()
            const responseStatuses = await leadsAPI.getPipelines()
            const responseContacts = await leadsAPI.getContacts()
            dispatch({type: LeadsActionTypes.FETCH_LEADS_SUCCESS, payload: responseLeads.data._embedded.leads})
            dispatch({type: LeadsActionTypes.FETCH_STATUSES_SUCCESS, payload: responseStatuses.data._embedded.pipelines})
            dispatch({type: LeadsActionTypes.FETCH_CONTACTS_SUCCESS, payload: responseContacts.data._embedded.contacts})
        } catch (e) {
        dispatch({type: LeadsActionTypes.FETCH_USERS_ERROR,payload: "Произошла ошибка при загрузки данных"})
        }

    }
}