const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians,instruments){
  var newArray = []
  for(var i = 0; i < musicians.length; i++){
    newArray.push(musicians[i] + " plays " + instruments[i])
  }
  return newArray
}

function johnLennonFacts(factsArray){
  var i = 0;
  var newArray = Array
  while(i < factsArray){
    newArray.push(factsArray[i] + "!!!")
    i++;
  }
  return newArray
}

