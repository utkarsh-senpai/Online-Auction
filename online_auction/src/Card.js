import React from 'react';
class Card extends React.Component{
	constructor(props){
		super(props);
		this.state = {
				user:{
					type: '',
					product: '',
					price: ''
				}
			}
	}

	render(){
	return (
		<div onClick={()=>{this.props.sellerDetails(this.props.id);
			this.props.onRouteChange("BuyerForm");}}
			 className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt='Random pic' src={`https://robohash.org/robo${this.props.id}?200x200`} />	
			<div>
				<h2>{this.props.product}</h2>
				<p>{this.props.name}</p>
				<p>{this.props.type}</p>
			</div>
		</div> 
		);
}
} 
export default Card;