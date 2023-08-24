import {
    montecarlo,
    website,
    nlpanalysis,
    github,
    link
} from '../assets'

export const navLinks = [
    {
        id: "",
        title: "Home",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
        id: "experience",
        title: 'Experience',
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  export const projects = [
    {
      name: "Monte Carlo Simulation",
      description:
        "Interactive Web Application enabling custom retirement portfolio simulation using Monte Carlo simulations over a selected timespan.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "pandas",
          color: "green-text-gradient",
        },
        {
          name: "streamlit",
          color: "pink-text-gradient",
        },
      ],
      image: montecarlo,
      source_code_link: "https://portfolio-montecarlo-simulation.streamlit.app",
      source_image: link
    },
    {
      name: "NLP Asset Analysis",
      description:
        "Python NLP Pipeline leveraging PyTorch and transformers modules, enabling web scraping, summarization, and sentiment analysis of recent stock and cryptocurrency news to potential investors.",
      tags: [
        {
          name: "pandas",
          color: "blue-text-gradient",
        },
        {
          name: "NLP",
          color: "green-text-gradient",
        },
        {
          name: "SMTP",
          color: "pink-text-gradient",
        },
      ],
      image: nlpanalysis,
      source_code_link: "https://github.com/8enji/nlp-asset-analysis",
      source_image: github
    },
    {
      name: "Portfolio Website",
      description:
        "A dynamic personal portfolio website using JavaScript, React, and Next.js, showcasing my ability to create unique user experiences",
      tags: [
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "pink-text-gradient",
        },
      ],
      image: website,
      source_code_link: "https://github.com/8enji/project-portfolio",
      source_image: github
    },
  ];

export default {navLinks, projects}
