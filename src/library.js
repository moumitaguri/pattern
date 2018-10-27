const repeatCharacters = function(number,symbol){
  let repeated = ""; 
  for(let position=1; position<= number; position++){
    repeated += symbol;
  }
  return repeated;
}

const createLine = function(width,leftChar,middleChar,rightChar){
  let leftBorder = 1 % (width+1);
  let rightBorder = 1 % (width);
  let left = repeatCharacters(leftBorder,leftChar);
  let middle = repeatCharacters(width - 2,middleChar);
  let right = repeatCharacters(rightBorder,rightChar);
  return left + middle + right ;
}

const createLineGenerator = function(leftChar,middleChar,rightChar){
  return function(width){
    return createLine(width,leftChar,middleChar,rightChar);
  }
}
const filledLineGenerator = createLineGenerator("*","*","*");
const HollowLineGenerator = createLineGenerator("*"," ","*");

const joinLines = function(previousLine,lineToJoin,separator){
  return previousLine  + separator + lineToJoin;
}

const rightJustify = function(text,width){
  let numberOfspaces = width - text.length;
  let spacesToAdd = repeatCharacters(numberOfspaces," ");
  return spacesToAdd + text ;
}
const leftJustify = function(text,width){
  return text;
}

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



//rectangle......
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


const selectRectangle = function(type,width,height){
  if(type == "filled"){
    return createFilledRectangle(width,height);
  }
  if(type == "empty"){
    return createHollowRectangle(width,height);
  }
}




//......diamond...
const repeat = function(symbol,times){
  let repeated = "";
  for(let position=1; position<=times; position++){
    repeated += symbol;
  }
  return repeated;
}

const repeatSpaces = function(times){
  return repeat(" ",times);
}

const repeatStars = function(times){
  return repeat("*",times);
}

/*const createFilledPattern = function(spaceNeeded,starNeeded){
  return repeatSpaces(spaceNeeded) + repeatStars(starNeeded);
}*/

const createFilledDiamond = function(height){
  let diamondPattern = "";
  let delimiter = "";
  let limit = height/2;
  for(let lineNumber=1; lineNumber<=limit; lineNumber++){
    spaceNeeded = limit - lineNumber;
    starNeeded = 2*lineNumber - 1;
    diamondPattern += delimiter + repeatSpaces(spaceNeeded) + repeatStars(starNeeded);
    delimiter = "\n";
   // diamondPattern += delimiter + repeatSpaceAndStar(spaceNeeded,starNeeded);
  }
  for(let lineNumber=limit-1; lineNumber>=1; lineNumber--){
    starNeeded = 2*lineNumber - 1;
    spaceNeeded = limit - lineNumber;
    diamondPattern += delimiter+repeatSpaces(spaceNeeded)+ repeatStars(starNeeded);
    delimiter = "\n";
  }
  return diamondPattern;
}

const createHollowPattern = function(limit,lineNumber){
  let createdPattern = "";
  let spaceLimit = 2*lineNumber-3;
  let pattern = repeatSpaces(limit-lineNumber);
  createdPattern += pattern;
  pattern = "*"+repeatSpaces(spaceLimit);
  if(spaceLimit>0){
    pattern += "*";
  }
  createdPattern += pattern;
  return createdPattern;
}

const createHollowDiamond = function(height){
  let diamondPattern = "";
  let delimiter = "";
  let limit = height/2;
  for(let lineNumber=1; lineNumber<=limit; lineNumber++){
    diamondPattern += delimiter+createHollowPattern(limit,lineNumber);
    delimiter = "\n";
  }
  for(let lineNumber=limit-1; lineNumber>=1; lineNumber--){
      diamondPattern += delimiter+createHollowPattern(limit,lineNumber);
      delimiter = "\n";
  }
  return diamondPattern;
}

const createAngledPattern = function(limit,lineNumber,char1,char2){
  let createdPattern = "";
  let spaceLimit = 2*lineNumber-3;
  let pattern = repeatSpaces(limit-lineNumber);
  createdPattern += pattern;
  pattern = char1;
  if(lineNumber == 1 || lineNumber == limit){
    pattern = "*";
  }
  pattern += repeatSpaces(spaceLimit);
  createdPattern += pattern;
  pattern = char2;
  if(lineNumber == 1){
    pattern = "";
  }
  if(lineNumber == limit){
    pattern = "*";
  }
  createdPattern += pattern;
  return createdPattern;
}

const createAngledDiamond = function(height){
  let diamondPattern = "";
  let delimiter = "";
  let limit = (height/2)+1;
  for(let lineNumber=1; lineNumber<=limit; lineNumber++){
    diamondPattern += delimiter+createAngledPattern(limit,lineNumber,"/","\\");
    delimiter = "\n";
  }
  for(let lineNumber=limit-1; lineNumber>=1; lineNumber--){
      diamondPattern += delimiter+createAngledPattern(limit,lineNumber,"\\","/");
      delimiter = "\n";
  }
  return diamondPattern;
}

const findRequiredPattern = function(diamondType,height){
  if(diamondType == "filled"){
     return createFilledDiamond(height);
  }
  if(diamondType == "hollow"){
    return createHollowDiamond(height);
  }
  if(diamondType == "angled"){
    return createAngledDiamond(height);
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
exports.createAngledDiamond = createAngledDiamond;
exports.createHollowDiamond = createHollowDiamond;
