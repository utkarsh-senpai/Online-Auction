import React from 'react';


class SignIn extends React.Component {
	constructor (props){
		super(props);
		this.state = {
			signInEmail:'',
			signInPassword: ''
		}
	}
	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value});
	}
	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value});
	}
	onSubmitSignIn = () => {
		fetch('http://localhost:3000/SignIn',{
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
		.then(response => response.json())
		.then(data => {
			if (data.id){
				this.props.loadUser(data)
				this.props.onRouteChange('App');
			}
			else{
				alert('Login or Password incorrect.')
			}
		})

	}
	render(){
		return (
		<div style={{ JustifyContent: 'center'}}>
		<article className="br3 ba dark-gray shadow-5 b--black-10 mv4 w-150 w-50-m w-50-l mw6 center tc">
		<main className="pa4 black-80">
		  <div className="measure center ">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend className="f2 fw6 ph0 mh0">Log In</legend>
		      <div className="mt3">
		        <label className="db fw6 lh-copy f4" >Email</label>
		        <input 
		        onChange= {this.onEmailChange}
		        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
		        type="email" name="email-address"  id="email-address"/>
		      </div>
		      <div className="mv3">
		        <label className="db fw6 lh-copy f4" >Password</label>
		        <input 
		        onChange= {this.onPasswordChange}
		        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
		      </div>
		    </fieldset>
		    <div className="">
		      <input 
		      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" 
		      onClick ={this.onSubmitSignIn} 
		      type="submit" value="Log In"/>
		    </div>
		    <div className="lh-copy mt3">
		      <p onClick = {() => this.props.onRouteChange("Register")}className="f3 link pointer underline-hover dim black db">Sign up</p>
		    </div>
		  </div>
		</main>
		</article>
		</div>
		);
	}
}
export default SignIn;