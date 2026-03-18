import ppalink from "../assets/ppalink.png";
import hava from "../assets/hava.png";
import flowsplit from "../assets/flowsplit.png";
import ppalinkGif from "../assets/ppalink-demo.gif";
import havaGif from "../assets/hava-demo.gif";
import flowsplitGif from "../assets/flowsplit-demo.gif";
import givar from "../assets/givar.png";
import givarGif from "../assets/givar-demo.gif";

export const projects = [
  {
    title: "Givar Impact – Transparent Crowdfunding FinTech Platform",
    description:
      "A full-stack platform built for a client to streamline donations, track impact, and manage nonprofit workflows. Developed end-to-end using modern web technologies with secure and reliable payment integration.",
    tech: [
      "TypeScript",
      "Next.js",
      "Nest.js",
      "PostgreSQL",
      "Paystack",
      "Apple Pay",
      "Resend Email",
      "REST APIs",
      "Tailwind CSS",
      "Secure S3 Object Storage",
      "Cloudinary",
      "PostHog",
      "Sentry"
    ],
    liveUrl: "https://givarapp.com",
    githubUrl: "https://github.com/givarhq/givar-impact-mvp",
    image: givar,
    gif: givarGif,
    demoUrl: "https://www.youtube.com/embed/YOUR_GIVAR_VIDEO_ID?autoplay=1&mute=1&rel=0&modestbranding=1",
  },

  {
    title: "FlowSplit - Smart Expense & Payment Splitting",
    description:
      "A full-stack application for splitting expenses and managing shared payments, featuring clean UX, secure APIs, and scalable backend architecture.",
    tech: [
      "TypeScript",
      "Next.js",
      "Nest.js",
      "PostgreSQL",
      "PayStack",
      "Stripe",
      "REST APIs",
      "Tailwind CSS",
      "Sentry"
    ],
    liveUrl: "https://flowsplit.vercel.app",
    githubUrl: "https://github.com/tobyt50/FlowSplit",
    image: flowsplit,
    gif: flowsplitGif,
    demoUrl:
      "https://www.youtube.com/embed/YOUR_FLOWSPLIT_VIDEO_ID?autoplay=1&mute=1&rel=0&modestbranding=1",
  },

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
      "Socket.IO",
      "Stripe",
      "SendGrid",
    ],
    liveUrl: "https://ppalink.vercel.app",
    githubUrl: "https://github.com/tobyt50/PPALink",
    image: ppalink,
    gif: ppalinkGif,
    demoUrl:
      "https://www.youtube.com/embed/p0YGCfdxN-0?si=PGhWUCG2uZvq0eiy&autoplay=1&mute=1&rel=0&modestbranding=1",
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
    demoUrl:
      "https://www.youtube.com/embed/-hQW1Yo8yBc?si=PlQob5glbLXqtF9U&autoplay=1&mute=1&rel=0&modestbranding=1",
  },
];
