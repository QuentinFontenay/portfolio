import React from 'react';
import { ImageHero, Figure } from './HeroImageStyles';

const HeroImage = (props) => (
    <Figure>
        <ImageHero src={process.env.PUBLIC_URL + '/images/heroProfile.jpg'} alt="Fontenay Quentin wearing glasses"/>
    </Figure>
);

export default HeroImage;