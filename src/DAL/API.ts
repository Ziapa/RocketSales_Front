import axios from "axios";

export const instance = axios.create({
    baseURL: "https://rocketsales.herokuapp.com/",
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
    },


})

export const leadsAPI = {
    getLeads() {
        return instance.get("leads")
    },

    getLead(id:string) {
        return instance.get(`leads/${id}`)
    },

    getContacts () {
        return instance.get("contacts")
    },

    getContact (id: number) {
        return instance.get(`contacts/${id}`)
    },

    getPipelines () {
        return instance.get("pipelines")
    },

    getStatuses (id: number) {
        return instance.get(`statuses/${id}`)
    },

    getStatus (id: number, pipeline_id: number) {
        return instance.get(`pipelines/${pipeline_id}/statuses/${id}`)
    },
}