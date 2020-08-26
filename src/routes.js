import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Board from "./pages/Boards";
import Login from "./pages/Login";

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/login" exact component={Login} />
            <Route path="/board" component={Board} />
            <Route path="/dash" component={Dashboard} />
        </BrowserRouter>
    );
}
export default Routes;
