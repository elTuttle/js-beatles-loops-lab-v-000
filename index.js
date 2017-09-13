const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function theBeatlesPlay(musicians,instruments){
  var newArray = []
  for(var i = 0; i < musicians.length; i++){
    newArray.push(musicians[i] + " plays " + instruments[i])
  }
  return newArray
}

function johnLennonFacts(factsArray){
  var i = 0;
  var johnLennonFacts = []
  while(i < factsArray){
    johnLennonFacts.push(factsArray[i] + "!!!")
    i++;
    console.log(johnLennonFacts[i])
  }
  return johnLennonFacts
}

johnLennonFacts(facts)