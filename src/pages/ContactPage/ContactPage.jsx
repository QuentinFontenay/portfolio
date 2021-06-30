import React from 'react';
import FormContact from '../../components/formContact/FormContact';
import { Layout } from '../../components/layout/LayoutContainer';
import { Section } from '../../styles/GlobalComponents';

const ContactPage = () => {
    return (
        <Layout>
            <Section grid>
                <FormContact />
            </Section>
        </Layout>
    );
};

export default ContactPage;