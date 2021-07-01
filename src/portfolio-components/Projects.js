import React from 'react';

import chatapp from '../images/chatapp.JPG';
import gcf from '../images/gcf.JPG';
import cal from '../images/cal.JPG';
import billa from '../images/billa.jpg';
import cocktail from '../images/cocktail.JPG';
import restify from '../images/restify.png';

import '../portfolio-css/projects.css';

const projects = [
	{
		id:1,
		title:'Wynx',
		link:'https://wynx.netlify.app',
		source:'https://github.com/billafy/chat-app',
		image:chatapp,
		description:'Wynx is a chat-based application built by the integration of React and Django Rest Framework.',
		text:'Visit',
	},
	{
		id:2,
		title:'GC Furnishings',
		link:'https://gcfurnishings.netlify.app',
		source:'https://github.com/billafy/furniture-react',
		image:gcf,
		description:'An E-commerce furniture website using React.',
		text:'Visit',
	},
	{
		id:5,
		title:'RESTify',
		link:'https://restify.vercel.app/',
		source:'https://github.com/billafy/restify',
		image:restify,
		description:'A REST API Client to test yours APIs on the go without any hassle.',
		text:'Visit',
	},
	{
		id:4,
		title:'BillaBot',
		link:'https://discord.com/api/oauth2/authorize?client_id=776675605340094484&permissions=36751424&scope=bot',
		source:'https://github.com/billafy/BillaBot',
		image:billa,
		description:'Discord bot which can play music, send GIFs and can also talk with you.',
		text:'Invite',
	},
	{
		id:3,
		title:'Microsoft Calculator Clone',
		link:'https://nbcalculator.netlify.app',
		source:'https://github.com/billafy/calculator',
		image:cal,
		description:'A clone of the Microsoft Windows 10 Calculator with proper functionality.',
		text:'Visit',
	},
	{
		id:6,
		title:'Cocktail Kingdom',
		link:'https://cocktail-kingdom.netlify.app/',
		source:'https://github.com/billafy/Cocktail-Kingdom',
		image:cocktail,
		description:'A React front-end project showcasing a cocktail website.',
		text:'Visit',
	},
];

const Projects = () => {
	return (
		<section className='projects'>
			<h1>Projects</h1>
			<ul>
				{projects.map((project, index) => {
						return (
							<li key={project.id} className='fade-in'>
								<div className='project-image' style={{background:`url(${project.image})`}}>
									<p><a href={project.link} target='_blank' rel='noreferrer'>{project.text}</a></p>
								</div>
								<div className='project-info'>
									<h3>{project.title}</h3>
									<p>{project.description}</p>
									<a href={project.source} target='_blank' rel='noreferrer'>View Source</a>									
								</div>
							</li>		
						);
					})}				
			</ul>
			<a className='see-more' href='https://github.com/billafy' target='_blank' rel='noreferrer'>See more on GitHub <img src='https://img.icons8.com/fluent/50/000000/github.png' alt='GitHub'/></a>
		</section>	
	);
}

export default Projects;