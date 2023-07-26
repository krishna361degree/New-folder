var http = require('http');
http.createServer(function(req, res){
    res.write("Hello Krishna");
    res.end();
}).listen(5000) 