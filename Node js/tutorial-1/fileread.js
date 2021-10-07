const{readFileSync,writeFileSync, read} = require('fs');
const firstName = readFileSync('temp1.txt','utf-8');
const secondName = readFileSync('temp2.txt','utf-8');
console.log(firstName,secondName);