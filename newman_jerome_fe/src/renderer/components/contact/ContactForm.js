import React from "react"
import AppDAO from "../../dao/dao";
import ContactRepository from "../../dao/contactDao";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone: ""
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
        console.log("back to contacts");
        console.log(e.target.id);
    }

    createContact(e) {
        e.preventDefault();
        const {firstName, lastName, email, phone} = this.state;
        // create new contact
        const dao = new AppDAO('./database.sqlite3');
        const projectRepo = new ContactRepository(dao);
        projectRepo.create(firstName, lastName, email, phone)
            .then(function(r){
                console.log(r);
            })
        console.log("create new contact");
    }

    deleteContact(e) {
        e.preventDefault();
        // delete contact
        console.log("delete contact");
        console.log(e.target.id);
    }

    render() {
        const {title} = this.props;

        return (
            <div className="app">
                <div className="row">
                    <div className="col-md-8 order-md-1">
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
                                    <button id="createButton" className="btn btn-primary float-right ml-1"
                                            onClick={this.createContact}>Create
                                    </button>
                                    {/*<button id="deleteButton" className="btn btn-danger float-right ml-1"*/}
                                    {/*        onClick={this.deleteContact}>Delete*/}
                                    {/*</button>*/}
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