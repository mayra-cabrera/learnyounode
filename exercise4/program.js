var fs = require('fs');
var buffer ;
var count = 0;
function count(error, buffer){
	console.log(buffer.split('\n').length - 1);
}

fs.readFile(process.argv[2], 'utf-8', count);

