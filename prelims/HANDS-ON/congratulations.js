module.exports = function (congrats) {
  this.greetThisPerson = function () {
    return 'Congatulations, ' + this.congrats;
  };
};
