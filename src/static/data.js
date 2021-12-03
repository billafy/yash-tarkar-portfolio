import { CgWebsite } from "react-icons/cg";
import { FaDatabase, FaLaptop } from "react-icons/fa";
import { BiCodeCurly } from "react-icons/bi";

export const skills = [
	{
		id: 1,
		icon: <CgWebsite />,
		title: "Web Development",
		description:
			"Able to develop full-stack web applications with fast, dynamic and interactive UI designs built on a sustainable back-end",
	},
	{
		id: 2,
		icon: <BiCodeCurly />,
		title: "Algorithmic Techniques",
		description:
			"Good command on various types of algorithms used to tackle complex problems",
	},
	{
		id: 3,
		icon: <FaDatabase />,
		title: "Database Management",
		description:
			"Able to convert real-world entities into a database model and manage it",
	},
	{
		id: 4,
		icon: <FaLaptop />,
		title: "Technical Support",
		description:
			"Can troubleshoot and resolve technical issues related to hardware and software",
	},
];

export const langFwks = [
	{
		id: 1,
		icon: "https://img.icons8.com/color/48/000000/html-5.png",
		title: "HTML5",
	},
	{
		id: 2,
		icon: "https://img.icons8.com/color/48/000000/css3.png",
		title: "CSS3",
	},
	{
		id: 3,
		icon: "https://img.icons8.com/color/48/000000/javascript.png",
		title: "Javascript",
	},
	{
		id: 4,
		icon: "https://img.icons8.com/color/48/000000/react-native.png",
		title: "React",
	},
	{
		id: 10,
		icon: "https://cdn.iconscout.com/icon/free/png-512/node-js-1174925.png",
		title: "Node",
	},
	{
		id: 5,
		icon: "https://img.icons8.com/color/48/000000/mongodb.png",
		title: "MongoDB",
	},
	{
		id: 7,
		icon: "https://img.icons8.com/color/48/000000/graphql.png",
		title: "GraphQL",
	},
	{
		id: 6,
		icon: "https://img.icons8.com/color/48/000000/sass.png",
		title: "Sass",
	},
	{
		id: 8,
		icon: "https://img.icons8.com/color/50/000000/python.png",
		title: "Python",
	},
	{
		id: 9,
		icon: "https://img.icons8.com/color/48/000000/django.png",
		title: "Django",
	},
	{
		id: 12,
		icon: "https://img.icons8.com/fluent/48/000000/mysql-logo.png",
		title: "MySQL",
	},
	{
		id: 11,
		icon: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png",
		title: "C/C++",
	},
];

export const projects = [
	{
		id: 7,
		title: "Intern.ly",
		link: "https://internly.vercel.app",
		source: "https://github.com/billafy/intern-events-next",
		image: "/images/internly-f.png",
		description:
			"An interactive social media for college students and companies for internship hiring.",
		text: "Visit",
	},
	{
		id: 1,
		title: "Wynx",
		link: "https://wynx.netlify.app",
		source: "https://github.com/billafy/chat-app",
		image: "/images/wynx-f.png",
		description:
			"Wynx is a chat-based application built by the integration of React and Django Rest Framework.",
		text: "Visit",
	},
	{
		id: 5,
		title: "RESTify",
		link: "https://restify.vercel.app/",
		source: "https://github.com/billafy/restify",
		image: "/images/restify-f.png",
		description:
			"A REST API Client to test your APIs on the go without any hassle.",
		text: "Visit",
	},
	{
		id: 4,
		title: "BillaBot",
		link: "https://discord.com/api/oauth2/authorize?client_id=776675605340094484&permissions=36751424&scope=bot",
		source: "https://github.com/billafy/BillaBot",
		image: "/images/billabot.jpg",
		description:
			"Discord bot which can play music, send GIFs and can also talk with you.",
		text: "Invite",
	},
	{
		id: 2,
		title: "GC Furnishings",
		link: "https://gcfurnishings.netlify.app",
		source: "https://github.com/billafy/furniture-react",
		image: "/images/gcfurnishings-f.png",
		description: "An E-commerce furniture website using React.",
		text: "Visit",
	},
	{
		id: 3,
		title: "Microsoft Calculator Clone",
		link: "https://nbcalculator.netlify.app",
		source: "https://github.com/billafy/calculator",
		image: "/images/calculator-f.png",
		description:
			"A clone of the Microsoft Windows 10 Calculator with proper functionality.",
		text: "Visit",
	},
];

export const socialLinks = [
	{
		id: 1,
		title: "LinkedIn",
		icon: "https://img.icons8.com/fluent/50/000000/linkedin.png",
		link: "https://www.linkedin.com/in/yash-tarkar-87b92b208/",
		text: "Yash Tarkar",
	},
	{
		id: 5,
		title: "GitHub",
		icon: "https://img.icons8.com/fluent/50/000000/github.png",
		link: "https://www.github.com/billafy/",
		text: "billafy",
	},
	{
		id: 2,
		title: "Twitter",
		icon: "https://img.icons8.com/fluent/50/000000/twitter.png",
		link: "https://twitter.com/BawalBilla",
		text: "BawalBilla",
	},
	{
		id: 3,
		title: "Gmail",
		icon: "https://img.icons8.com/fluent/50/000000/gmail-new.png",
		link: "#",
		text: "ytarkar138@gmail.com",
		target: true,
	},
	{
		id: 4,
		title: "Instagram",
		icon: "https://img.icons8.com/fluent/48/000000/instagram-new.png",
		link: "https://www.instagram.com/billa_fy/",
		text: "billa_fy",
	},
];

export const navLinks = [
	{
		id: 1,
		title: "Home",
		to: "",
	},
	{
		id: 2,
		title: "Projects",
		to: "projects",
	},
	{
		id: 3,
		title: "Social",
		to: "social",
	},
];