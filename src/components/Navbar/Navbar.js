import React from 'react';
import logo from '../assets/logo.svg';
import Style from './Navbar.module.css'

const Navbar = () => {
	return (
		<>
			<ul className={Style.navbar}>
				<li className={Style.logo}>
					<img src={logo} alt="logo" />
					<h5>intuiguine</h5>
				</li>
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#">Brands</a>
				</li>
				<li>
					<a href="#">Transporters</a>
				</li>
			</ul>
		</>
	);
};

export default Navbar;
