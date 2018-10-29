const lib = require('./src/library.js');
const utilLib = require('./src/util.js');

const main = function(){
  let rectangleDetails = utilLib.fetchPatternDetails(process.argv); 
  let rectangle = lib.selectRectangle(rectangleDetails.type,rectangleDetails.height,rectangleDetails.width);
  console.log(rectangle);
}

main();
