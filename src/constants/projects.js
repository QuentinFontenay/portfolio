import { FaSass } from 'react-icons/fa';
import { SiCss3, SiMaterialUi, SiReact, SiRedux, SiStyledComponents, SiShopify, SiGoogleads, SiFacebook } from 'react-icons/si';


export const projects = [
    {
        title: 'viluShop',
        description: "Using React and CSS libraries such as TailwindCSS, Material UI to make an E-commerce web app. User can search, choose products into cart and pay via fake Paypal API.",
        image: process.env.PUBLIC_URL + '/images/projects/image_projet.png',
        // tags: ["react", "styled-component", "node-js"],
        tags: [
            <SiReact fontSize="3rem" color="#79d8f7" />,
            <SiStyledComponents fontSize="3rem" color="#7248b6" />,
            <SiCss3 fontSize="3rem" color="#07b0ce" />,
        ],
        source: 'https://github.com/ttnguyen115/vilushopDemo',
        visit: 'https://vilushop.herokuapp.com/',
        id: 0,
    },

    {
        title: 'Skisra',
        description: "jGram - a clone social network based on Instagram. Users can upload and interact with posts, follow/unfollow other users, edit profile and realtime message.",
        image: process.env.PUBLIC_URL + '/images/projects/image-projet3.png',
        tags: [
            <SiShopify fontSize="3rem" />,
            <SiGoogleads fontSize="3rem" />,
            <SiFacebook fontSize="3rem" />
        ],
        source: 'https://github.com/QuentinFontenay',
        visit: 'https://www.skisra.com/',
        id: 1,
    },

    {
        title: 'Skyreast',
        description: "This website using Nextjs and CSS3 in order to search and check general information about every countries around the world based on a free updated API.",
        image: process.env.PUBLIC_URL + '/images/projects/image-projet2.png',
        tags: [
            <SiShopify fontSize="3rem" />,
            <SiGoogleads fontSize="3rem" />,
            <SiFacebook fontSize="3rem" />
        ],
        source: 'https://github.com/QuentinFontenay',
        visit: 'https://www.skyreast.com/',
        id: 2,
    },

    {
        title: 'JettFlix',
        description: "Based on everyday updated free API from IMDb, users can search, filter, watch trailers and check out detail information about newest movies, TV series.",
        image: '/images/jettflix.JPG',
        tags: [
            <SiReact fontSize="4rem" color="#79d8f7" />,
            <SiRedux fontSize="4rem" color="#7248b6" />,
            <FaSass fontSize="4rem" color="#c36291" />,
            <SiMaterialUi fontSize="4rem" color="#00aaf7" />
        ],
        source: 'https://github.com/ttnguyen115/jettflix',
        visit: 'https://jettflix.vercel.app/',
        id: 3,
    },
];

export const TimeLineData = [
    { year: '7/2018', text: 'Graduated from high school.', },
    { year: '11/2018', text: 'Started learning computer programming in Seneca College (Canada).', },
    { year: '4/2020', text: 'Shared the first big projects - viluShop.', },
    { year: '4/2021', text: 'Graduated from my College and started to improve my careers.', },
];