var http = require("http");
var PORT = process.env.PORT || 3000;

var app = http.createServer(function(request,response){
	response.end("Hello World!");
	//response.json({
		//data:"hello world"
});
console.log("Starting server on port " +PORT);
app.listen(PORT);