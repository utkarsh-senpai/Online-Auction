import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import Scroll from './Scroll'
import './App.css'
class App extends React.Component {
	constructor(props){
		super(props);
					console.log(this.props.seller_info);
		this.state = {

			seller_info: this.props.seller_info,
			searchfield: ''
		}
	}
	onsearchChange = (event) =>{
		this.setState({searchfield: event.target.value})
	}
	render (){
		const filterSeller = this.state.seller_info.filter(seller_info =>{
			return seller_info.product.toLowerCase().includes(this.state.searchfield.toLowerCase());
	})
	return (
		<div className ='center tc' style={{marginTop:"1%"}}>
		<h1 id = "lol" className=' f1'>Auction Store</h1>
		<SearchBox searchChange={this.onsearchChange}/>
		<Scroll>
		<CardList onRouteChange = {this.props.onRouteChange} sellerDetails = {this.props.sellerDetails} seller_info={filterSeller}/>
		</Scroll>
		</div>
		);
	}
}
export default App;