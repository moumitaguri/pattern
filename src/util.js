const fetchPatternDetails = function(details){
  return { type : details[2], height : details[3], width : details[4] };
}


const repeatCharacters = function(number,symbol){
  let repeated = ""; 
  for(let position=1; position<= number; position++){
    repeated += symbol;
  }
  return repeated;
}

const repeatSpaces = function(times){
  return repeatCharacters(times," ");
}

const createLine = function(width,leftChar,middleChar,rightChar){
  let leftBorder = 1 % (width+1);
  let rightBorder = 1 % (width);
  let left = repeatCharacters(leftBorder,leftChar);
  let middle = repeatCharacters(width - 2,middleChar);
  let right = repeatCharacters(rightBorder,rightChar);
  return left + middle + right ;
}

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

const createLineGenerator = function(leftChar,middleChar,rightChar){
  return function(width){
    return createLine(width,leftChar,middleChar,rightChar);
  }
}

const centerJustify = function(text,width){
  let numberOfSpaces = (width - text.length)/2;
  let spaces = repeatSpaces(numberOfSpaces);
  return spaces + text + spaces;
}

const makeJustifiedLine = function(lineGenerator,width,justifiedWidth){
  let  line = lineGenerator(width);
  return centerJustify(line,justifiedWidth);
}

const mergeDiamondParts = function(head,upperHalf,middleLine,lowerHalf){
  let separator = "\n";
  let diamond = head;
  diamond = joinLines(diamond,upperHalf,separator);
  diamond = joinLines(diamond,middleLine,separator);
  diamond = joinLines(diamond,lowerHalf,separator);
  diamond = joinLines(diamond,head,separator);
  return diamond;
}

const filledLineGenerator = createLineGenerator("*","*","*");

const angledLineGenerator = createLineGenerator("/"," ","\\");
const lowerAngledLineGenerator = createLineGenerator("\\"," ","/");
const HollowLineGenerator = createLineGenerator("*"," ","*");

exports.repeatCharacters = repeatCharacters;
exports.createLine = createLine;
exports.joinLines = joinLines;
exports.rightJustify = rightJustify;
exports.leftJustify = leftJustify;
exports.createLineGenerator = createLineGenerator;
exports.filledLineGenerator = filledLineGenerator;
exports.HollowLineGenerator = HollowLineGenerator;
exports.fetchPatternDetails = fetchPatternDetails;
exports.centerJustify = centerJustify;
exports.makeJustifiedLine = makeJustifiedLine;
exports.mergeDiamondParts = mergeDiamondParts;
exports.angledLineGenerator = angledLineGenerator;
exports.lowerAngledLineGenerator =lowerAngledLineGenerator;
exports.repeatSpaces = repeatSpaces;
