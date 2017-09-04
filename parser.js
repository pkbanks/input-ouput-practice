// use the node module 'fs', for Node File System
// we need this for the readFile() method
var fs = require("fs");
let filename = 'city.list.json';
var data = require('./' + filename);

var city_list = [];
var city_length = data.length;

var search = "mia";

for(var i = 0; i < city_length; i++){
	// if( data[i].name.length > 1 && data[i].name[0].toLowerCase() + data[i].name[1].toLowerCase() === search){
	// 	city_list.push(data[i]);
	// }
	if(data[i].name.toLowerCase().startsWith(search)){
		// console.log(data[i].name);
		city_list.push(data[i])
	}
}

console.log(city_list);