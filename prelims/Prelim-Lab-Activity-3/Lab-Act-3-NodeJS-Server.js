// Limiac, Joshua Ezekiel T.
// Lab Act 3
// WD-201

var http = require('http');
var server = http.createServer(function (req, res) {
  if (req.url == '/') {
    //set response header
    res.writeHead(200, { 'Content-Type': 'text/html' });
    //set response content
    res.write(
      '<html><body style = "background-color: #808080"><h1>Welcome to my Node.js Application.</h1><p>Welcome Joshua Ezekiel Limiac. This is an activity about basics of Node.js</p></body></html>'
    );
    res.end();
  } else if (req.url == '/about') {
    //set response header
    res.writeHead(200, { 'Content-Type': 'text/html' });
    //set response content
    res.write(
      '<html><body style = "background-color: #808080"><h1>This is the About Page.</h1><p>Hello Joshua Ezekiel Limiac. This activity will teach on how to deal with a simple server and local modules in Node.js</p></body></html>'
    );
    res.end();
  } else if (req.url == '/contact') {
    //set response header
    res.writeHead(200, { 'Content-Type': 'text/html' });
    //set response content
    res.write(
      '<html><body style = "background-color: #808080"><h1>This is the Contact Page.</h1><p>Joshua Ezekiel Limiac, if you want additional details about this activity go to this site: https://tutorialteacher.com/nodejs-tutorials</p></body></html>'
    );
    res.end();
  } else if (req.url == '/gallery') {
    //set response header
    res.writeHead(200, { 'Content-Type': 'text/html' });
    //set response content
    res.write(
      '<html><body style = "background-color: #808080"><h1>This is the Gallery Page.</h1></body></html>'
    );
    res.end();
  } else res.end('Invalid Request!');
});
server.listen(5000);
console.log('Node.js web server at port 5000 is running..');
