$(document).ready(function(){
  // ПОЯВЛЕНИЕ
  $(".shapesCont").css({
    'opacity': '100%',
  });

  // JQUERY UI DRAGGABLE
  $(function(){
    $("#draggable1").draggable();
    $("#draggable2").draggable();
    $("#draggable3").draggable();
    $("#draggable4").draggable();
    $("#draggable5").draggable();
    $("#draggable6").draggable();
  });

  // ПОДСКАЗКА
  $(function(){
    $(".hintButton").mousedown(function(){
      $(".shapeHint").css("opacity","100%");
    });
    $(".hintButton").mouseup(function(){
      $(".shapeHint").css("opacity","0%");
    });
  });

  // ПРЕСС
  $(function(){
    $(".shapesPath").mousedown(function(){
      $(this).removeClass("shapesPath");
      $(this).addClass("objectColorClick");
    });
    $(".shapesPath").mouseup(function(){
      $(this).addClass("shapesPath");
      $(this).removeClass("objectColorClick");
    });
  });

  // ПРЕСС Z-INDEX
  $(function () {
    let z = 1;
    $('.shapes').mousedown(function () {
      z += 1;
      $(this).css("z-index",z);
    });
  });

  // АБСОЛЮТНОЕ ПОЗИЦИОНИРОВАНИЕ ПОСЛЕ ЗАГРУЗКИ
  $(function () {
    $('.r1').mousedown(function () {
      $(this).css("position","relative");
    });
    $('.r1').mouseup(function () {
      $(this).css("position","absolute");
    });

    $('.r2').mousedown(function () {
      $(this).css("position","relative");
    });
    $('.r2').mouseup(function () {
      $(this).css("position","absolute");
    });

    $('.r3').mousedown(function () {
      $(this).css("position","relative");
    });
    $('.r3').mouseup(function () {
      $(this).css("position","absolute");
    });

    $('.r4').mousedown(function () {
      $(this).css("position","relative");
    });
    $('.r4').mouseup(function () {
      $(this).css("position","absolute");
    });

    $('.r5').mousedown(function () {
      $(this).css("position","relative");
    });
    $('.r5').mouseup(function () {
      $(this).css("position","absolute");
    });

    $('.r6').mousedown(function () {
      $(this).css("position","relative");
    });
    $('.r6').mouseup(function () {
      $(this).css("position","absolute");
    });
  });

  // ВРАЩЕНИЕ 1
  $(function () {
    let rot = 58;
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
    let rot = 302;
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
    let rot = 118;
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
});
