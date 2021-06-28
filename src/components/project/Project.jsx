import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Project = () => (
    <Section nopadding id="projects">
        <SectionDivider />

        <SectionTitle main>Projet en cours</SectionTitle>

        <GridContainer>
            { 
                projects.map(({ id, image, title, description, tags, source, visit }) => (
                    <BlogCard key={id}>
                        <Img src={image} />

                        <TitleContent>
                            <HeaderThree title>{title}</HeaderThree>
                            <Hr />
                        </TitleContent>

                        <CardInfo>{description}</CardInfo>

                        <div>
                            <TitleContent style={{marginTop: '2rem'}}>Technologies</TitleContent>
                            <TagList>
                                {
                                    tags.map((tag, index) => (
                                        <Tag key={index}>{tag}</Tag>
                                    ))
                                }
                            </TagList>
                        </div>

                        <UtilityList>
                            <ExternalLinks  href={visit}>Demo</ExternalLinks>
                            <ExternalLinks  href={source}>Source</ExternalLinks>
                        </UtilityList>
                    </BlogCard>
                ))
            }
        </GridContainer>
    </Section>
);

export default Project;
