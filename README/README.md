<!-- business -->
Describe: Places()
Test:It should create an empty constructor object for Destinations and IDs
Code:
function Places();
this.destinations = {};
this.currentId = 0;
Expected Output: Undefined

It should create a function that starts at 0 and increments by 1 
Describe: AssignId()
Test: It should create a function that starts at 0 and goes up by 1
Code:
Places.prototype.assignId = function () {
  this.currentId +=1;
  return this.currentId;
}
Expected Output: Undefined

Describe: Places.prototype.addDestination = function(destination)
Test: It should assign the above numbers to each destination as it's unique ID
Code:
Places.prototype.addDestination = function(destination) {
  destination.id = this.assignId();
  this.destinations[destination.id] = destination
}
Output: undefined

Describe: function Destination ()
Test: It should create an object with the following: Destination name, location, time of year, and notes
Code:
function Destination (destinationName) {
  this.destinationName = destinationName;
}
output: "destinationName"

Describe: findDestination ()
Test: It should find the destination id and return false if empty
Code: 
Places.prototype.findDestination = function(id) {
  if (this.destinations[id] !== undefined) {
    return this.destinations[id];
  }
  return false;
};
Output:id of selected input


<!-- UI -->
It should display each destination name
It should display properties of each destination object on click