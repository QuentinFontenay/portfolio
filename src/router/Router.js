import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  HomePage,
  ContactPage,
  AboutMePage,
  ProjectPage,
  ProcessPage,
  NotFoundPage,
} from '../pages/index';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/about_me" component={AboutMePage} />
        <Route exact path="/projects" component={ProjectPage} />
        <Route exact path="/process" component={ProcessPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
