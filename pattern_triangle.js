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


const main = function(){
  let triangleType = process.argv[2];
  let height = +process.argv[3];
  let triangle = selectTriangle(triangleType,height);
  console.log(triangle);
}

main();
