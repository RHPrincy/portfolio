import { Icons } from '@/components/icons'

type Config = {
    name: string
    avatar: string
    title: string
    siteUrl: string
    socials: {
        name: string
        url: string
        icon: keyof typeof Icons
    }[]
    getInTouch?: string
    description: string | JSX.Element
    descriptionRaw: string
    projects: {
        name: string
        icon?: keyof typeof Icons
        image?: string
        description: string
        url: string
        tags: {
            name: string
            icon: keyof typeof Icons
        }[]
        github?: string
        featured: boolean
        testimonial?: string
    }[]
}

export const CONFIG: Config = {
    name: 'Princy H. Randimbimanana',
    avatar: '/images/profile.jpg',
    title: 'IT Student',
    siteUrl: '#',
    socials: [
        {
            name: 'GitHub',
            url: 'https://github.com/RHPrincy',
            icon: 'github',
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/randimbimanana-princy-52b0a9257/',
            icon: 'linkedin',
        },
        {
            name: 'Facebook',
            url: 'https://web.facebook.com/Princy.Randimbimanana',
            icon: 'facebook',
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/princy_rh/',
            icon: 'instagram',
        },
        {
            name: 'WhatsApp',
            url: 'https://wa.me/+261375020345',
            icon: 'whatsapp',
        },
        {
            name: 'X',
            url: 'https://x.com/princy_rh',
            icon: 'x',
        },
        {
            name: 'Email',
            url: 'mailto:randimbimananaprincy@gmail.com',
            icon: 'email',
        },
    ],
    getInTouch: 'Buy me a coffee',
    description: (
        <> Welcome, I am <b>Princy RANDIMBIMANANA</b> 👋 <br/> 
        A Computer Science student at the <b>MISA (Mathematics, Computer science and applied statistics)</b>, University of Antananarivo <br />
        </>
    ),
    descriptionRaw: `IT Student`,
    projects: [
        {
            name: 'Portfolio Project',
            image: '/images/portfolio.png',
            description:
                'This is my portfolio project. It is a personal website that showcases my work, skills, and experience.',
            url: 'https://rhprincy.netlify.app/',
            tags: [
                { name: 'React', icon: 'react' },
                { name: 'TypeScript', icon: 'typescript' },
                { name: 'Tailwind CSS', icon: 'tailwindcss' },
                { name: 'Next', icon: 'next' },
            ],
            featured: true,
        },
        // {
        //     name: 'Onready',
        //     image: '/images/onready.png',
        //     description:
        //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolore, hic neque quibusdam provident accusamus quo quidem, ratione obcaecati explicabo aliquid, nobis laboriosam optio recusandae doloribus? Vel quam reiciendis facilis?.',
        //     url: '#',
        //     tags: [
        //         { name: 'React', icon: 'react' },
        //         { name: 'TypeScript', icon: 'typescript' },
        //         { name: 'Tailwind CSS', icon: 'tailwindcss' },
        //     ],
        //     featured: true,
        //     testimonial:
        //         'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam aperiam, voluptatem reiciendis tempore velit accusamus rerum eligendi et voluptatibus ex vel ad provident voluptate quasi debitis. Doloribus sunt temporibus voluptatibus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam aperiam, voluptatem reiciendis tempore velit accusamus rerum eligendi et voluptatibus ex vel ad provident voluptate quasi debitis. Doloribus sunt temporibus voluptatibus!',
        // },
        // {
        //     name: 'Onready',
        //     image: '/images/onready.png',
        //     description:
        //         'lorem ipsum',
        //     url: '#',
        //     tags: [
        //         { name: 'TypeScript', icon: 'typescript' },
        //         { name: 'Tailwind CSS', icon: 'tailwindcss' },
        //         { name: 'Next', icon: 'next' },
        //     ],
        //     featured: true,
        //     github: 'https://github.com/#',
        // },
    ],
}