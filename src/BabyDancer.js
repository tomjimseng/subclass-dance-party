var BabyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="babyDancer" src="https://www.animatedimages.org/data/media/107/animated-dancing-image-0131.gif" border="0" alt="animated-dancing-image-0131" />');
  this.setPosition(top, left);
};

BabyDancer.prototype = Object.create(makeDancer.prototype);
BabyDancer.prototype.constructor = BabyDancer;