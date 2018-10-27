const lib = require('./src/library.js');

const main = function(){
  let diamondType = process.argv[2];
  let height = process.argv[3];
  let diamond = lib.findRequiredPattern(diamondType,height); 
  console.log(diamond);
}

main();
