import {LeadsActionsType, LeadsActionTypes, LeadsStateType} from "../../types/typesLeads";

const leadsInitialState: LeadsStateType = {
    leads: [],
    statuses: [],
    contacts: [],
    loading: false,
    error: null
}

export const leadsReducer = (state = leadsInitialState, action: LeadsActionsType): LeadsStateType => {
    switch (action.type) {
        case LeadsActionTypes.FETCH_USERS:
            return {...state, loading: true, error: null}
        case LeadsActionTypes.FETCH_LEADS_SUCCESS:
            return {...state, error: null, leads: action.payload}
        case LeadsActionTypes.FETCH_STATUSES_SUCCESS:
            return {...state, error: null, statuses: action.payload}
        case LeadsActionTypes.FETCH_CONTACTS_SUCCESS:
            return {...state, loading: false, contacts: action.payload}
        default:
            return state

    }
}