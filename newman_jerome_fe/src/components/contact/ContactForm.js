import React from "react"
import {useHistory} from "react-router-dom";
import contactDao from "../../modules/dao/contactDao";

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
        };

        this.createContact = this.createContact.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
        this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    }

    handleTextFieldChange(event) {
        const key = event.target.id;
        const value = event.target.value;

        this.setState({key, value})
    }

    backToContacts(e) {
        e.preventDefault();
        let history = useHistory();
        history.push("/");
    }

    createContact(e) {
        e.preventDefault();
        const {firstName, lastName, email, phone} = this.state;
        // create new contact
        const contactDao = new ContactDao();
        const response = contactDao.createContact(e);

        let history = useHistory();
        history.push("/");
    }

    deleteContact(e) {
        e.preventDefault();
        // delete contact
        console.log("delete contact");
        console.log(e.target.id);
        let history = useHistory();
        history.push("/");
    }

    render() {
        const {createAction, deleteAction, updateAction, title} = this.props;

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
                                           onChange={(e) => this.handleTextFieldChange(e)}/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input id="lastName" type="text" className="form-control"
                                           onChange={(e) => this.handleTextFieldChange(e)}/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email">Email</label>
                                <input id="email" className="form-control" type="text" placeholder="you@example.com"
                                       onChange={(e) => this.handleTextFieldChange(e)}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone">Phone</label>
                                <input id="phone" type="text" className="form-control" placeholder="Phone Number"
                                       onChange={(e) => this.handleTextFieldChange(e)}/>
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
                                            onClick={this.createContact}>Create
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