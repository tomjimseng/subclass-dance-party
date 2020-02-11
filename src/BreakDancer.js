var BreakDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left,timeBetweenSteps);
  this.$node = $('<img class="breakDancer" src="https://www.animatedimages.org/data/media/107/animated-dancing-image-0333.gif" border="0" alt="animated-dancing-image-0333" />');
  this.setPosition(top, left);
};

BreakDancer.prototype = Object.create(makeDancer.prototype);
BreakDancer.prototype.constructor = BreakDancer;
