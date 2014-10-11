var Person = require("./person.js");

function Tenant(name, contact, references) {
  // inherits name contact from Person
  Person.call(this, name, contact);
  // tennant has 'array' of references
  this.references = [];
}

// Set prototype and constructor
Tenant.prototype = new Person();
Tenant.prototype.constructor = Tenant; 

Tenant.prototype.addReference = function(reference){
  // add reference to references. Reference must be of type Person
  if(reference instanceof Person && this.references.indexOf(reference) === -1) 
    this.references.push(reference);
};

Tenant.prototype.removeReference = function(reference) {
  // remove reference from references.
  if(reference instanceof Person && this.references.indexOf(reference) !== -1) 
  this.references.splice(this.references.indexOf(reference), 1);
};

module.exports = Tenant;
