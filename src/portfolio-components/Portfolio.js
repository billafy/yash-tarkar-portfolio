import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './Home';
import Projects from './Projects';
import Social from './Social';
import Navbar from './Navbar';
import Footer from './Footer';

import '../portfolio-css/portfolio.scss';

const Portfolio = () => {
	const height = window.screen.availHeight - (window.outerHeight - window.innerHeight);
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		window.addEventListener('resize', () => {
			if((width > 968 && window.innerWidth <= 968) || (width <= 968 && window.innerWidth > 968))
				setWidth(window.innerWidth);
		});
		return () => {
			window.removeEventListener('resize', () => {
				if((width > 968 && window.innerWidth <= 968) || (width <= 968 && window.innerWidth > 968)) 
					setWidth(window.innerWidth);
			});
		}	
	})

	return (	
		<section className='container'>
			<Router>
				<Navbar width={width}/>
				{/* <div className='main-container' style={{minHeight:height-80, maxHeight:'auto'}}>
					<Switch>
						<Route exact path='/' component={Home}/>
						<Route exact path='/projects' component={Projects}/>
						<Route exact path='/social' component={Social}/>
					</Switch>
				</div> */}
				<Home/>
				<Projects/>
				<Social/>
				<Footer/>
			</Router>
		</section>
	);
}

export default Portfolio;