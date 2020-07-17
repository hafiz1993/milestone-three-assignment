
// function feetToMile

function feetToMile(feet){
    var mile = feet * 0.000189394;
    return mile;
}
var result = feetToMile(31680); // Enter feet here
console.log(result);


// function woodCalculator

function woodCalculator(chair, table, bed){
  var chairWoodCount = chair * 1;
  var tableWoodCount =  table * 3;
  var bedWoodCount = bed * 5;
  var totalWood = chairWoodCount + tableWoodCount + bedWoodCount;
  return totalWood;
}
var result = woodCalculator(10, 4, 20);
console.log(result);


// function tinyFriend

function tinyFriend(numbers){
 
  var tiny =numbers[0];
  for(var i=0; i<numbers.length; i++){
       var friList = numbers[i];
    if(friList.length < tiny.length){
          tiny = friList;
         
      }
  }

return tiny;
}

var friendsList = [ 'hd', 'hafiz', 'roman', 'rafsan'];

console.log(tinyFriend(friendsList));




// Brick Calculator

function brickCalculator(n){

  var firstFloor, secondFloor, thirdFloor
  
  if(n <= 10){
  
    return firstFloor = 15000 * n;
  
  }else if(n >= 11 && n <= 20 ){
  
      return secondFloor = 12000 * n;
  
  }else{
      return thirdFloor = 10000 * n;
  }
  }
  
   console.log(brickCalculator(45));