import axios from "axios";

const url = "http://localhost:8080/api/v1/contacts";
const config = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Max-Age': 100,
        'Content-Type': 'application/json'
    }
};



export async function getOneContactById(id) {
    let response = await axios.get(`${url}/${id}`);

    return response;
}

export async function getAllContacts() {
    let response = await axios.get(url);
    return response;
}

export async function createContact(data) {
    let response = await axios.post(url, data, config)

    return response;
}

export async function updateContact(id, data) {
    let response = await axios.put(`${url}/${id}`, data, config)

    return response;
}

export async function deleteContact(id) {
    let response = await axios.delete(`${url}/${id}`)
    return response;
}

export async function searchContacts(data) {
    let response = await axios.post(`${url}/search`, data, config);

    return response;
}
 export default {
    getOneContactById,
    getAllContacts,
     createContact,
     updateContact,
    deleteContact,
    searchContacts
 }