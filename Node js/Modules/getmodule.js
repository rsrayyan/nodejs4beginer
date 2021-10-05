const values = require('./1-firstModule');
const functionValuess = require('./2-functionexport');
const flavours = require('./flavourModule');
require("./functionnotarrow")
const os = require('os'); //buitin modules
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