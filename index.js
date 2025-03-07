var http = require('http');
const fs = require('fs');
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
fs.readFile('index.html', function(err, data) {
    res.write(data);
    res.end();
});

//res.end();
}).listen(8080);