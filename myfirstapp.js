var http = require("http");

// http.createServer(requestListener)

var listener = function (request, response) {

    // Send the HTTP header 
    
    // HTTP Status: 200 : OK
    
    // Content Type: text/plain 
    
    response.writeHead(200, {'Content-Type': 'text/html'});
    
    // Send the response body as "Hello World" 
    
    response.end('<h2 style="text-align: center;">Hello World</h2>');};

    server = http.createServer(listener); 

    server.listen(3000);  //กำหนดว่าให้ทำที่พอร์ตหมายเลขใหน
    console.log('Server running athttp://127.0.0.1:3000/');