import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Projects from "./Projects";
import Social from "./Social";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "../portfolio-css/portfolio.scss";

const randomInt = (min, max) => {
	return Math.floor(Math.random() * (max - min)) + min;
};

const Portfolio = () => {
	const [width, setWidth] = useState(window.innerWidth);

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

	const cursorEffect = (event) => {
		[1, 0.9, 0.8, 0.5, 0.1].forEach(function (i) {
			const j = (1 - i) * 50;
			const element = document.createElement("div");
			const size = Math.ceil(Math.random() * 10 * i) + "px";
			element.style.position = "fixed";
			element.style.top =
				event.clientY + Math.round(Math.random() * j - j / 2) + "px";
			element.style.left =
				event.clientX + Math.round(Math.random() * j - j / 2) + "px";
			element.style.width = size;
			element.style.height = size;
			const color = window.getComputedStyle(event.target ,null).getPropertyValue('color');
			element.style.background = color === 'rgb(0, 0, 0)' ? '#9B30FF' : color;
			element.style.borderRadius = size;
			element.style.pointerEvents = "none";
			document.body.appendChild(element);
			window.setTimeout(function () {
				document.body.removeChild(element);
			}, Math.round(Math.random() * i * 500));
		});
	};

	useEffect(() => {
		window.addEventListener("mousemove", cursorEffect);
		return () => {
			window.removeEventListener("mousemove", cursorEffect);
		};
	}, []);

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
			</Router>
		</section>
	);
};

export default Portfolio;
