import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Main } from "./page/Main";

ReactDOM.render(
    <BrowserRouter>
        <Route exact path="/" component={Main} />
        <Route path="main" component={Main} />
    </BrowserRouter>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
