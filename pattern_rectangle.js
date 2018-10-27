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

const main = function(){
  let type = process.argv[2];
  let width = +process.argv[3];
  let height = +process.argv[4];
  let rectangle = selectRectangle(type,width,height); 
  console.log(rectangle);
}

main();
