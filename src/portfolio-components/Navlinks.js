import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../static/data";

const Navlinks = ({
	width,
	showDropDown,
	setShowDropDown,
	selectedLink,
	setSelectedLink,
}) => {
	const handleClick = (link) => {
		setSelectedLink(link);
		setShowDropDown(false);
	};

	return (
		<ul
			className={
				width <= 968
					? showDropDown
						? `drop-it-down`
						: `pick-it-up`
					: ``
			}
		>
			{navLinks.map((link) => {
				return (
					<li
						key={link.id}
						className={
							link.to === selectedLink ? `selected-link` : ``
						}
						onClick={() => handleClick(link.to)}
					>
						<Link to={link.to}>{link.title}</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default Navlinks;