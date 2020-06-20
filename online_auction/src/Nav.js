import React from 'react';

const Nav = ({onRouteChange}) => {
	return (
		<div className="center tc pa1 shadow-5 br--brown">
		<div className="flex f3 pa2 pr6  pointer underline-hover coder " onClick={() => onRouteChange("Seller_Form")} style={{justifyContent: 'flex-start',display: 'inline-flex'}}>
		Sell
		</div>
		<div className="flex f3 pa2 pl6 pr6 pointer underline-hover code" onClick={() => onRouteChange("Inbox")} style={{justifyContent: 'center',display: 'inline-flex'}}>
		Inbox
		</div>
		<div className="flex f3 pa2 pl6 pr6 pointer underline-hover code" onClick={() => onRouteChange("App")} style={{justifyContent: 'center',display: 'inline-flex'}}>
		App
		</div>
		<div className="flex f3 pa2 pl6 pointer underline-hover code" onClick={() => onRouteChange("SignIn")} style={{justifyContent: 'flex-end',display: 'inline-flex'}}>
		Signout
		</div>
		</div>
		);
}
export default Nav;