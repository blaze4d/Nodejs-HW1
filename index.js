/**
 * The API server
 */

 //Dependencies
 var http = require('http');
 var url = require('url');

 // Create the server
 var server = http.createServer( function(req, res){
     // Get the request method
     var method = req.method;
     var returnData = '';
     if(method.toLowerCase() !== 'post') {
        // Method not allowed
        res.writeHead(405);
     } else {
         // Get the requested url
        var parsedUrl = url.parse(req.url, true);
        var trimmedPath = parsedUrl.path.replace(/^\/+|\/+$/g, '');
        if (trimmedPath.toLowerCase() === 'hello') {
            res.setHeader('Content-Type', 'application/json');
            var message = {"message": "Hello too!"};
            returnData = JSON.stringify(message);
        }
     }
     
     
     res.end(returnData);


 });

 // Start the server
 server.listen(3002, function(){
     console.log('Server listening on port 3002');
 })