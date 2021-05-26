import React from "react";
import { Link } from "react-router-dom";

import { Context } from "common/context";
import { signInWithGoogle, signOut } from "firebase.js";

import "./Navbar.scss";

const CustomButton = ({ onClick, label }) => (
	<button className='navbar__btn' onClick={onClick}>
		{label}
	</button>
);

export const Navbar = () => {
	const [context] = React.useContext(Context);

	return (
		<nav className='navbar'>
			<Link to='/' className='navbar__logo'>
				HairStory
			</Link>
			{context.isLogged ? (
				<CustomButton onClick={signOut} label='Wyloguj' />
			) : (
				<CustomButton onClick={signInWithGoogle} label='Zaloguj' />
			)}
		</nav>
	);
};
