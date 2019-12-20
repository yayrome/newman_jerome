import React from "react"
import {useHistory} from "react-router-dom";

export default class ContactList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        };
    }

    goToContactForm(contact) {
        let history = useHistory();
        history.push({
            pathname: "/index",
            state: { contact: contact}
        });
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
                                <tr onClick={this.goToContactForm(obj)}>
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