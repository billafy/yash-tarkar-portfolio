import React, {useState} from 'react';

import '../portfolio-css/social.css';

const socialLinks = [
	{
		id:1,
		title:'LinkedIn',
		icon:'https://img.icons8.com/fluent/50/000000/linkedin.png',
		link:'https://www.linkedin.com/in/yash-tarkar-87b92b208/',
		text:'Yash Tarkar',
	},
	{
		id:5,
		title:'GitHub',
		icon:'https://img.icons8.com/fluent/50/000000/github.png',
		link:'https://www.github.com/billafy/',
		text:'billafy',
	},
	{
		id:2,
		title:'Twitter',
		icon:'https://img.icons8.com/fluent/50/000000/twitter.png',
		link:'https://twitter.com/BawalBilla',
		text:'BawalBilla',
	},
	{
		id:3,
		title:'Gmail',
		icon:'https://img.icons8.com/fluent/50/000000/gmail-new.png',
		link:'#',
		text:'ytarkar138@gmail.com',
		target:true,
	},
	{
		id:4,
		title:'Instagram',
		icon:'https://img.icons8.com/fluent/48/000000/instagram-new.png',
		link:'https://www.instagram.com/billa_fy/',
		text:'billa_fy',
	},
];

const Social = () => {
	const [activeLink, setActiveLink] = useState('');

	const handleIconClick = (title) => {
		if(activeLink === title)
			setActiveLink('');
		else
			setActiveLink(title);
	}

	return (
		<section className='social'>
			<ul className='social-links'>
				{socialLinks.map((link, index) => {
						return (
							<li key={link.id} className={index % 2 === 0 ? `left fade-in ${activeLink === link.title ? `active-link` : `inactive-link`}` : `right fade-in ${activeLink === link.title ? `active-link` : `inactive-link`}`}>
								<div className='social-icon' onClick={() => handleIconClick(link.title)}>
									<img src={link.icon} alt={link.title}/>
								</div>
								<div className='social-text'>
									{activeLink === link.title
										?
											<a href={link.link} target={link.target ? '' : '_blank'} rel="noreferrer" style={link.title === 'Gmail' ? {pointerEvents:'none'} : {}}>{link.text}</a>
										:
											<a href='/' style={{pointerEvents:'none'}}>{link.title}</a>
									}
								</div>
							</li>	
						);
					})}
			</ul>
		</section>	
	);
}

export default Social;