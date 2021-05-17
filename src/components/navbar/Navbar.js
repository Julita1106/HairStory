import React from "react";
import GoogleLogin from "react-google-login";

import { clientId } from "utils/utils";

import "./Navbar.scss";

const CustomButton = ({ onClick, disabled }) => (
	<button className='navbar__btn' onClick={onClick} disabled={disabled}>
		Log in
	</button>
);

export const Navbar = () => {
	const response = (response) => console.log(response);
	return (
		<nav className='navbar'>
			<p className='navbar__logo'>HairStory</p>
			<GoogleLogin
				clientId={clientId}
				render={(renderProps) => (
					<CustomButton
						onClick={renderProps.onClick}
						disabled={renderProps.disabled}>
						Log in
					</CustomButton>
				)}
				onSuccess={response}
				onFailure={response}
				cookiePolicy={"single_host_origin"}
			/>
		</nav>
	);
};
