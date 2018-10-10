let diamondType = process.argv[2];
let height = process.argv[3];

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

let generatePattern = findRequiredPattern(diamondType,height);
console.log(generatePattern);
