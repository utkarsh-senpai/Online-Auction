import React from 'react';
class SellerForm extends React.Component{
	constructor (props){
		super(props);
		this.state = {
			product:'',
			name: '',
			type: '',
			contact: '',
			email: '',
			b_name: '',
			b_email: '',
			price: '',
			pay_amount: ''

		}
	}
	onProductChange = (event) => {
		this.setState({product: event.target.value});
	}
	onPriceChange = (event) => {
		this.setState({price: event.target.value});
	}
	onTypeChange = (event) => {
		this.setState({type: event.target.value});
	}
	onSubmitSell = () => {
		fetch('http://localhost:3000/SellerForm',{
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				product: this.state.product,
				price: this.state.price,
				type: this.state.type,
				name: this.props.thisUser.name,
				contact: this.props.thisUser.c_no,
				email: this.props.thisUser.email
			})
		})
		.then(response => response.json())
		.then(user => {
			console.log(user.name);
			if (user.id){
				this.props.info_update(user);
				this.props.onRouteChange('App');
				
			}
			else{
				alert('Could Not Sell.')
			}
		})

	}
	render(){
		return (
		<div style={{marginTop:"1%"}}>
		<article className="br3 ba dark-gray shadow-5 b--black-10 mv4 w-150 w-50-m w-50-l mw6 center tc">
		<main className="pa4 black-80">
		  <div className="measure center ">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend className="f2 fw6 ph0 mh0">Seller Form</legend>
		      <div className="mt3">
		        <label className="db fw6 lh-copy f4" >Product</label>
		        <input 
		        onChange = {this.onProductChange}
		        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
		        type="text" name="product"  
		        id="product"/>
		      </div>
		      <div className="mt3">
		        <label className="db fw6 lh-copy f4" >Base Price</label>
		        <input 
		        onChange = {this.onPriceChange}
		        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
		        type="text" name="price"  
		        id="price"/>
		      </div>
		      <div className="mv3">
		        <label className="db fw6 lh-copy f4" >Type</label>
		        <input 
		        onChange = {this.onTypeChange}
		        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
		        type="text" 
		        name="type"  id="type"/>
		      </div>
		    </fieldset>
		    <div className="">
		      <input 
		      onClick = {this.onSubmitSell}
		      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f 5dib" 
		      type="submit" value="Sell"/>
		    </div>
		  </div>
		</main>
		</article>
		</div>
		);
	}
}
export default SellerForm;