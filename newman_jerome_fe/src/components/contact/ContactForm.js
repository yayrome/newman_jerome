import React from "react"

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
        console.log(key);
        console.log(value);
        this.setState({key, value})
    }

    createContact() {
        // create new contact
    }

    deleteContact() {
        // delete contact
    }

    render() {
        const { title } = this.props;
        let { firstName, lastName, email, phone } = this.state;

        return (
            <div className = "app" >
                <h1>{title}</h1>
                <div>
                    <input id="firstName" type="text" onChange={(e) => this.handleTextFieldChange(e)}/>
                    <input id="lastName" type="text"  onChange={(e) => this.handleTextFieldChange(e)} />
                    <input id="email" type="text"  onChange={(e) => this.handleTextFieldChange(e)}/>
                    <input id="phone" type="text"  onChange={(e) => this.handleTextFieldChange(e)}/>
                    <div>
                        <button id="createButton" onClick={this.createContact}>Create</button>
                        <button id="deleteButton" onClick={this.deleteContact}>Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}