import React from "react";
import { Link } from "react-router-dom";
import { GoogleLogin, GoogleLogout } from "react-google-login";

import { history } from "common/utils";
import { clientId } from "common/utils";
import { Context } from "common/context";

import "./Navbar.scss";

const CustomButton = ({ onClick, disabled, label }) => (
	<button className='navbar__btn' onClick={onClick} disabled={disabled}>
		{label}
	</button>
);

export const Navbar = () => {
	const [context, setContext] = React.useContext(Context);

	const onLoginSuccess = (response) => {
		setContext({ ...context, user: response.profileObj, isLogged: true });
		history.push(`/${response.profileObj.googleId}/quiz`);
	};

	const onLogoutSuccess = () => setContext({});
	const onFailure = (response) => console.log(response);

	return (
		<nav className='navbar'>
			<Link to='/' className='navbar__logo'>
				HairStory
			</Link>
			{context.isLogged === true ? (
				<GoogleLogout
					clientId={clientId}
					isSignedIn={true}
					render={(renderProps) => (
						<CustomButton
							onClick={renderProps.onClick}
							disabled={renderProps.disabled}
							label={"Wyloguj"}
						/>
					)}
					onLogoutSuccess={onLogoutSuccess}
					onFailure={onFailure}
					cookiePolicy={"single_host_origin"}
				/>
			) : (
				<GoogleLogin
					clientId={clientId}
					render={(renderProps) => (
						<CustomButton
							onClick={renderProps.onClick}
							disabled={renderProps.disabled}
							label={"Zaloguj"}
						/>
					)}
					onSuccess={onLoginSuccess}
					onFailure={onFailure}
					cookiePolicy={"single_host_origin"}
				/>
			)}
			{/* <GoogleLogin
				clientId={clientId}
				render={(renderProps) => (
					<CustomButton
						onClick={renderProps.onClick}
						disabled={renderProps.disabled}>
						Log in
					</CustomButton>
				)}
				onSuccess={onSuccess}
				onFailure={onFailure}
				cookiePolicy={"single_host_origin"}
			/> */}
		</nav>
	);
};
