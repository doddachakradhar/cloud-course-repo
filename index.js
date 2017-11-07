const http = require('http');

	const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

	const server = http.createServer((req, res) => {
  	res.statusCode = 200;
  		res.setHeader('Content-Type', 'text/plain');
  		res.end('Hi Sir,Im D.CHAKRADHAR (14BC0465) this is my first app\n');
	});

	server.listen(port, hostname, () => {
  		console.log(`Server running at http://${hostname}:${port}/`);
	});
