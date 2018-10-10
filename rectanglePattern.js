let rectangleType = process.argv[2];
let width = process.argv[3];
let height = process.argv[4];

let heightIndex;
let widthIndex;
let row = "";
let symbol = "*";
const pattern = function(type){
  if(type == "filled"){
    for(heightIndex=1; heightIndex<=height; heightIndex++){
      for(widthIndex=1; widthIndex<=width; widthIndex++){
        row = row + symbol;
      }
      row += "\n";
    }
  }
}
let patternType = pattern(rectangleType);
console.log(row);
