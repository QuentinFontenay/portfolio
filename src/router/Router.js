import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {
    HomePage,
    ContactPage,
    AboutMePage,
} from "../pages/index";

const Router = () => (
    <BrowserRouter>
        <Route exact path="/" component={HomePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/about_me" component={AboutMePage} />
    </BrowserRouter>
);

export default Router;