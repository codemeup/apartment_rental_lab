var Person = require("./person");
var Building = require("../rental_property/building");

function Manager(name, contact) {
  // inherit name and contact
  Person.call(this, name, contact);
  // manager manages an 'array' of buildings
  this.buildings = [];
}

// Set prototype and constructor
Manager.prototype = new Person();
Manager.prototype.constructor = Manager;

Manager.prototype.addBuilding = function(building) {
  // check if building is an INSTANCEOF a Building
  if(building instanceof Building && this.buildings.indexOf(building) === -1) 
    this.buildings.push(building);
  return this;
};

Manager.prototype.removeBuilding = function(building) {
  // remove building
  if(building instanceof Building && this.buildings.indexOf(building) !== -1) 
    this.buildings.splice(this.buildings.indexOf(building), 1);
  return this;
};

module.exports = Manager;