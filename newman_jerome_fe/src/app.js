import React from "react"
import {
    Route,
    Switch,
} from "react-router-dom";

import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware,
} from "redux";
import {Provider} from "react-redux";
// import { routerMiddleware } from 'react-router-redux'
import {ConnectedRouter, connectRouter} from 'connected-react-router'
import {createBrowserHistory} from "history"
// import createHistory from "history/createBrowserHistory";
import reducers from "./redux/reducers/index";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Create a history of your choosing (we"re using a browser history in this case)
const history = createBrowserHistory();

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
/* eslint-disable no-underscore-dangle */
const store = createStore(
    combineReducers({
        ...reducers,
        router: connectRouter(history),
    }),
    composeEnhancer(
        applyMiddleware(
            // routerMiddleware(history), // for dispatching history actions
            // ... other middlewares ...
        ),
    ),
);
import Home from "./modules/views/home";
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

                <Provider store={store}>
                    { /* ConnectedRouter will use the store from Provider automatically */}
                    {/*//  <ConnectedRouter history={history}>*/}
                    <main className="container">
                        <div>
                            <Switch>
                                <Route exact path="/"
                                       render={(props) => <ContactList title={"Contacts"}/>}/>
                                <Route path="/index"
                                       render={(props) => <ContactForm updateAction={true} deleteAction={true}
                                                                       title={"Contact Form"}/>}/>
                                <Route path="/create"
                                       render={(props) => <ContactForm createAction={true}
                                                                       title={"Create Contact"}/>}/>
                                <Route render={() => (<div> Sorry, this page does not exist. </div>)}/>
                            </Switch>
                        </div>
                    </main>
                    {/*</ConnectedRouter>*/}
                </Provider>
            </ErrorBoundary>
        );
    }
}