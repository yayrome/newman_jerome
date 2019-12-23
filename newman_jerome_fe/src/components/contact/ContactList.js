import React from "react"
import {withRouter} from "react-router";
import {getOneContactById, searchContacts} from "../../modules/dao/contactDao";


class ContactList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            list: [],
        };

        this.goToContactForm = this.goToContactForm.bind(this);
        this.goToCreateContact = this.goToCreateContact.bind(this);
        this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
        this.searchContacts = this.searchContacts.bind(this);
    }


    goToContactForm(id) {
        const {history} = this.props;

        getOneContactById(id).then(response =>{
            history.push({
                pathname: "/index",
                state: response.data
            });
        });


    }

    searchContacts(e) {
        e.preventDefault();
        const {firstName, lastName} = this.state;
        // const contactDao = new ContactDao();

        const obj = {
            firstName: firstName,
            lastName: lastName
        };

        searchContacts(obj).then(response => (this.setState({list: response.data})));
    }

    goToCreateContact(e) {
        e.preventDefault();
        const {history} = this.props;
        history.push({
            pathname: "/create",
            state: {}
        });

    }

    handleTextFieldChange(e) {
        const key = e.target.id;
        const value = e.target.value;

        let obj = {};
        obj[key] = value;
        this.setState(obj);
    }

    render() {
        const {title} = this.props;
        const {firstName, lastName, list} = this.state;

        return (
            <div>
                <div className="row">
                    <div className="col-md-12 order-md-1">
                        <h3>{title}</h3>
                        <br/>
                        <div className="row">
                            <div className="mb-2 ml-3">
                                <form>
                                    <div className="row">
                                        <div className="col">
                                            <input id="firstName" type="text" className="form-control"
                                                   placeholder="First name"
                                                   onChange={this.handleTextFieldChange} value={firstName}/>
                                        </div>
                                        <div className="col">
                                            <input id="lastName" type="text" className="form-control"
                                                   placeholder="Last name"
                                                   onChange={this.handleTextFieldChange} value={lastName}/>
                                        </div>
                                        <div>
                                            <button id="searchButton" className="btn btn-secondary ml-1"
                                                    onClick={this.searchContacts}>Search
                                            </button>
                                            <button id="createButton" className="btn btn-primary ml-1"
                                                    onClick={this.goToCreateContact}>Create
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                            </tr>
                            </thead>
                            <tbody>
                            {list.map(function(obj) {
                                return (
                                    <tr id={obj.id} onClick={() => this.goToContactForm(obj.id)}>
                                        <td>{obj.id}</td>
                                        <td>{obj.firstName}</td>
                                        <td>{obj.lastName}</td>
                                    </tr>
                                );
                            }.bind(this))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ContactList);