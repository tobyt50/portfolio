import ppalink from "../assets/ppalink.png";
import hava from "../assets/hava.png";
import ppalinkGif from "../assets/ppalink-demo.gif";
import havaGif from "../assets/hava-demo.gif";

export const projects = [
  {
    title: "PPALink - Professional Hiring Platform",
    description:
      "A TypeScript-powered hiring platform with integrated payments, real-time interactions, and RESTful APIs for job and client management.",
    tech: [
      "TypeScript",
      "React",
      "Prisma",
      "Express",
      "PostgreSQL",
      "Stripe",
      "SendGrid",
    ],
    liveUrl: "https://ppalink.vercel.app",
    githubUrl: "https://github.com/tobyt50/PPALink",
    image: ppalink,
    gif: ppalinkGif,
    demoUrl: "https://www.youtube.com/embed/p0YGCfdxN-0?si=PGhWUCG2uZvq0eiy&autoplay=1&mute=1&rel=0&modestbranding=1"

  },
  {
    title: "Hava - Real Estate Platform",
    description:
      "A full-featured real estate platform enabling real-time chat between agents and clients, role-based dashboards, and property management tools.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Socket.IO",
      "Cloudinary",
      "Tailwind CSS",
    ],
    liveUrl: "https://havaapp.vercel.app",
    githubUrl: "https://github.com/tobyt50/CribLink",
    image: hava,
    gif: havaGif,
    demoUrl: "https://www.youtube.com/embed/-hQW1Yo8yBc?si=PlQob5glbLXqtF9U&autoplay=1&mute=1&rel=0&modestbranding=1",
  },
];
