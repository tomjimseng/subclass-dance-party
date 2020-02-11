$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
    delegateEvent();
  });

$('.lineUpButton').on('click', function(event) {
  var length = window.dancers.length;
  var leftSide = window.dancers.slice(0, length / 2);
  var rightSide = window.dancers.slice(length / 2);

    var leftSideGroup = {
      top: 100,
      left: $("body").width() * 0.2
    };

    var rightSideGroup = {
      top: 100,
      left: $("body").width() * 0.7
    };

    function animatedLineup (arr, css) {
      arr.forEach(dancer => {
        css.top += 50;
        $(dancer.$node).animate(css);
      })
    }
    animatedLineup(leftSide, leftSideGroup);
    animatedLineup(rightSide, rightSideGroup);
  });

function delegateEvent() {
  $('img.jacksonDancer, img.babyDancer, img.breakDancer, span.dancer').mouseover(function(event) {
    $(this).effect('bounce', {distance: 100}, 500)
    event.stopImmediatePropagation();
  });
}


});