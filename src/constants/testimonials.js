import React from 'react';

let profileImg1 = new URL('../../public/images/testimonials/avatar-1.svg', import.meta.url)
let profileImg2 = new URL('../../public/images/testimonials/avatar-1.svg', import.meta.url)

export const TESTIMONIALS = [{
    text: "“ Travailler avec Quentin a été un plaisir. Il était professionnel et s'est investi dans le projet du début à la fin. Je le recommanderais à toute personne cherchant de l'aide pour ses projets web. ”",
    name: 'Gaëtan Fauconnier',
    position: 'Développeur FullStack',
    company: 'Sodius',
    avatar: profileImg1,
    alt: "photo de Gaëtan Fauconnier",
    id: 1234567,
},
{
    text: "“ Quentin a été un élément important de mon équipe et j'apprécie ses efforts et le travail qu'il a effectué sur nos projets de développement web. Sa ponctualité, son professionnalisme ”",
    name: 'Guillaume Orain',
    position: 'Lead Développeur Symfony',
    company: 'SDVI',
    avatar: profileImg2,
    alt: "photo de Guillaume Orain",
    id: 2345678,
}
]