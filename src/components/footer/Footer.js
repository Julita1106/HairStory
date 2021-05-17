import React from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";

import "./Footer.scss";

export const Footer = () => {
	return (
		<footer className='footer'>
			<p className='footer__logo'>HairStory</p>
			<ul className='footer__socials'>
				<li className='footer__item'>
					<FacebookIcon fontSize='inherit' />
				</li>
				<li className='footer__item'>
					<InstagramIcon fontSize='inherit' />
				</li>
				<li className='footer__item'>
					<PinterestIcon fontSize='inherit' />{" "}
				</li>
			</ul>
		</footer>
	);
};
