import emoji from "react-easy-emoji";

export const greetings = {
  name: "Dabeer Ahmad",
  title: "Welcome.",
  description:
    "Highly seasoned Web Developer with over a decade of expertise in JavaScript, React.js, Next.js, Node.js, Express.js, MongoDB, Redux, and more. A dynamic problem solver, I've crafted scalable solutions and collaborated effectively in cross-functional teams. Proficient in Nodemailer, TypeScript, and foundational HTML, CSS, and JavaScript, I'm passionate about delivering exceptional user-centric web experiences, adapting swiftly to emerging technologies, and constantly evolving in this ever-changing tech landscape",
  resumeLink: "./.pdf",
};

export const openSource = {
  githubUserName: "Danyalsmit",
};

export const contact = {};

export const socialLinks = {
  // url: 'https://www.ahsankhan.vercel.app',
  github: "https://github.com/Danyalsmit",
  linkedin: "https://linkedin.com/in/danyal-khan-896696278",
  // discord: "https://www.hackerrank.com/Bglance68",
  // blog: "https://brendanglancy.github.io/",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY SOFTWARE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Software Development",
      lottieAnimationFile: "/lottie/webdev.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications."
        ),
        emoji(
          "⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks."
        ),
        emoji(
          "⚡  Craft robust and efficient back-end solutions, ensuring seamless data processing and system functionality."
        ),
      ],
      softwareSkills: [
        {
          skillName: "typescript",
          fontAwesomeClassname: "logos:typescript-icon",
        },
        {
          skillName: "javascript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "reactjs",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "styledComponents",
          fontAwesomeClassname: "skill-icons:styledcomponents",
        },
        {
          skillName: "nodejs",
          fontAwesomeClassname: "logos:nodejs-icon",
        },
        {
          skillName: "expressjs",
          fontAwesomeClassname: "logos:express",
        },
        {
          skillName: "npm",
          fontAwesomeClassname: "logos:npm-icon",
        },
        {
          skillName: "sass",
          fontAwesomeClassname: "logos:sass",
        },
        {
          skillName: "Progressive Web App",
          fontAwesomeClassname: "logos:pwa",
        },
        {
          skillName: "yarn",
          fontAwesomeClassname: "logos:yarn",
        },
        {
          skillName: "MySQL-icon",
          fontAwesomeClassname: "logos:mysql-icon",
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "logos:vercel-icon",
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "logos:nextjs-icon",
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "logos:mongodb-icon",
        },
        {
          skillName: "github",
          fontAwesomeClassname: "logos:github-icon",
        },
      ],
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Programming",
  },
  {
    Stack: "Frontend", //Insert stack or technology you have experience in
  },
  {
    Stack: "Backend",
  },
];

export const educationInfo = [
  {
    schoolName: "Allama Iqbal Government Boys Science College",
    subHeader: "Pree Engineer",
    duration: "2018 - 2020",
    grade: "C",
    descBullets: [
      "The Pre-Engineering program equips students with a foundational understanding of engineering principles, mathematics, and problem-solving skills, preparing them for future specialized engineering studies at the university level.",
    ],
    github: "https://github.com/Danyalsmit",
  },
  {
    schoolName:
      "Federal Urdu University of Arts, Science & Technology, Karachi.",
    subHeader: "Bachelor's Degree in Computer Science",
    duration: "2022 - Present",
    descBullets: [
      `Currently studying for a Bachelor of Science in Computer Science (BSCS), I'm gaining skills that are useful in various industries. I'm good at solving problems and analyzing situations, ready to handle complex challenges in different workplaces. I'm also skilled in programming languages, able to create innovative software solutions and contribute to technological advancements.`,
    ],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Xtecsoft",
    companylogo: "/xtecsoft.jpeg",
    date: "Jan 2023 – Feb 2024",
    descBullets: [
      `Led the development of a high-performance eCommerce website using React,
       Next.js, and JavaScript. Emphasized user-centric features such as
       shopping pages and cart systems to enhance sales growth.`,
      `Utilized Node.js and JavaScript for back-end development. Deployed RESTful
       APIs to ensure seamless integration and optimal performance in the
       application's architecture.`,
      `Strategically migrated an older JavaScript project to TypeScript. Integrated
       technologies for specific backend services, leveraging advanced ES6+ features
       in React and Angular projects.`,
      `Resulted in improved code scalability and maintainability.`,
      `Implemented a CI/CD pipeline using GitHub Actions.`,
      `Incorporated build processes into the pipeline to streamline deployments and
       increase team efficiency.`,
      `Actively mentored and managed a team of three junior developers. Provided
       guidance and support in technical and project management aspects. Fostered a
       collaborative and skill-enhancing environment.`,
    ],
  },
  {
    role: "Trainee",
    company: "Asra Soft",
    companylogo: "/favicon 2.png",
    date: "Oct 2022 - Nov 2022",
    descBullets: [
      `Acquired proficiency in HTML, CSS, and JavaScript through self-directed learning and online resources.`,
      `Successfully completed an immersive web development boot camp, gaining hands-on experience with HTML, CSS, and JavaScript.`,
    ],
  },
];

export const projects = [
  {
    name: "Star Map",
    desc: "An online interactive planetarium application to explore the night sky and find constellations, planets, asteroids and other celestial objects visible from ... ",
    link: "https://frame-customizer.vercel.app/customizer/star",
    tags: ["MUI", "CICD", "React-Router", "JavaScript", "React", "API"],
  },
  {
    name: "City Map",
    desc: "In this map, the white color represents the roads in the city, the gray color represents the buildings and apartments, the green color represents the green ...",
    link: "https://frame-customizer.vercel.app/customizer/map",
    tags: [
      "MUI",
      "CICD",
      "React-Router",
      "JavaScript",
      "React",
      "API",
      "Leaflet",
      "MapBox",
    ],
  },
];

export const feedbacks = [
  // {
  //   name: "Austin Coontz",
  //   feedback:
  //     "I was trying to make a website that is blazingly fast. I had no idea where to start. What did I do? Called my friend Brendan. I had no Idea what i Was doing! He fixed it. Website? Fast. Blazingly. Done.",
  // },
  // {
  //   name: "Andrew Rose",
  //   feedback:
  //     "Brendan Glancy, the website developer I worked with was exceptional. He took the time to understand my needs and goals, and created a website that not only met, but exceeded my expectations. Their communication was clear and timely throughout the process, and I would highly recommend them to anyone in need of an exceptional website.",
  // },
];

export const seoData = {
  title: "Dabeer's Portfolio",
  description: "Full Stack Developer showcasing my work and experience.",
  image: "https://avatars.githubusercontent.com/u/61941978?v=4",
  url: "https://www.xtecsoft.com/",
  keywords: [
    "Dabeer Ahmed",
    "Dabeer",
    "Dabeer",
    "Portfolio",
    "Full Stack Developer",
    "Open to work",
    "Ronis Hair Forum",
    "Developer",
    "web developer",
    "Empyrial",
    "united states",
    "developer",
    "Canton Regional Chamber of Commerce",
    "university of lahore",
    "carol stream IL",
    "Up Work",
    "lead developer open to work",
  ],
};
