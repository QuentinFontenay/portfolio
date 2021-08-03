import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {
    HomePage,
    ContactPage,
    AboutMePage,
    ProjectPage,
    ProcessPage,
    NotFoundPage
} from "../pages/index";

const Router = () => (
    <BrowserRouter>
        <Route exact path="/" component={HomePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/about_me" component={AboutMePage} />
        <Route path="/projects" component={ProjectPage} />
        <Route path="/process" component={ProcessPage} />
        <Route path="*" component={NotFoundPage} />
    </BrowserRouter>
);

export default Router;