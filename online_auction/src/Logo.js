import React from 'react';
import Tilt from 'react-tilt';
import auction from './auction.png'

const Logo = () => {
	return (
		<div className="flex pa4">
			<Tilt className="Tilt br2 shadow-2" options={{ max : 75 }} style={{ height: 150, width: 150 }} >
			 <div className="Tilt-inner"> <img src={auction} alt="Logo" style = {{justifyContent: "middle",width:100,height:100,padding: "23px"}}/> </div>
			</Tilt>
		</div>
		);
}
export default Logo;