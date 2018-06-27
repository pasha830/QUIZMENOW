const express = require('express')
const bodyParser = require('body-parser')
const pg = require('pg')
const ejs = require('ejs')
const PORT = process.env.PORT || 3000
const app = express()
const fs = require('fs');

// =====================================================
// ======ROUTES
// =====================================================

app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('public'))

// =====================================================
// ======USA_CITIZENSHIP
// =====================================================
app.get('/', (req, res)=>{
	return res.render('citizenship-questions')
})

app.post('/citizenship-questions', (req, res)=>{
	fs.readFile("citizenship.json", "utf-8", function(err, data){
		let citizenship = JSON.parse(data)
		return res.render('citizenship-questions', {citizenship})
	})
})

// =====================================================
// ======NJ_PERMIT
// =====================================================
app.get('/', (req, res)=>{
	return res.render('nj-permit')
})

app.post('/nj-permit', (req, res)=>{
	fs.readFile("njpermit.json", "utf-8", function(err, data){
		let njpermit = JSON.parse(data)
		return res.render('nj-permit', {njpermit})
	})
})

// =====================================================
// ======NY_PERMIT
// =====================================================

app.get('/', (req, res)=>{
	return res.render('ny-permit')
})

app.post('/ny-permit', (req, res)=>{
	fs.readFile("nypermit.json", "utf-8", function(err, data){
		let nypermit = JSON.parse(data)
		return res.render('ny-permit', {nypermit})
	})
})

// =====================================================
// ======STATE_CAPITALS
// =====================================================
app.get('/', (req, res)=>{
	return res.render('state-capitals')
})

app.post('/state-capitals', (req, res)=>{
	fs.readFile("capitals.json", "utf-8", function(err, data){
		let capitals = JSON.parse(data)
		return res.render('state-capitals', {capitals})
	})
})

// =====================================================
// ======LOCAL HOST SERVER
// =====================================================

app.listen(PORT, ()=>{
	console.log('Server running.....')
})
