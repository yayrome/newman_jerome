import axios from "axios";

export default class ContactDao {
    getOneContactById(id) {
        axios.get(`localhost:8080/contacts/${id}`)
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
        axios.get(`localhost:8080/contacts`)
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
        axios.post(`localhost:8080/contacts`, data)
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
        axios.put(`localhost:8080/contacts/${id}`, data)
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
        axios.delete(`$localhost:8080/contacts/${id}`)
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