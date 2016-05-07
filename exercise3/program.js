var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var str = buffer.toString();
var count = str.split('\n');
console.log(count.length -1);

