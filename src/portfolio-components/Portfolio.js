import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Projects from "./Projects";
import Social from "./Social";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "../portfolio-css/portfolio.scss";

const Portfolio = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const [coords, setCoords] = useState({ x: -1, y: -1 });

	useEffect(() => {
		window.addEventListener("resize", () => {
			if (
				(width > 968 && window.innerWidth <= 968) ||
				(width <= 968 && window.innerWidth > 968)
			)
				setWidth(window.innerWidth);
		});
		return () => {
			window.removeEventListener("resize", () => {
				if (
					(width > 968 && window.innerWidth <= 968) ||
					(width <= 968 && window.innerWidth > 968)
				)
					setWidth(window.innerWidth);
			});
		};
	});

	const fly = async (event) => {
		setCoords({
			x: event.clientX,
			y: event.clientY,
		});
	};

	useEffect(() => {
		window.addEventListener("mousemove", fly);
		return () => {
			window.removeEventListener("mousemove", fly);
		};
	});

	return (
		<section className="container">
			<Router>
				<Navbar width={width} />
				<div className="main-container">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/projects" component={Projects} />
						<Route exact path="/social" component={Social} />
					</Switch>
				</div>
				<Footer />
				<div className="flying-object" style={{top: coords.y - 50, left: coords.x - 50}}></div>
			</Router>
		</section>
	);
};

export default Portfolio;
