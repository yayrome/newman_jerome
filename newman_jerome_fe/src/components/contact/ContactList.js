import React from "react"
import { withRouter } from "react-router";

class ContactList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        };

        this.goToCreateContact = this.goToCreateContact.bind(this);
    }



    goToContactForm(contact) {
        // let history = useHistory();
        // history.push({
        //     pathname: "/index",
        //     state: { contact: contact}
        // });
    }

    goToCreateContact(e) {
        e.preventDefault();
        const { history } = this.props;
        console.log(history);
            history.push("/create");

    }

    render() {
        const {title} = this.props;
        const {list} = this.state;

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
                                            <input type="text" className="form-control" placeholder="First name"/>
                                        </div>
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="Last name"/>
                                        </div>
                                        <div>
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
                            {list.map(obj => {
                                <tr onClick={this.goToContactForm}>
                                    <td>{obj.id}</td>
                                    <td>{obj.firstName}</td>
                                    <td>{obj.lastName}</td>
                                </tr>
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ContactList);