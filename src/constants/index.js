import { mobile,backend,creator,web,javascript,typescript,html,css,reactjs,redux,tailwind,nodejs,mongodb,git,figma,meta,shopify,carrent,jobit,tracking,tripguide,threejs,tourse, php, wordpress,} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "DevOp Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "North JS Tech",
    icon: reactjs,
    iconBg: "#383E56",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "MERN Stack Developer",
    company_name: "Shahi-Dewan",
    icon: nodejs,
    iconBg: "#E6DEDD",
    points: [
      "Developing and maintaining Web applications and Desktop application  using React ,node and electron.js  other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality and deployed.",
      "In this application provides a set of reusable UI components that map to native UI elements",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Shahi-Dewan",
    icon: mobile,
    iconBg: "#E6DEDD",
    points: [
      "Developing and maintaining mobile applications using React-Native and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "React Native provides a set of reusable UI components that map to native UI elements",
      " making it easier to create a consistent UI across platforms.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Intellectual Rush",
    icon: wordpress,
    iconBg: "#383E56",

    points: [
      "Developing and maintaining E-commerce Website using Wordpress and PHP.",
      "Collaborating with cross-functional teams including designers,  and other developers to create high-quality ",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers and clients.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "K2peck Technology",
    icon: php,
    iconBg: "#E6DEDD",
    points: [
      "Developing and maintaining web applications using PHP & MySql  and other related technologies.",
      "Collaborating with cross-functional teams including designers, product manage and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "E-commerce store",
    description:
      "Web-based platform that allows users to search, shopping product and manage Point of sale from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/mehboob431/E-commerse",
  },
  {
    name: "POS & Inventory",
    description:
      "Web & Mobile and  Desktop application  that enables users,to  allowing customers to place orders directly from their table without needing a waiter, improving efficiency and customer experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/mehboob431/Project-Shahi-Dewan",
    web_link:"https://shahidewan.com/",
  },
  {
    name: "Hussan Sadpara Treks & Tours",
    description:
     "This website offers adventure and cultural tours in Pakistan’s mountains, focusing on trekking, history, and eco-friendly tourism.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "Mysql",
        color: "pink-text-gradient",
      },
      {
        name: "bootstep",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tracking,
    // source_code_link: "https://github.com/",
    web_link:"http://www.hassansadparatreksandtours.com/"
  },
  {
    name: "Intellectual Rush",
    description:
      "This Digital Marketing Agency provide, specializing in SEO, PPC, social media marketing, E-commerce service's, web design & development , and content marketing. They help businesses enhance online visibility, drive engagement.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    // source_code_link: "https://github.com/",
    web_link:"https://intellectualrush.com/"
  },
  {
    name: "Tours Website",
    description:
      "Ilyas Skardu Tours specializes in curated travel experiences in Gilgit-Baltistan, offering packages to stunning destinations like Hunza, Skardu, and Khaplu. With options for both road and air travel, they provide personalized service and comfortable accommodations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tourse,
    source_code_link: "https://github.com/",

    web_link: "https://ilyasskardutours.com/",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
