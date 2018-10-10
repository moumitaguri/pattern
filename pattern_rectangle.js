let rectangleType = process.argv[2];
let width = +process.argv[3];
let height = +process.argv[4];

const generateDashes = function(width){
  let symbol = "";
  for(let position=1; position<=width; position++){
    symbol+= "-";
  }
  return symbol;
}

const generateStars = function(width){
  let symbol = "";
  for(let position=1; position<=width; position++){
    symbol+= "*";
  }
  return symbol;
}

const generateSpaces = function(width){
  let symbol = "*";
  for(let position=1; position<=width-2; position++){
      symbol+= " ";
  }
  symbol+= "*";
  return symbol;
}

const createFilledRectangle = function(height,width){
  for(let row=1; row<=height; row++){
    let pattern = generateStars(width);
    console.log(pattern);
  }
}

const createEmptyRectangle = function(height,width){
  for(let row=1; row<=height; row++){
    let pattern = generateSpaces(width);
    if(row == 1 || row == height){
      pattern = generateStars(width);
    }
    console.log(pattern);
  }
}

const createAlternatingRectangle = function(height,width){
  for(let row=1; row<=height; row++){
    let pattern = generateStars(width);
    if(row % 2 == 1){
      pattern = generateDashes(width);
    }
    console.log(pattern);
  }
}

const selectRectangleType = function(rectangleType){
  let printPattern;
  if(rectangleType == "filled"){
    printPattern = createFilledRectangle(height,width);
  }
  if(rectangleType == "empty"){
    printPattern = createEmptyRectangle(height,width);
  }
  if(rectangleType == "alternating"){
    printPattern = createAlternatingRectangle(height,width);
  }
  return printPattern;
}

let generatePattern = selectRectangleType(rectangleType);
