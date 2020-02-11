var JacksonDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="jacksonDancer" src="https://www.animatedimages.org/data/media/107/animated-dancing-image-0264.gif" border="0" alt="animated-dancing-image-0264" />');
  this.setPosition(top, left);
};

JacksonDancer.prototype = Object.create(makeDancer.prototype);
JacksonDancer.prototype.constructor = JacksonDancer;