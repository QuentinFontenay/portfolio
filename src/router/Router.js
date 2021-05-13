import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {
    HomePage,
    ContactPage,
} from "../pages/index";

const Router = () => (
    <BrowserRouter>
        <Route exact path="/" component={HomePage} />
        <Route path="/contact" component={ContactPage} />
    </BrowserRouter>
);

export default Router;