// ГЛАЗА
$(document).ready(function(){
  $(".persMoveArea").mousemove(function(event) {
    let eye1 = $(".eye1");
    let x = (eye1.offset().left) + (eye1.width() / 2);
    let y = (eye1.offset().top) + (eye1.height() / 2);
    let rad = Math.atan2(event.pageX - x, event.pageY - y);
    let rot = (rad * (180 / Math.PI) * -1);
    eye1.css({
      '-webkit-transform': 'rotate(' + rot + 'deg)',
      '-moz-transform': 'rotate(' + rot + 'deg)',
      '-ms-transform': 'rotate(' + rot + 'deg)',
      'transform': 'rotate(' + rot + 'deg)'
    });
  });
})
$(document).ready(function(){
  $(".persMoveArea").mousemove(function(event) {
    let eye2 = $(".eye2");
    let x = (eye2.offset().left) + (eye2.width() / 2);
    let y = (eye2.offset().top) + (eye2.height() / 2);
    let rad = Math.atan2(event.pageX - x, event.pageY - y);
    let rot = (rad * (180 / Math.PI) * -1);
    eye2.css({
      '-webkit-transform': 'rotate(' + rot + 'deg)',
      '-moz-transform': 'rotate(' + rot + 'deg)',
      '-ms-transform': 'rotate(' + rot + 'deg)',
      'transform': 'rotate(' + rot + 'deg)'
    });
  });
})


// НАВЕДЕНИЕ → ОРАНЖЕВЫЙ ФОН
$(document).ready(function(){
  $(".persBody").hover(function(){
    $("body").addClass("orangeBack");
  },function(){
    $("body").removeClass("orangeBack");
  });
});


// КЛИК → БОЛЬШИЕ ЗРАЧКИ
$(document).ready(function(){
  $(".persBody").click(function(){
    $(".eye1").toggleClass("bigEyes");
    $(".eye2").toggleClass("bigEyes");
  });
});


// ПРЕСС
$(document).ready(function(){
  $(".persBody").mousedown(function(){
    $(this).removeClass("persBody");
    $(this).addClass("objectColorClick");
  });
  $(".persBody").mouseup(function(){
    $(this).addClass("persBody");
    $(this).removeClass("objectColorClick");
  });
});
