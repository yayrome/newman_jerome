import axios from "axios";

export default class ContactDao {
    getOneContactById(id) {
        axios.get(`/contacts/${id}`)
            .then(function (response) {
                // handle success
                console.log(response);
                return response.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                return;
            })
    }

    getAllContacts() {
        axios.get(`/contacts`)
            .then(function (response) {
                // handle success
                console.log(response);
                return response.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                return;
            })
    }

    createContact(data) {
        axios.post(`/contacts`,{...data})
            .then(function (response) {
                // handle success
                console.log(response);
                return response.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                return;
            })
    }

    updateContact(id, data) {
        axios.put(`/contacts/${id}`,{...data})
            .then(function (response) {
                // handle success
                console.log(response);
                return response.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                return;
            })
    }

    deleteContact(id) {
        axios.delete(`/contacts/${id}`)
            .then(function (response) {
                // handle success
                console.log(response);
                return response.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                return;
            })
    }
}