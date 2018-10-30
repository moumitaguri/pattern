const { repeatCharacters, createLine, joinLines,
  rightJustify,leftJustify,createLineGenerator,
  filledLineGenerator,HollowLineGenerator,centerJustify,
  makeJustifiedLine,mergeDiamondParts,angledLineGenerator,
  repeatSpaces,lowerAngledLineGenerator
} = require('./util.js');

//............triangle..........//
const createTriangle = function(height,justifier){
  let trianglePattern = "";
  let separator = "";
  for(let lineNumber=1; lineNumber<=height; lineNumber++){
    let line = filledLineGenerator(lineNumber);
    let justifiedLine = justifier(line,height);
    trianglePattern = joinLines(trianglePattern,justifiedLine,separator);
    separator = "\n";
  }
  return trianglePattern;
}

const createLeftTriangle = function(height){
  return createTriangle(height,leftJustify);
}

const createRightTriangle = function(height){
  return createTriangle(height,rightJustify);
}

const selectTriangle = function(triangleType,height){
  if(triangleType == "left"){
    return createLeftTriangle(height);
  }
  if(triangleType == "right"){
    return createRightTriangle(height);
  }
}


//...........rectangle..........//
const createRectangle = function(width,height,topLineGen,middleLineGen,bottomLineGen){
  let separator = "\n";
  let rectangle = topLineGen(width);
  
  for(let lineNumber = 0; lineNumber < height - 2; lineNumber++){
    let middleLine = middleLineGen(width);
    rectangle =  joinLines(rectangle,middleLine,separator);
  }
  if(height < 2){
    return rectangle;
  }
  let bottomLine = bottomLineGen(width);
  return joinLines(rectangle,bottomLine,separator);
}

const createFilledRectangle = function(width,height){
  return createRectangle(width,height,filledLineGenerator,filledLineGenerator,filledLineGenerator);
}

const createHollowRectangle = function(width,height){
  return createRectangle(width,height,filledLineGenerator,HollowLineGenerator,filledLineGenerator);
}


const selectRectangle = function(type,height,width){
  if(type == "filled"){
    return createFilledRectangle(width,height);
  }
  if(type == "empty"){
    return createHollowRectangle(width,height);
  }
}

//............Diamond.............//
const createDiamond = function(height,headGen,upperGen,middleGen,lowerGen){
  let upperHalf = "";
  let lowerHalf = "";
  let separator = "";
  let head = makeJustifiedLine(headGen,1,height);
  for (let lineNumber = 3; lineNumber < height; lineNumber += 2){
    let justifiedUpper = makeJustifiedLine(upperGen,lineNumber,height);
    let justifiedLower = makeJustifiedLine(lowerGen,lineNumber,height);
    upperHalf = joinLines(upperHalf,justifiedUpper,separator);
    lowerHalf = joinLines(justifiedLower,lowerHalf,separator);
    separator = "\n";
  }
  let middleLine = makeJustifiedLine(middleGen,height,height);
  return mergeDiamondParts(head,upperHalf,middleLine,lowerHalf);
}

const createFilledDiamond = function(height){
  return createDiamond(height,filledLineGenerator,filledLineGenerator,filledLineGenerator,filledLineGenerator);
}

const createHollowDiamond = function(height){
  return createDiamond(height,filledLineGenerator,HollowLineGenerator,HollowLineGenerator,HollowLineGenerator);
}

const createAngled = function(height){
  return createDiamond(height,filledLineGenerator,angledLineGenerator,HollowLineGenerator,lowerAngledLineGenerator);
}

const findRequiredPattern = function(diamondType,height){
  if(diamondType == "filled"){
     return createFilledDiamond(height);
  }
  if(diamondType == "hollow"){
    return createHollowDiamond(height);
  }
  if(diamondType == "angled"){
    return createAngled(height);
  }
}


exports.selectTriangle = selectTriangle;
exports.selectRectangle = selectRectangle;
exports.findRequiredPattern = findRequiredPattern;
exports.createLeftTriangle = createLeftTriangle;
exports.createRightTriangle = createRightTriangle;
exports.createFilledRectangle = createFilledRectangle;
exports.createHollowRectangle = createHollowRectangle;
exports.createFilledDiamond = createFilledDiamond;
exports.createAngled = createAngled;
exports.createHollowDiamond = createHollowDiamond;
