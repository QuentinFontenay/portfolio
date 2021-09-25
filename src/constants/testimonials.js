let profileImg1 = process.env.PUBLIC_URL + '/images/testimonials/image-tanya.jpeg'
let profileImg2 = process.env.PUBLIC_URL + '/images/testimonials/image-john.jpeg'

export const TESTIMONIALS = [{
    text: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
    name: 'Tanya Sinclair',
    position: 'UX Engineer',
    company: 'SDVI',
    avatar: profileImg1,
    alt: "photo de Tanya Sinclair",
    id: 1234567,
},
{
    text: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
    name: 'John Tarkpor',
    position: 'Junior Front-end Developer',
    company: 'SDVI',
    avatar: profileImg2,
    alt: "photo de John Tarkpor",
    id: 2345678,
},
// {
//     text: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
//     name: 'Guillaume Orain',
//     position: 'Lead Symfony Developpeur',
//     company: 'SDVI',
//     avatar: profileImg2,
//     id: 45678910,
// },
// {
//     quote: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
//     name: 'Tanya Sinclair',
//     title: 'UX Engineer',
//     photo: profileImg1,
//     id: 3456789,
// },
]