const lib = require('./src/library.js');
const utilLib = require('./src/util.js');

const main = function(){
let diamondDetails = utilLib.fetchPatternDetails(process.argv); 
  let diamond = lib.findRequiredPattern(diamondDetails.type,diamondDetails.height); 
  console.log(diamond);
}

main();
