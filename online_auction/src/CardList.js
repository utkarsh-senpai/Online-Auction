import React from 'react'
import Card from './Card.js'


class CardList extends React.Component {
	constructor(props){
			super(props);
			this.state = {
				temp: this.props.seller_info
			}
		}
	render(){
		const CardArray = this.props.seller_info.map((user,i) =>{
				return <Card onRouteChange = {this.props.onRouteChange} sellerDetails = {this.props.sellerDetails} key = {i} id={this.props.seller_info[i].id} name={this.props.seller_info[i].name} product={this.props.seller_info[i].product} type={this.props.seller_info[i].type}/>
			})
			return (
				<div>
					{CardArray}
			  	</div>
		  	);
		}
} 
export default CardList;