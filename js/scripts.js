// business
function Places() {
  this.destinations = {};
  this.currentId = 0;
}

Places.prototype.assignId = function () {
  this.currentId +=1;
  return this.currentId;
}

Places.prototype.addDestination = function(destination) {
  destination.id = this.assignId();
  this.destinations[destination.id] = destination
}
Places.prototype.findDestination = function(id) {
  if (this.destinations[id] !== undefined) {
    return this.destinations[id];
  }
  return false;
};

function Destination (destinationName, location, timeOfYear) {
  this.destinationName = destinationName;
  this.location = location
  this.timeOfYear = timeOfYear
}

// mock database
let places = new Places();
let destination0 = new Destination("cancun");
let destination1 = new Destination("california");
places.addDestination(destination0);
places.addDestination(destination1);
destination0.id;
destination1.id;

// UI
function handleClick() {
  
}


function list(){
  const ulElement = document.createElement("ul");
  const liOne = document.createElement("li");
  const liTwo = document.createElement("li");
  liOne.append(destination0);
  liTwo.append(destination1);
}

element.addEventListener("click", function() {
  this.document.querySelector("linkToDisplay").addEventListener("click", handleClick);

});

