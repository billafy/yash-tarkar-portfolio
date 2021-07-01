import React, {useState} from 'react';
import {FaHamburger} from 'react-icons/fa';
import {useHistory} from 'react-router-dom';

import Navlinks from './Navlinks';

import '../portfolio-css/navbar.css';

const Navbar = ({width}) => {
	const history = useHistory();
	const [selectedLink, setSelectedLink] = useState(history.location.pathname);
	const [showDropDown, setShowDropDown] = useState(false);

	return (
		<nav className='nav-container'>
			<nav className='navbar'>
				<div className='title'>
					<h1>
						Yash Tarkar
					</h1>
					{/* <span>Full Stack Web Developer</span> */}
				</div>
				<Navlinks width={width} showDropDown={showDropDown} setShowDropDown={setShowDropDown} selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
				<a href='#contact-me'>
					<button className='contact-me-btn'>
						Contact Me
					</button>
				</a>
				<button className='hamburger' onClick={() => setShowDropDown(!showDropDown)}>
					<FaHamburger/>				
				</button>
			</nav>
			<Navlinks width={width} showDropDown={showDropDown} setShowDropDown={setShowDropDown} selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
		</nav>	
	);	
}

export default Navbar;