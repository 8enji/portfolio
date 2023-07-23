import {
    spotify,
    stockify,
    articleai
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
      name: "Spotify Sapphire",
      description:
        "Web-based apllication that extends upon the features of Spotify while also adding unique elements such as music video support, detailed analytics, and community songs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "rapidapi",
          color: "green-text-gradient",
        },
        {
          name: "redux",
          color: "pink-text-gradient",
        },
      ],
      image: spotify,
      source_code_link: "https://github.com/",
    },
    {
      name: "Stockify",
      description:
        "Web application aimed at lowering the entry barrier to stock analytics by providing users with easy to read charts and a beginner-friendly interface.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "...",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: stockify,
      source_code_link: "https://github.com/",
    },
    {
      name: "Article AI",
      description:
        "A comprehensive article summarizer that utilizes technologies such as GPT 4 to summarize user-provided articles, while also providing analytics such as reading level and genre ",
      tags: [
        {
          name: "llm",
          color: "blue-text-gradient",
        },
        {
          name: "rapidapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: articleai,
      source_code_link: "https://github.com/",
    },
  ];

export default {navLinks, projects}