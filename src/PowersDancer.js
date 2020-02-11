var PowersDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left,timeBetweenSteps);
};

PowersDancer.prototype = Object.create(makeDancer.prototype);
PowersDancer/prototype.constructor = PowersDancer;

PowersDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};

PowersDancer.prototype.lineUp = function() {
  this.$node.animate({
    top: $("body").height() * 0.3333
  });
}

