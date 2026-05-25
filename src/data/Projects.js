import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

const projects = [
  {
    id: 1,
    name: " Todo app",

    image: image1,

    description: "The Todo app built using HTML and CSS with responsive design",

    link: "https://github.com/",

    techStack: ["HTML", "CSS"],

    featured: true,
  },

  {
    id: 2,
    name: "Course Website",

    image: image2,

    description: "A course website built using JavaScript, HTML, CSS.",

    link: "https://github.com/",

    techStack: ["HTML", "JavaScript", "CSS"],

    featured: false,
  },

  {
    id: 3,
    name: "Weather App",

    image: image3,

    description: "A weather application built using React and API integration.",

    link: "https://github.com/",

    techStack: ["React", "CSS", "Responsive Design"],

    featured: true,
  },
];

export default projects;
