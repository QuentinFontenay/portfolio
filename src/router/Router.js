import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/about_me" element={<AboutMePage />} />
        <Route exact path="/projects" element={<ProjectPage />} />
        <Route exact path="/process" element={<ProcessPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
