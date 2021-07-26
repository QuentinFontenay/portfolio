import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {
    HomePage,
    ContactPage,
    AboutMePage,
    ProjectPage,
} from "../pages/index";

const Router = () => (
    <BrowserRouter>
        <Route exact path="/" component={HomePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/about_me" component={AboutMePage} />
        <Route path="/project" component={ProjectPage} />
    </BrowserRouter>
);

export default Router;