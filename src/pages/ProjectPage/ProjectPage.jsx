import React from 'react';
import { Layout } from '../../components/layout/LayoutContainer';
import Project from '../../components/project/Project';
import { projects } from '../../constants/projects';

const TITLE_PART = "Mes projets";

const ProjectPage = () => {
    return (
        <Layout>
            <Project titlePart={TITLE_PART} projects={projects} />
        </Layout>
    );
};

export default ProjectPage;