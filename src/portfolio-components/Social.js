import React, { useState } from "react";
import "../portfolio-css/social.scss";
import { socialLinks } from "../static/data";

const Social = () => {
	const [activeLink, setActiveLink] = useState("");

	const handleIconClick = (title) => {
		if (activeLink === title) setActiveLink("");
		else setActiveLink(title);
	};

	return (
		<section className="social">
			<h1>Social</h1>
			<ul className="social-links">
				{socialLinks.map((link, index) => {
					return (
						<li
							key={link.id}
							className={
								index % 2 === 0
									? `left fade-in ${
											activeLink === link.title
												? `active-link`
												: `inactive-link`
									  }`
									: `right fade-in ${
											activeLink === link.title
												? `active-link`
												: `inactive-link`
									  }`
							}
						>
							<div
								className="social-icon"
								onClick={() => handleIconClick(link.title)}
							>
								<img src={link.icon} alt={link.title} />
							</div>
							<div className="social-text">
								{activeLink === link.title ? (
									<a
										href={link.link}
										target={link.target ? "" : "_blank"}
										rel="noreferrer"
										style={
											link.title === "Gmail"
												? { pointerEvents: "none" }
												: {}
										}
									>
										{link.text}
									</a>
								) : (
									<a
										href="/"
										style={{ pointerEvents: "none" }}
									>
										{link.title}
									</a>
								)}
							</div>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default Social;
