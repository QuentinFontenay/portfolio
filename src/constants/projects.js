import { FaSass } from 'react-icons/fa';
import { SiCss3, SiMaterialUi, SiMongodb, SiReact, SiRedux, SiSocketDotIo, SiTailwindcss } from 'react-icons/si';


export const projects = [
    {
        title: 'viluShop',
        description: "Using React and CSS libraries such as TailwindCSS, Material UI to make an E-commerce web app. User can search, choose products into cart and pay via fake Paypal API.",
        image: process.env.PUBLIC_URL + '/images/image_projet.png',
        tags: [
            <SiReact fontSize="4rem" color="#79d8f7" />, 
            <SiTailwindcss fontSize="4rem" color="#07b0ce" />, 
            <SiMaterialUi fontSize="4rem" color="#00aaf7" />, 
            <SiMongodb fontSize="4rem" color="#00a540" />
        ],
        source: 'https://github.com/ttnguyen115/vilushopDemo',
        visit: 'https://vilushop.herokuapp.com/',
        id: 0,
    },

    {
        title: 'jGram',
        description:"jGram - a clone social network based on Instagram. Users can upload and interact with posts, follow/unfollow other users, edit profile and realtime message.",
        image: '/images/jgram.JPG',
        tags: [
            <SiReact fontSize="4rem" color="#79d8f7" />, 
            <SiRedux fontSize="4rem" color="#7248b6" />, 
            <SiTailwindcss fontSize="4rem" color="#07b0ce" />, 
            <SiSocketDotIo fontSize="4rem" />
        ],
        source: 'https://github.com/ttnguyen115/jGram_v2',
        visit: 'http://jgramv2.herokuapp.com/',
        id: 1,
    },

    {
        title: 'CountryFlix',
        description: "This website using Nextjs and CSS3 in order to search and check general information about every countries around the world based on a free updated API.",
        image: '/images/countryflix.JPG',
        tags: [
            <span className="iconify" data-icon="logos-nextjs" data-inline="false" style={{fontSize: '4rem', filter: 'invert(1)'}}></span>, 
            <SiCss3 fontSize="4rem" color="#2449d8" />
        ],
        source: 'https://github.com/ttnguyen115/CountryFlix',
        visit: 'https://countryflix.vercel.app/',
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