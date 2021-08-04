import React from 'react';
import { Main } from './NotFoundPageStyles';
import { FaGhost } from "react-icons/fa"
import { SectionSubText, SectionTitle } from '../../styles/GlobalComponents';
import { Layout } from '../../components/layout/LayoutContainer';

const NotFoundPage = () => {
    return (
        <Layout>
            <Main>
                <SectionTitle>4<span><FaGhost></FaGhost></span>4</SectionTitle>
                <SectionSubText>Désoler cette page ne corespond à rien</SectionSubText>
            </Main>
        </Layout>
    );
};

export default NotFoundPage;