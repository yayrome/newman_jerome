import React from "react"
import {withRouter} from "react-router";
import {deleteContact, createContact, updateContact} from "../../modules/dao/contactDao";

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        const { id, firstName, lastName, email, phone } = this.props.location.state;
        this.state = {
            id: id || null, // this.props.location.state ? this.props.location.state.id : null,
            firstName: firstName, // this.props.firstName || "",
            lastName: lastName, //this.props.lastName || "",
            email: email, //this.props.email || "",
            phone: phone //this.props.phone || ""
        };

        this.backToContacts = this.backToContacts.bind(this);
        this.createContact = this.createContact.bind(this);
        this.updateContact = this.updateContact.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
        this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    }

    handleTextFieldChange(event) {
        const key = event.target.id;
        const value = event.target.value;

        let obj = {};
        obj[key] = value;
        this.setState(obj);
    }

    backToContacts(e) {
        e.preventDefault();
        console.log(this.props);
        const {history} = this.props;
        history.push("/");
    }

    createContact(e) {
        e.preventDefault();
        const {firstName, lastName, email, phone} = this.state;
        const obj = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone
        }
        // create new contact
        let contact;
        const {history} = this.props;

        createContact(obj).then(response => {
            console.log(history);
            console.log(response.data);
            history.push({pathname: "/index", state: response.data});

        });

    }

    updateContact(e) {
        e.preventDefault();
        const {history} = this.props;
        const {id, firstName, lastName, email, phone} = this.state;

        const obj = {
            id: id,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone
        }
        // create new contact
        updateContact(id, obj).then(response => {
            history.push({pathname: "/index", state: response.data});
        });
    }

    deleteContact(e) {
        e.preventDefault();
        const id = this.state.id;
        // delete contact
        console.log(id);
        deleteContact(id);

        const {history} = this.props;
        history.push("/");
    }

    render() {
        const {createAction, deleteAction, updateAction, title} = this.props;
        const {firstName, lastName, email, phone} = this.state;
        const disableFirstName = updateAction;

        return (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <div className="row">
                    <div className="col-md-12 order-md-1">
                        <h3>{title}</h3>
                        <form>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="firstName">First Name</label>
                                    <input id="firstName" type="text" className="form-control"
                                           disabled={disableFirstName}
                                           value={firstName}
                                           onChange={this.handleTextFieldChange}/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input id="lastName" type="text" className="form-control"
                                           value={lastName}
                                           onChange={this.handleTextFieldChange}/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email">Email</label>
                                <input id="email" className="form-control" type="text" placeholder="you@example.com"
                                       value={email}
                                       onChange={this.handleTextFieldChange}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone">Phone</label>
                                <input id="phone" type="text" className="form-control" placeholder="Phone Number"
                                       value={phone}
                                       onChange={this.handleTextFieldChange}/>
                            </div>
                            <div className="mb-3">
                                <div className="clearfix">
                                    {createAction &&
                                    <button id="createButton" className="btn btn-primary float-right ml-1"
                                            onClick={this.createContact}>Create
                                    </button>
                                    }

                                    {updateAction &&
                                    <button id="createButton" className="btn btn-primary float-right ml-1"
                                            onClick={this.updateContact}>Update
                                    </button>
                                    }

                                    {deleteAction &&
                                    <button id="deleteButton" className="btn btn-danger float-right ml-1"
                                            onClick={this.deleteContact}>Delete
                                    </button>
                                    }


                                    <button id="backButton" className="btn btn-secondary float-right"
                                            onClick={this.backToContacts}>Back
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ContactForm);