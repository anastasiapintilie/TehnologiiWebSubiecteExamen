const express = require('express')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')

const mysql = require('mysql2/promise')

const DB_USERNAME = 'username'
const DB_PASSWORD = 'password'

mysql.createConnection({
	user : DB_USERNAME,
	password : DB_PASSWORD
})
.then(async (connection) => {
	await connection.query('DROP DATABASE IF EXISTS tw_exam')
	await connection.query('CREATE DATABASE IF NOT EXISTS tw_exam')
})
.catch((err) => {
	console.warn(err.stack)
})

const sequelize = new Sequelize('tw_exam', DB_USERNAME, DB_PASSWORD,{
	dialect : 'mysql',
	logging: false
})

let Author = sequelize.define('author', {
	name : Sequelize.STRING,
	email : Sequelize.STRING,
	address : Sequelize.STRING,
	age : Sequelize.INTEGER
})

const app = express()
app.use(bodyParser.json())

app.get('/create', async (req, res) => {
	try{
		await sequelize.sync({force : true})
		for (let i = 0; i < 10; i++){
			let author = new Author({
				name : 'name ' + i,
				email : 'name' + i + '@nowhere.com',
				address : 'some address on ' + i + 'th street'
			})
			await author.save()
		}
		res.status(201).json({message : 'created'})
	}
	catch(err){
		console.warn(err.stack)
		res.status(500).json({message : 'server error'})
	}
})

app.get('/authors', async (req, res) => {
	// should get all authors
	try{
		let authors = await Author.findAll()
		res.status(200).json(authors)
	}
	catch(err){
		// console.warn(err.stack)
		res.status(500).json({message : 'server error'})		
	}
})

app.post('/authors', async (req, res) => {
	//VALIDARE MAIL
	try {
		if (req.body.name === undefined || req.body.email === undefined) {
		res.status(500).json({
			message : 'server error'
		});
	} else {
		if (!req.body.email.includes('@') && !req.body.email.includes('.')) {
			res.status(500).json({
				message : 'server error'
			});
		} 
		else 
		{
			let author = await Author.create(req.body);
			console.log(author.name + author.email + author.address + author.age);
			res.status(201).json({
				message : 'created'
			});
		}
	}
	} catch (err) {
		console.warn(err);
		res.status(500).json({
			message : 'server error'
		});
	}
})

app.listen(8080)

module.exports = app