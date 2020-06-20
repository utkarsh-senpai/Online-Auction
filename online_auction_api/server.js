const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const cors = require('cors');
const knex = require('knex')
const database = knex({
	  client: 'pg',
	  connection: {
	    host : '127.0.0.1',
	    user : 'postgres',
	    password : 'Utkarsh@993',
	    database : 'auction'
	  }
}); 

app.use(bodyParser.json());
app.use(cors())
app.use(function (error, req, res, next) {
  if(error instanceof SyntaxError){ //Handle SyntaxError here.
    return res.status(500).send({data : "Invalid data"});
  } else {
    next();
  }
});
app.get('/', (req,res)=> {
	res.send(database.users);
})
app.post('/SignIn', (req,res) => { 
	return database.select('email','hash').from('login')
	.where('email','=',req.body.email)
	.then(data =>{
		const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
		if (isValid){
			database.select('*').from('users')
			.where('email','=',req.body.email)
			.then(user =>{
				res.json(user[0])
			})
			.catch(err => res.status(400).json("Unable to Get User"))
		}
		else{
			res.status(400).json('wrong credentials')
		}
	})
	.catch(err => res.status(400).json("Error Loggin In"))
})

app.post('/SellerForm', (req,res) => { 
	console.log(req.body.price,req.body.type,req.body.product,req.body.name);
	database
			.returning('*')
			.insert({
						product: req.body.product,
						price: req.body.price,
						type: req.body.type,
						name: req.body.name,
						email: req.body.email
			})
			.into('seller')
			.then(response =>{
				console.log(response[0]);
				res.json(response[0]);
			})

})
app.post('/BuyerForm', (req,res) => { 
	database('seller').where('id',req.body.id)
			.returning('*')
			.update({
						b_email: req.body.b_email,
						b_name: req.body.b_name,
						pay_amount: req.body.pay_amount
			})
			.then(response =>{
				console.log(response[0]);
				res.json(response[0]);
			})

})
app.post('/Register',(req,res) => {
	const {email,name,password,c_no} = req.body;
	const salt = bcrypt.genSaltSync(saltRounds);
	const hash = bcrypt.hashSync(password, salt);
	database.transaction(trx =>{
		trx.insert({
			hash: hash,
			email: email
		})
		.into('login')
		.returning('email')
		.then ( loginemail => {
			return trx('users')
			.returning('*')
			.insert({
				email: loginemail[0],
				name: name,
				contact: c_no,
				joined: new Date()
			})

			.then(response => {
				res.json(response[0])
			})
		})
		.then(trx.commit)
		.catch(trx.rollback)
	})
	.catch(err => res.status(400).json("Error Registering User"))
})
app.listen(3000, ()=>{
	console.log("App is Running.")
})