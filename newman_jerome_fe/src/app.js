import React from "react"
import {
    Route,
    Switch,
} from "react-router-dom";

import ContactForm from "./components/contact/ContactForm";
import ContactList from "./components/contact/ContactList";
import ErrorBoundary from "./modules/ErrorBoundary";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone: ""
        }

        this.createContact = this.createContact.bind(this);
        this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    }

    handleTextFieldChange(event) {
        const key = event.target.id;
        const value = event.target.value;

        this.setState({key, value});
    }

    createContact() {
        // create new contact
    }

    render() {

        return (
            <ErrorBoundary>
                    <main className="container">
                        <div>
                            <Switch>
                                <Route exact path="/"
                                       render={(props) => <ContactList {...props} title={"Contacts"}/>}/>
                                <Route path="/index"
                                       render={(props) => <ContactForm {...props} disableFirst={true} updateAction={true} deleteAction={true}
                                                                       title={"Contact Form"}/>}/>
                                <Route path="/create"
                                       render={(props) => <ContactForm {...props} createAction={true}
                                                                       title={"Create Contact"}/>}/>
                                <Route render={() => (<div> Sorry, this page does not exist. </div>)}/>
                            </Switch>
                        </div>
                    </main>
            </ErrorBoundary>
        );
    }
}