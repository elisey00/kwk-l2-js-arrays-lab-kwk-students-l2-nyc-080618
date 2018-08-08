// Write your solution here!
const drivers=[ 'Milo', 'Otis', 'Garfield' ];

function destructivelyAppendDriver(name){
  drivers.push(name);
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
}
function destructivelyRemoveFirstDriver(){
  drivers.shift();
}
function appendDriver(name){
  var newDrivers = drivers 
  var newArray= newDrivers.push(name) ;
  return newArray;
}