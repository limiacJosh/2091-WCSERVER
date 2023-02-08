module.exports = function(firstName, lastName){

  this.firstPerson= firstName;
  this.lastName = lastName;
  this.greetThisPerson = function (){
      return 'Hello, ' + this.firstName + this.lastName;
      
  }

