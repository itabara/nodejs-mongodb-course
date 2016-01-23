var express = require('express'),
    app = express();
    //consolidate is a wrapper for templates engines 
    engines = require('consolidate');

//set the html engine
app.engine('html', engines.nunjucks);
//set the view engine
app.set('view engine', 'html');
//__dirname is the path of the current file
app.set('views', __dirname + '/views');

app.get('/', function(req, res){
	//res.send('Hello World');
	res.send('hello', {'name': 'Tom'});
});

app.use(function(req, res){
    res.sendStatus(404); 
});

var server = app.listen(3000, function() {
	//get the port number
    var port = server.address().port;
    console.log('Express server listening on port %s', port);
});