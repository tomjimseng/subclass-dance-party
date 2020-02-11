var SnoopDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

SnoopDancer.prototype = Object.create(makeDancer.prototype);
SnoopDancer.prototype.constructor = SnoopDancer;

SnoopDancer.prototype.step = function() {
	makeDancer.prototype.step.call(this);
	this.$node.toggle();
};

SnoopDancer.prototype.lineUp = function() {
  this.$node.animate({
    top: $("body").height() * 0.3333
  });
}