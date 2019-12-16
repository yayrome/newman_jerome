import React from "react";
import ReactDom from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";

// import {Provider} from "react-redux";
// import store from "./redux/store";

import App from "./app";

ReactDom.render(
    <Router>
        <App />
    </Router>, document.getElementById("root")
);