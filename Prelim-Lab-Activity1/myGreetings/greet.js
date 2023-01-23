module.exports = function(firstPerson, secondPerson){

    this.firstPerson= firstPerson;
    this.secondPerson = secondPerson;
    this.greetThisPerson = function (){
        return 'Hello ' + this.firstPerson + ' and' + this.secondPerson;
        
    }


}