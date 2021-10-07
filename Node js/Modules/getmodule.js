const values = require('./1-firstModule');
const functionValuess = require('./2-functionexport');
const flavours = require('./flavourModule');
require("./functionnotarrow")
const os = require('os'); //buitin modules
const path = require('path');
console.log(values);
console.log(functionValuess);
console.log(flavours);
console.log(os.userInfo());

const systemInfo ={
    typee:os.type(),
    info:os.userInfo(),
    release:os.release(),
    freemomery : os.freemem(),
    toalmemory :os.totalmem()


}
console.log(systemInfo);
console.log(path.sep);
// learn file path

const filePath = path.join('./content','subfolder','content.txt');
console.log(filePath);

const baseName = path.basename(filePath);
console.log(baseName); //display Name of the class 

const absolute  = path.resolve(__dirname,'content','subfolder','content.txt')
console.log(absolute);