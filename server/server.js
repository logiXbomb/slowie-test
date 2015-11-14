// jshint ignore: start
var app = require('koa.io')();
var port = process.env.PORT || 3000;
var serve = require('koa-static');

app.use(serve('./client'));

app.listen(port);
console.log('listening on port ' + port + '...');
