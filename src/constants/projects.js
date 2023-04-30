import {
  SiCss3,
  SiReact,
  SiStyledcomponents,
  SiShopify,
  SiGoogleads,
  SiFacebook,
  SiNetlify,
  SiWordpress,
  SiWoocommerce,
  SiFigma,
  SiFlutter,
  SiFirebase,
} from 'react-icons/si';
import React from 'react';

const projects = [
  {
    title: 'Troc',
    description:
      "Application destinée au particulier souhaitant échanger un objet contre un autre objet équivalent à la même valeur. Ce projet est à l'état de conception pour l'instant plus d'informations à venir !",
    image: new URL(
      '../../public/images/projects/image-projet4.png',
      import.meta.url,
    ),
    alt: 'maquette du projet Troc',
    tags: [
      {
        icon: <SiFlutter fontSize="3rem" />,
        id: 0,
      },
      {
        icon: <SiFigma fontSize="3rem" />,
        id: 1,
      },
      {
        icon: <SiFirebase fontSize="3rem" />,
        id: 2,
      },
    ],
    source: '',
    visit: '',
    id: 0,
  },
  {
    title: 'Mon portfolio',
    description:
      "Portfolio réalisé à l'aide du framework React permettant de présenter les différents services que je peux vous proposer ainsi que mon expérience.",
    image: new URL(
      '../../public/images/projects/image-projet1.png',
      import.meta.url,
    ),
    alt: "page d'accueil de mon portfolio",
    tags: [
      {
        icon: <SiReact fontSize="3rem" />,
        id: 0,
      },
      {
        icon: <SiStyledcomponents fontSize="3rem" />,
        id: 1,
      },
      {
        icon: <SiCss3 fontSize="3rem" />,
        id: 2,
      },
      {
        icon: <SiNetlify fontSize="3rem" />,
        id: 3,
      },
    ],
    source: 'https://github.com/QuentinFontenay/portfolio',
    visit: 'https://quentin-fontenay.fr/',
    id: 1,
  },
  {
    title: 'Skisra',
    description:
      "Skisra était une boutique spécialisée dans les équipements de barbecue. Je l'ai développé à l'aide du CMS Shopify et j'ai pu aussi utiliser Google Ads et Facebook Ads afin de réaliser des publicités.",
    image: new URL(
      '../../public/images/projects/image-projet3.png',
      import.meta.url,
    ),
    alt: "page d'accueil du site Skisra",
    tags: [
      {
        icon: <SiShopify fontSize="3rem" />,
        id: 0,
      },
      {
        icon: <SiGoogleads fontSize="3rem" />,
        id: 1,
      },
      {
        icon: <SiFacebook fontSize="3rem" />,
        id: 2,
      },
    ],
    source: '',
    visit: 'https://www.skisra.com/',
    id: 2,
  },

  {
    title: 'Skyreast',
    description:
      "Skyreast était un site réalisé en collaboration avec un collégue qui était spécialisé dans la vente d'une peluche parlante pour les enfants. Elle a été développée à l'aide de Wordpress avec son extension WooCommerce.",
    image: new URL(
      '../../public/images/projects/image-projet2.png',
      import.meta.url,
    ),
    alt: "page d'accueil du site Skyreast",
    tags: [
      {
        icon: <SiWordpress fontSize="3rem" />,
        id: 0,
      },
      {
        icon: <SiGoogleads fontSize="3rem" />,
        id: 1,
      },
      {
        icon: <SiFacebook fontSize="3rem" />,
        id: 2,
      },
      {
        icon: <SiWoocommerce fontSize="3rem" />,
        id: 3,
      },
    ],
    source: '',
    visit: 'https://www.skyreast.com/',
    id: 3,
  },
];

export default projects;
