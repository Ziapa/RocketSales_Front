export type DealsStateType = {
    leads: Array<TypesLeads>,
    statuses: Array<StatusesType>,
    contacts: Array<UsersType>,
    loading: boolean,
    error: null | string
}

export type TypesLeads = {
    account_id: number
    closed_at: null
    closest_task_at: null
    created_at: number
    created_by: number
    custom_fields_values: null
    group_id: number
    id: number
    is_deleted: boolean
    loss_reason_id: null
    name: string
    pipeline_id: number
    price: number
    responsible_user_id: number
    score: null
    status_id: number
    updated_at: number
    updated_by: number
    _embedded: {
        tags: Array<TagsType>
    }
}

export type TagsType = {
    id: number
    name: string
}

export type StatusesType = {
    account_id: number
    color: string
    id: number
    is_editable: boolean
    name: string
    pipeline_id: number
    sort: number
    type: number
}

export type UsersType = {
    account_id: number
    closest_task_at: null
    created_at: number
    created_by: number
    first_name: string
    group_id: number
    id: number
    is_deleted: boolean
    is_unsorted: boolean
    last_name: string
    name: string
    responsible_user_id: number
    updated_at: number
    updated_by: number
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

export type  LeadsActionsType =
    FetchLeadsAction
    | FetchLeadsSuccessAction
    | FetchLeadsErrorAction
    | FetchStatusesSuccessAction
    | FetchContactsSuccessAction

