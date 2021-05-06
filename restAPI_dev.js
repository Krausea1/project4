//npm install express in terminal
var express = require ('express');
var app = express();

var port = process.env.PORT || 3000;

app.set('views', __dirname + '/demo/front_end');
app.engine('html', require('ejs').renderFile);

var api_routes = require('./api_routes_dev.js');
app.use('/api', api_routes)

app.get('/', (req, res) => {
    res.render("index_dev.html");
 })

app.use('/demo', express.static('demo/front_end'));

app.listen(port, function() {
    console.log('Server is running on port ' + port);
   
})