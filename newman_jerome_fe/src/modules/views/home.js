import React from 'react';
import ContactForm from "../../components/contact/ContactForm";

/* eslint-disable react/prefer-stateless-function */
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
        }
    }
    render() {
        let {firstName, lastName, email, phone} = this.state;

        return (
            <div id="home">
                <ContactForm />
            </div>
        );
    }
}

/* eslint-enable react/prefer-stateless-function */

export default Home;
