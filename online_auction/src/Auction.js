import React, {Component} from 'react'
import Nav from './Nav'
import Register from './Register'
import Particles from 'react-particles-js';
import App from './App.js';
import SignIn from './SignIn';
import Logo from './Logo';
import Inbox from './Inbox';
import {seller_info} from './seller_info';
import SellerForm from './SellerForm'
import BuyerForm from './Buyer_Form'
import './Auction.css'
import 'tachyons';
const ParticlesOption = {
	    "particles": {
	        "number": {
	            "value": 450,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 9,
	            "random": true
	        },
	        "move": {
	            "direction": "bottom",
	            "out_mode": "out",
	            "speed": 4
	        },
	        "line_linked": {
	            "enable": false
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onclick": {
	                "enable": true,
	                "mode": "remove"
	            }
	        },
	        "modes": {
	            "remove": {
	                "particles_nb": 10
	            }
	        }
	    }
}

class Auction extends Component {
	constructor () {
		super();
		this.state = {
			route: 'SignIn',
			user: {
					id: '',
					name: '',
					email: '',
					password: '',
					joined: '',
					c_no: '',
				},
			seller: {
				id: ''
			}
		}
	}
	// componentDidMount(){ 
	// 	fetch('http://localhost:3000')
	// 	.then(response => response.json())
	// 	.then(console.log)
	// }
	loadUser = (data) =>{
		this.setState({user: {
					id: data.id ,
					name: data.name,
					email: data.email,
					password: data.password,
					joined: data.joined,
					c_no: data.c_no
		}})
	}
	info_update = (event) =>{
		seller_info.push({
					id: event.id,
					name: event.name,
					product: event.product,
					type: event.type,
					email: event.email,
					price: event.price
				});
		console.log(seller_info);
	}
	sellerDetails = (event) =>{
		this.setState({seller:{
			id : event
		}})
		console.log(event);
	}
	onRouteChange = (route) => {
		this.setState({route : route})
	}
	render () {
		return (
			<div>
			 	<Particles className='Particles' params = {ParticlesOption} />
			 	{
			 		this.state.route === 'SignIn'
			 		? <div>
			 			<Logo />
			 			<SignIn loadUser = {this.loadUser} onRouteChange = {this.onRouteChange}/>
			 			</div>
			 		: this.state.route === 'Register'
			 			?<div>
			 				<Logo />
			 				<Register loadUser = {this.loadUser} onRouteChange = {this.onRouteChange}/>
			 			</div>
			 				  	: this.state.route ==='Seller_Form'
			 				  		? <div>
			 				  			<Nav onRouteChange = {this.onRouteChange}/>
			 				  			<Logo />
			 				  			<SellerForm info_update = {this.info_update} onRouteChange = {this.onRouteChange} thisUser ={this.state.user}/>
			 				  			</div>
			 				  			: this.state.route === 'App' 
							 				? <div>
							 					<Nav onRouteChange = {this.onRouteChange}/>
							 					<App onRouteChange = {this.onRouteChange} sellerDetails = {this.sellerDetails} seller_info = {seller_info}/>
							 				   </div>
						 				  			: this.state.route === 'Inbox'
						 				  				? <div>
												 			<Nav onRouteChange = {this.onRouteChange}/>
												 			<Inbox/>
												 			</div>
												 			: this.state.route === 'BuyerForm'
						 				  					? <div>
													 			<Nav onRouteChange = {this.onRouteChange}/>
													 			<BuyerForm User = {this.state.user} onRouteChange = {this.onRouteChange} SellerId = {this.state.seller.id} seller_info= {seller_info}/>
													 			</div>
													 			: <div>
														 			<Logo />
														 			<SignIn loadUser = {this.loadUser} onRouteChange = {this.onRouteChange}/>
														 		</div>
			 	}
			</div>
			);
	}
}
export default Auction;
