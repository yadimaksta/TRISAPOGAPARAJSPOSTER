// JQUERY UI DRAGGABLE
$(function(){
  $("#draggable1").draggable();
  $("#draggable2").draggable();
  $("#draggable3").draggable();
  $("#draggable4").draggable();
  $("#draggable5").draggable();
  $("#draggable6").draggable();
});


// ПРЕСС
$(document).ready(function(){
  $(".shapesPath").mousedown(function(){
    $(this).removeClass("shapesPath");
    $(this).addClass("objectColorClick");
  });
  $(".shapesPath").mouseup(function(){
    $(this).addClass("shapesPath");
    $(this).removeClass("objectColorClick");
  });
});


// ВРАЩЕНИЕ 1
$(function () {
  let rot = -62;
  $('.r1').click(function () {
    rot += 30;
    $(this).css({
      '-webkit-transform': 'rotate(' + rot + 'deg)',
      '-moz-transform': 'rotate(' + rot + 'deg)',
      '-ms-transform': 'rotate(' + rot + 'deg)',
      'transform': 'rotate(' + rot + 'deg)'
    });
  });
});

// ВРАЩЕНИЕ 2
$(function () {
  let rot = -118;
  $('.r2').click(function () {
    rot += 30;
    $(this).css({
      '-webkit-transform': 'rotate(' + rot + 'deg)',
      '-moz-transform': 'rotate(' + rot + 'deg)',
      '-ms-transform': 'rotate(' + rot + 'deg)',
      'transform': 'rotate(' + rot + 'deg)'
    });
  });
});

// ВРАЩЕНИЕ 3
$(function () {
  let rot = -122;
  $('.r3').click(function () {
    rot += 30;
    $(this).css({
      '-webkit-transform': 'rotate(' + rot + 'deg)',
      '-moz-transform': 'rotate(' + rot + 'deg)',
      '-ms-transform': 'rotate(' + rot + 'deg)',
      'transform': 'rotate(' + rot + 'deg)'
    });
  });
});

// ВРАЩЕНИЕ 4
$(function () {
  let rot = -152;
  $('.r4').click(function () {
    rot += 30;
    $(this).css({
      '-webkit-transform': 'rotate(' + rot + 'deg)',
      '-moz-transform': 'rotate(' + rot + 'deg)',
      '-ms-transform': 'rotate(' + rot + 'deg)',
      'transform': 'rotate(' + rot + 'deg)'
    });
  });
});

// ВРАЩЕНИЕ 5
$(function () {
  let rot = -43;
  $('.r5').click(function () {
    rot += 30;
    $(this).css({
      '-webkit-transform': 'rotate(' + rot + 'deg)',
      '-moz-transform': 'rotate(' + rot + 'deg)',
      '-ms-transform': 'rotate(' + rot + 'deg)',
      'transform': 'rotate(' + rot + 'deg)'
    });
  });
});

// ВРАЩЕНИЕ 6
$(function () {
  let rot = 118;
  $('.r6').click(function () {
    rot += 30;
    $(this).css({
      '-webkit-transform': 'rotate(' + rot + 'deg)',
      '-moz-transform': 'rotate(' + rot + 'deg)',
      '-ms-transform': 'rotate(' + rot + 'deg)',
      'transform': 'rotate(' + rot + 'deg)'
    });
  });
});
