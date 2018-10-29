const lib = require('./src/library.js');
const utilLib = require('./src/util.js');

const main = function(){
  let triangleDetails = utilLib.fetchPatternDetails(process.argv); 
  let triangle = lib.selectTriangle(triangleDetails.type, triangleDetails.height);
  console.log(triangle);
}

main();
