

export type LeadsStateType = {
    leads: any [],
    statuses: Array<any>,
    contacts: Array<any>,
    loading: boolean,
    error: null | string
}

export enum LeadsActionTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_LEADS_SUCCESS = "FETCH_LEADS_SUCCESS",
    FETCH_STATUSES_SUCCESS = "FETCH_STATUSES_SUCCESS",
    FETCH_CONTACTS_SUCCESS = "FETCH_CONTACTS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

type FetchLeadsAction = {
    type: "FETCH_USERS"
}
type FetchLeadsSuccessAction = {
    type: "FETCH_LEADS_SUCCESS"
    payload: any[]
}
type FetchStatusesSuccessAction = {
    type: "FETCH_STATUSES_SUCCESS"
    payload: any[]
}
type FetchContactsSuccessAction = {
    type: "FETCH_CONTACTS_SUCCESS"
    payload: any[]
}
type FetchLeadsErrorAction = {
    type: "FETCH_USERS_ERROR"
    payload: string
}

export type  LeadsActionsType = FetchLeadsAction | FetchLeadsSuccessAction | FetchLeadsErrorAction | FetchStatusesSuccessAction | FetchContactsSuccessAction

