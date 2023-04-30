import React from 'react';
import { FaGhost } from 'react-icons/fa';
import { Main } from './NotFoundPageStyles';
import { SectionSubText, SectionTitle } from '../../styles/GlobalComponents';
import Layout from '../../components/layout/LayoutContainer';

function NotFoundPage() {
  return (
    <Layout>
      <Main>
        <SectionTitle>
          4
          <span>
            <FaGhost />
          </span>
          4
        </SectionTitle>
        <SectionSubText>Désoler cette page ne corespond à rien</SectionSubText>
      </Main>
    </Layout>
  );
}

export default NotFoundPage;
