var JacksonDancer = function(top, left, timeBetweenSteps){
	Dancer.call(this, top, left, timeBetweenSteps);
};

JacksonDancer.prototype = Object.create(makeDancer.prototype);
JacksonDancer.prototype.constructor = JacksonDancer;

JacksonDancer.prototype.step = function() {
	makeDancer.prototype.step.call(this);
	this.$node.toggle();
}

JacksonDancer.prototype.lineUp = function() {
  this.$node.animate({
    top: $("body").height() * 0.3333
  });
}