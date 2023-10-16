import { v4 as uuidv4 } from "uuid";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

export const projectsData = [
  {
    id: 1,
    title: "Job Prospect AI",
    url: "https://jobprospect.ai",
    category: "Web Application - Solo Founder",
    img: "/images/JobProspectAI-MainPage.png",
    ProjectHeader: {
      title: "Job Prospect AI",
      publishDate: "Sep 25th, 2023",
      tags: "Fullstack, UX/UI, AI",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Job Prospect AI Main Page",
        img: "/images/JobProspectAI-MainPage.png",
      },
      {
        id: uuidv4(),
        title: "Job Prospect AI Dashboard Page",
        img: "/images/JobProspectAI-DashboardPage.png",
      },
      {
        id: uuidv4(),
        title: "Job Prospect AI Document Page",
        img: "/images/JobProspectAI-DocumentPage.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Company",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Job Prospect AI",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Company Research AI",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://jobprospect.ai",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "+1 989-657-2141",
        },
      ],
      ObjectivesHeading: "TLDR",
      ObjectivesDetails:
        "Job Prospect AI is a web application designed to simplify company research for job seekers in an era where remote work is opening up a world of opportunities. This innovative tool empowers users to discover valuable insights about potential employers, their products/services, target markets, and even generates relevant interview questions to showcase their knowledge and interest to recruiters.",
      Technologies: [
        {
          title: "Tools & Technologies",
          technologies_summary:
            "The development of Job Prospect AI leveraged modern technologies and frameworks such as NextJS, FastAPI, Python, React, TypeScript, TailwindCSS, Supabase, Vercel, Web Scraping, Langchain, and GPT. These tools enabled efficient development, AI integration, responsive design, and data acquisition from the web.",
          techs: [
            "NextJS",
            "FastAPI",
            "Python",
            "React",
            "TypeScript",
            "TailwindCSS",
            "Supabase",
            "Vercel",
            "Web Scraping",
            "Langchain",
            "GPT",
          ],
        },
      ],
      ProjectDetailsHeading: "Summary",
      ProjectDetails: [
        {
          id: uuidv4(),
          detailHeader: "Motivation",
          details:
            "During my job search process, I attended many virtual career fairs, networking events, coffee chats, and interviews. I found myself spending a lot of time researching companies and trying to find the right people to talk to. I wanted to build a tool that would make this process easier for job searchers in an environment where remote work and digital applications are flooding the job market, making applying to more companies a necessity.\n",
        },
        {
          id: uuidv4(),
          detailHeader: "Problem",
          details:
            "I created Job Prospect AI because I saw how tough it is for folks to find jobs nowadays. Two big problems make it even harder:\n\nLots of Online Job Hunting: In today's digital world, there are tons of job websites and remote work opportunities. That's good, but it also means more people are applying for the same jobs. This makes it tough for employers to pick the right person.\n\nUncertain Job Market: The economy is also shaky, with some companies laying off workers and not hiring new ones. So, there are fewer job openings, and that means you're up against even more competition when job hunting. Job Prospect AI is here to help you navigate through these challenges.\n",
        },
        {
          id: uuidv4(),
          detailHeader: "Solution",
          details:
            "My product simplifies job searching in two ways:\n\n 1.) Company Summary Generator\nWith just a website link, it creates a summary of companies. It helps you:\nKnow the Industry: Understand what the industry is all about.\nLearn About Companies: Get details about what they do and what they make.\nFind the Market: See who their customers are and how the market is changing.\nAce Interviews: It even helps you come up with great questions to ask recruiters.\n\n2.) Interview Prep Sheet\nFor interviews, it goes a step further. It adds:\nJob Details: Tells you about the position and what someone in this position could be working on, in relation to the products and services.\nQualifications: Explains what those qualifications really mean.\n\nMy goal is to make your job search easier and help you stand out during interviews.\n",
        },
        {
          id: uuidv4(),
          detailHeader: "Architecture",
          details:
            "I built this using modern tools and languages to make it fast and reliable. Here's how it all fits together:\n\nNextJS: This serves as both the backend and frontend framework, making the app efficient.\nTypescript: It brings some advanced coding qualities to the mix.\nReactJS: This helps create the structure of the app's frontend.\nTailwindCSS: It takes care of styling and makes the app look good on any device.\n\nFor the AI part:\nFastAPI & Python: These were used to develop the AI.\nLangchain: It's like the brain behind the scenes for AI processing.\n\nTo get data:\nSelenium & BeautifulSoup: These two work together to scrape data from the web.\n\nFor storage and deployment:\nSupabase: It handles authentication, storage, and the database.\nVercel: This is where the app is hosted, and it makes sure everything runs smoothly.\nThis setup ensures a seamless and efficient experience for users.",
        },
      ],
    },
  },
  {
    id: 2,
    title: "Posture-Controlled Robotic Arm",
    url: "https://github.com/edubu/LightBot",
    category: "EECS 467: Autonomous Robotics - Group Project",
    img: "/images/PostureControlledRoboticArm.png",
    ProjectHeader: {
      title: "Posture-Controlled Robotic Arm",
      publishDate: "Dec 10th, 2022",
      tags: "Robotics, AI, OpenCV, Python, Embedded Systems",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Arm Functionality Poster Page",
        img: "/images/PostureControlledRoboticArm.png",
      },
      {
        id: uuidv4(),
        title: "Design Lab Live Demo Screenshot",
        img: "/images/PostureControlledRoboticArmDemo.png",
      },
      {
        id: uuidv4(),
        title: "Arm Architecture Diagram",
        img: "/images/PostureControlledRoboticArmArchitecture.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Class",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "EECS 467",
          details: "Autonomous Robotics",
        },
        {
          id: uuidv4(),
          title: "Type",
          details: "Senior Design Project",
        },
        {
          id: uuidv4(),
          title: "Syllabus",
          details: "https://shorturl.at/dJSY6",
        },
      ],
      ObjectivesHeading: "TLDR",
      ObjectivesDetails:
        "The goal of this project was to create a robotic arm that could be controlled by ones posture and allowing it to interact with its environment. Additional features included velocity control and remote controlling(over WiFi).",
      Technologies: [
        {
          title: "Tools & Technologies",
          technologies_summary:
            "The development of Job Prospect AI leveraged modern technologies and frameworks such as NextJS, FastAPI, Python, React, TypeScript, TailwindCSS, Supabase, Vercel, Web Scraping, Langchain, and GPT. These tools enabled efficient development, AI integration, responsive design, and data acquisition from the web.",
          techs: [
            "NextJS",
            "FastAPI",
            "Python",
            "React",
            "TypeScript",
            "TailwindCSS",
            "Supabase",
            "Vercel",
            "Web Scraping",
            "Langchain",
            "GPT",
          ],
        },
      ],
      ProjectDetailsHeading: "Summary",
      ProjectDetails: [
        {
          id: uuidv4(),
          detailHeader: "Motivation",
          details:
            "During my job search process, I attended many virtual career fairs, networking events, coffee chats, and interviews. I found myself spending a lot of time researching companies and trying to find the right people to talk to. I wanted to build a tool that would make this process easier for job searchers in an environment where remote work and digital applications are flooding the job market, making applying to more companies a necessity.\n",
        },
        {
          id: uuidv4(),
          detailHeader: "Problem",
          details:
            "I created Job Prospect AI because I saw how tough it is for folks to find jobs nowadays. Two big problems make it even harder:\n\nLots of Online Job Hunting: In today's digital world, there are tons of job websites and remote work opportunities. That's good, but it also means more people are applying for the same jobs. This makes it tough for employers to pick the right person.\n\nUncertain Job Market: The economy is also shaky, with some companies laying off workers and not hiring new ones. So, there are fewer job openings, and that means you're up against even more competition when job hunting. Job Prospect AI is here to help you navigate through these challenges.\n",
        },
        {
          id: uuidv4(),
          detailHeader: "Solution",
          details:
            "My product simplifies job searching in two ways:\n\n 1.) Company Summary Generator\nWith just a website link, it creates a summary of companies. It helps you:\nKnow the Industry: Understand what the industry is all about.\nLearn About Companies: Get details about what they do and what they make.\nFind the Market: See who their customers are and how the market is changing.\nAce Interviews: It even helps you come up with great questions to ask recruiters.\n\n2.) Interview Prep Sheet\nFor interviews, it goes a step further. It adds:\nJob Details: Tells you about the position and what someone in this position could be working on, in relation to the products and services.\nQualifications: Explains what those qualifications really mean.\n\nMy goal is to make your job search easier and help you stand out during interviews.\n",
        },
        {
          id: uuidv4(),
          detailHeader: "Architecture",
          details:
            "I built this using modern tools and languages to make it fast and reliable. Here's how it all fits together:\n\nNextJS: This serves as both the backend and frontend framework, making the app efficient.\nTypescript: It brings some advanced coding qualities to the mix.\nReactJS: This helps create the structure of the app's frontend.\nTailwindCSS: It takes care of styling and makes the app look good on any device.\n\nFor the AI part:\nFastAPI & Python: These were used to develop the AI.\nLangchain: It's like the brain behind the scenes for AI processing.\n\nTo get data:\nSelenium & BeautifulSoup: These two work together to scrape data from the web.\n\nFor storage and deployment:\nSupabase: It handles authentication, storage, and the database.\nVercel: This is where the app is hosted, and it makes sure everything runs smoothly.\nThis setup ensures a seamless and efficient experience for users.",
        },
      ],
    },
  },
];
