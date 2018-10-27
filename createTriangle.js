const lib = require('./src/library.js');

const main = function(){
  let triangleType = process.argv[2];
  let height = +process.argv[3];
  let triangle = lib.selectTriangle(triangleType,height);
  console.log(triangle);
}

main();
