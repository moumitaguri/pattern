const lib = require('./src/library.js');


const main = function(){
  let type = process.argv[2];
  let width = +process.argv[3];
  let height = +process.argv[4];
  let rectangle = lib.selectRectangle(type,width,height);
  console.log(rectangle);
}

main();
