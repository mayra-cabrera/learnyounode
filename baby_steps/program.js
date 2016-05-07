
var results = 0;
for(i = 2; i < process.argv.length; i++){
	results += +process.argv[i];
}
console.log(results);
