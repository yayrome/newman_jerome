import React from 'react';
import ContactForm from "../../components/contact/ContactForm";

/* eslint-disable react/prefer-stateless-function */
class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="home">
                <ContactForm title={"Create Contact"} />
            </div>
        );
    }
}

/* eslint-enable react/prefer-stateless-function */

export default Home;
