import React from "react";
import "../portfolio-css/home.scss";
import {skills, langFwks} from '../static/data';

const Home = () => {
	return (
		<section className="home">
			<h1 className="slide-left">
				Hello, I'm <b>Yash.</b> <br />
				I'm a full stack web developer.
			</h1>
			<ul className="slide-right skills">
				{skills.map((skill) => {
					return (
						<li key={skill.id}>
							{skill.icon}
							<p>{skill.title}</p>
							<span>{skill.description}</span>
						</li>
					);
				})}
			</ul>
			<div className="lang-fwks fade-in">
				<div className="lang-title">
					<div className="line"></div>
					<p>Languages & Frameworks I Know</p>
					<div className="line"></div>
				</div>
				<ul>
					{langFwks.map((lang) => {
						return (
							<li key={lang.id} className="language">
								<img src={lang.icon} alt={lang.title} />
								<p>{lang.title}</p>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
};

export default Home;
