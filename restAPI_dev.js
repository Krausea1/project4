
const express = require('express');
const app = express();


var fs = require('fs')
var rawdata = fs.readFileSync('./courses.json');
var course = JSON.parse(rawdata);


//routes

app.get('/api', (req, res) => {
	let outputJSON = {
		courses : course["courses"]
	}

	res.json(outputJSON);
})

app.get('/api/by_course_code/:qcode', (req, res) => {
	let query = req.params['qcode']
	filtered_courses = course["courses"].filter(q => q.course_code.toLowerCase().includes(query.toLowerCase()) )
let outputJSON = {

	courses : filtered_courses
}

res.json(outputJSON);
	
})

app.get('/api/by_level/:qlevel', (req, res) =>{
	let query = req.params['qlevel']
	filtered_courses = course["courses"].filter(q => q.course_level.toLowerCase().includes(query.toLowerCase()) )
let outputJSON = {
	courses : filtered_courses
}

res.json(outputJSON);
})

app.get('/api/by_instructor/:qname', (req,res) => {
	let query = req.params['qname']
	filtered_courses = course["courses"].filter(q => q.instructor.includes(query))
let outputJSON = {
	courses : filtered_courses
}
res.json(outputJSON);
})

app.get('/api/by_title/:qtitle', (req,res) => {
	let query = req.params['qtitle']
	filtered_courses = course["courses"].filter(q => q.title.includes(query))
	let outputJSON = {
		courses : filtered_courses
	}
	res.json(outputJSON);
})



app.use('/demo',express.static('front_end'));

//server 

app.listen(3000, function() {
	console.log("Server is running");
	//console.log(courses);

})