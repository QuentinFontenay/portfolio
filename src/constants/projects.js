import { SiCss3, SiReact, SiStyledComponents, SiShopify, SiGoogleads, SiFacebook, SiNetlify, SiWordpress, SiWoocommerce, SiFigma, SiFlutter, SiFirebase } from 'react-icons/si';


export const projects = [
    {
        title: 'Troc',
        description: "Application destiné au particulier souhaitant échanger un objet contre un autre objet équivalent à la même valeur. Ce projet est à l'état de conception pour l'instant plus d'informations à venir !",
        image: process.env.PUBLIC_URL + '/images/projects/image-projet4.png',
        alt: 'maquette du projet Troc',
        tags: [
            <SiFlutter fontSize="3rem" />,
            <SiFigma fontSize="3rem" />,
            <SiFirebase fontSize="3rem" />
        ],
        source: 'https://github.com/QuentinFontenay',
        visit: 'https://www.google.fr/',
        id: 0,
    },
    {
        title: 'Mon portfolio',
        description: "Portfolio réalisé à l'aide du framework React permettant de présenter les différents service que je peux vous proposer ainsi que mon experience.",
        image: process.env.PUBLIC_URL + '/images/projects/image-projet1.png',
        alt: "page d'accueil de mon portfolio",
        tags: [
            <SiReact fontSize="3rem" />,
            <SiStyledComponents fontSize="3rem" />,
            <SiCss3 fontSize="3rem" />,
            <SiNetlify fontSize="3rem" />
        ],
        source: 'https://github.com/QuentinFontenay/portfolio',
        visit: 'https://www.skyreast.com/',
        id: 1,
    },  
    {
        title: 'Skisra',
        description: "Skisra était une boutique spécialisé dans les équipement de barbecue. Je l'es développé à l'aide du CMS Shopify et j'ai pu aussi utiliser Google Ads et Facebook Ads afin de réaliser des publicités.",
        image: process.env.PUBLIC_URL + '/images/projects/image-projet3.png',
        alt: "page d'accueil du site Skisra",
        tags: [
            <SiShopify fontSize="3rem" />,
            <SiGoogleads fontSize="3rem" />,
            <SiFacebook fontSize="3rem" />
        ],
        source: 'https://github.com/QuentinFontenay',
        visit: 'https://www.skisra.com/',
        id: 2,
    },

    {
        title: 'Skyreast',
        description: "Skyreast était un site réalisé en collaboration avec un collégue qui était spécialisé dans la vente d'une peluche parlante pour les enfants. Elle a été développer à l'aide de Wordpress avec son extension WooCommerce.",
        image: process.env.PUBLIC_URL + '/images/projects/image-projet2.png',
        alt: "page d'accueil du site Skyreast",
        tags: [
            <SiWordpress fontSize="3rem" />,
            <SiGoogleads fontSize="3rem" />,
            <SiFacebook fontSize="3rem" />,
            <SiWoocommerce fontSize="3rem" />
        ],
        source: 'https://github.com/QuentinFontenay',
        visit: 'https://www.skyreast.com/',
        id: 3,
    },
];