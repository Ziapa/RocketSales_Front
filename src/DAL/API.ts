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
    }
}