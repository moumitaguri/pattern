let triangleType = process.argv[2];
let height = +process.argv[3];

const generateSymbols = function(number,symbol){
  let row = ""; 
  for(let position=1; position<= number; position++){
    row += symbol;
  }
  return row;
}

const createLeftAlignedPattern = function(height){
  let trianglePattern = "";
  let delimiter = "";
  for(let lineNumber=1; lineNumber<=height; lineNumber++){
    let pattern = generateSymbols(lineNumber,"*");
    trianglePattern += delimiter+pattern;
    delimiter = "\n";
  }
  return trianglePattern;
}

const createRightAlignedPattern = function(height){
  let delimiter = "";
  let trianglePattern = "";
  for(lineNumber=1; lineNumber<=height; lineNumber++){
    let pattern = generateSymbols(height-lineNumber," ");
    trianglePattern += delimiter+pattern;
    pattern = generateSymbols(lineNumber,"*");
    trianglePattern += pattern;
    delimiter = "\n";
  }
  return trianglePattern;
}

const selectTriangle = function(triangleType){
  let requiredPattern;
  if(triangleType == "left"){
    requiredPattern = createLeftAlignedPattern(height);
  }
  if(triangleType == "right"){
    requiredPattern = createRightAlignedPattern(height);
  }
  return requiredPattern;
}

let generatePattern = selectTriangle(triangleType);
console.log(generatePattern);
