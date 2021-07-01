import React from 'react';

import {CgWebsite} from 'react-icons/cg';
import {FaDatabase, FaLaptop} from 'react-icons/fa';
import {BiCodeCurly} from 'react-icons/bi';

import '../portfolio-css/home.css';

const skills = [
	{
		id:1,
		icon:<CgWebsite/>,
		title:'Web Development',
		description:'Able to develop full-stack web applications with fast, dynamic and interactive UI designs built on a sustainable back-end',
	},
	{
		id:2,
		icon:<BiCodeCurly/>,
		title:'Algorithmic Techniques',
		description:'Good command on various types of algorithms used to tackle complex problems',
	},
	{
		id:3,
		icon:<FaDatabase/>,
		title:'Database Management',
		description:'Able to convert real-world entities into a database model and manage it',
	},
	{
		id:4,
		icon:<FaLaptop/>,
		title:'Technical Support',
		description:'Can troubleshoot and resolve technical issues related to hardware and software',
	},
];

const langFwks = [
	{
		id:1,
		icon:'https://img.icons8.com/color/48/000000/html-5.png',
		title:'HTML5',
	},
	{
		id:2,
		icon:'https://img.icons8.com/color/48/000000/css3.png',
		title:'CSS3',
	},
	{
		id:3,
		icon:'https://img.icons8.com/color/48/000000/javascript.png',
		title:'Javascript',
	},
	{
		id:4,
		icon:'https://img.icons8.com/color/48/000000/react-native.png',
		title:'React',
	},
	{
		id:5,
		icon:'https://img.icons8.com/color/48/000000/bootstrap.png',
		title:'Bootstrap',
	},
	{
		id:6,
		icon:'https://img.icons8.com/color/48/000000/sass.png',
		title:'Sass',
	},
	{
		id:7,
		icon:'https://cdn.iconscout.com/icon/free/png-256/jquery-7-1175152.png',
		title:'jQuery',
	},
	{
		id:8,
		icon:'https://img.icons8.com/color/50/000000/python.png',
		title:'Python',
	},
	{
		id:9,
		icon:'https://img.icons8.com/color/48/000000/django.png',
		title:'Django',
	},
	{
		id:10,
		icon:'https://cdn.iconscout.com/icon/free/png-512/node-js-1174925.png',
		title:'Node',
	},
	{
		id:11,
		icon:'https://img.icons8.com/color/48/000000/c-plus-plus-logo.png',
		title:'C/C++',
	},
	{
		id:12,
		icon:'https://img.icons8.com/fluent/48/000000/mysql-logo.png',
		title:'MySQL',
	},
];

const Home = () => {
	return (
		<section className='home'>
			<h1 className='slide-left'>
				Hello, I'm <b>Yash.</b> <br/>
				I'm a full stack web developer.				
			</h1>
			<ul className='slide-right skills'>
				{skills.map(skill => {
						return (
							<li key={skill.id}>
								{skill.icon}
								<p>{skill.title}</p>
								<span>{skill.description}</span>
							</li>	
						);
					})}
			</ul>
			<div className='lang-fwks fade-in'>
				<div className='lang-title'>
					<div className='line'></div>
					<p>Languages & Frameworks I know</p>
					<div className='line'></div>
				</div>
				<ul>
					{langFwks.map(lang => {
							return (
								<li key={lang.id} className='language'>
									<img src={lang.icon} alt={lang.title}/>
									<p>{lang.title}</p>
								</li>			
							);
						})}
				</ul>
			</div>
		</section>	
	);
}

export default Home;