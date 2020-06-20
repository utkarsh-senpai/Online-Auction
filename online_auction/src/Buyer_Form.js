import React from 'react';
class BuyerForm extends React.Component{
	constructor (props){
		super(props);
		this.state = {
			b_name: this.props.User.name,
			b_email: this.props.User.email,
			pay_amount: '',
			type: '',
			product: '',
			price: '',
			seller_info: this.props.seller_info
		}
		console.log(this.props.seller_info);
	}

	getsellerinfo = () =>{
		let bool = true;
	 	for (let i = this.state.seller_info.length - 1; i >= 0; i--) {
	 				if (this.state.seller_info[i].id === this.props.SellerId && bool === true) {
						console.log(this.state.seller_info[i]);
	 					this.setState({
	 						type: this.state.seller_info[i].type,
	 						product: this.state.seller_info[i].product,
	 						price: this.state.seller_info[i].price
	 					})
	 					console.log(this.state.type);
						bool = false;
	 				}
					
	 			}
	 }

	onPayAmountChange = (event) => {
		this.setState({pay_amount: event.target.value});

	}
	onSubmitBuy = () => {
		fetch('http://localhost:3000/BuyerForm',{
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				id: this.props.SellerId,
				b_name: this.state.b_name,
				b_email: this.state.b_email,
				pay_amount: this.state.pay_amount
			})
		})
		.then(response => response.json())
		.then(user => {
			console.log(user.name);
			if (user.name){
				this.props.onRouteChange('App');
			}
			else{
				alert('Could Not Buy.')
			}
		})

	}
	render(){
		// this.getsellerinfo();
		return (
		<div style={{marginTop:"1%"}}>
		<article className="br3 ba dark-gray shadow-5 b--black-10 mv4 w-150 w-50-m w-50-l mw6 center tc">
		<main className="pa4 black-80">
		  <div className="measure center ">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend onClick = {this.getsellerinfo} className="f2 fw6 ph0 mh0">Buyer Form</legend>
		      <div className="mt3">
		        <label className="db fw6 lh-copy f4" >Product</label>
		        	{this.state.product}
		      </div>
		      <div className="mt3">
		        <label className="db fw6 lh-copy f4" >Base Price</label>
		        	{this.state.price}
		      </div>
		      <div className="mv3">
		        <label className="db fw6 lh-copy f4" >Type</label>
		        	{this.state.type}
		      </div>
		      <div className="mv3">
		        <label className="db fw6 lh-copy f4" >Enter Price:</label>
		        <input 
		        onChange = {this.onPayAmountChange}
		        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
		        type="text" 
		        name="price"  id="price"/>
		      </div>
		    </fieldset>
		    <div className="">
		      <input 
		      onClick = {this.onSubmitBuy}
		      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f 5dib" 
		      type="submit" value="Buy"/>
		    </div>
		  </div>
		</main>
		</article>
		</div>
		);
	}
}
export default BuyerForm;