import React from 'react';
import './index.css';
const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', border: 'black 5px', height: '500px'  }}>
			{props.children}
		</div>
		);
}
export default Scroll;