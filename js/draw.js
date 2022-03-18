// КУРСОР КНОПКИ
$(document).ready(function(){
  $(".colorButton").hover(function(){
    $(".cursorLabel").addClass("cursorLabelClick");
  },function(){
    $(".cursorLabel").removeClass("cursorLabelClick");
  });
});
$(document).ready(function(){
  $(".colorButton").hover(function(){
    $(".cursor").addClass("cursorClick");
  },function(){
    $(".cursor").removeClass("cursorClick");
  });
});

// КУРСОР КНОПКИ → СМЕНА ЦВЕТА КУРСОРА
$(document).ready(function(){
  $(".cb01").click(function(){
    $(".cursor").css("background-color","#FD4E2B");
    $(".cursorLabel").css("background-color","#FD4E2B");
  });
  $(".cb02").click(function(){
    $(".cursor").css("background-color","#420CDB");
    $(".cursorLabel").css("background-color","#420CDB");
  });
  $(".cb03").click(function(){
    $(".cursor").css("background-color","black");
    $(".cursorLabel").css("background-color","black");
  });
});

// РИСОВАЛКА
let
  canvas, ctx,
  brush = {
    x: 0,
    y: 0,
    color: '#FD4E2B',
    size: 8,
    down: false,
  },
  strokes = [],
  currentStroke = null;
function redraw () {
  ctx.clearRect(0, 0, canvas.width(), canvas.height());
  ctx.lineCap = 'round';
  for (let i = 0; i < strokes.length; i++) {
    let s = strokes[i];
    ctx.strokeStyle = s.color;
    ctx.lineWidth = s.size;
    ctx.beginPath();
    ctx.moveTo(s.points[0].x, s.points[0].y);
    for (let j = 0; j < s.points.length; j++) {
      let p = s.points[j];
      ctx.lineTo(p.x, p.y);
    }
    ctx.stroke();
  }
}
function init () {
  canvas = $('#draw');
  canvas.attr({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  ctx = canvas[0].getContext('2d');
  function mouseEvent (e) {
    brush.x = e.pageX;
    brush.y = e.pageY;
    currentStroke.points.push({
      x: brush.x,
      y: brush.y,
    });
    redraw();
  }
  canvas.mousedown(function (e) {
    brush.down = true;
    currentStroke = {
      color: brush.color,
      size: brush.size,
      points: [],
    };
    strokes.push(currentStroke);
    mouseEvent(e);
  }).mouseup(function (e) {
      brush.down = false;
      mouseEvent(e);
    currentStroke = null;
  }).mousemove(function (e) {
    if (brush.down)
    mouseEvent(e);
  });
  $('.clearButton').click(function () {
    strokes = [];
    redraw();
  });
  $('.cb01').click(function () {
    brush.color = "#FD4E2B";
  });
  $('.cb02').click(function () {
    brush.color = "#420CDB";
  });
  $('.cb03').click(function () {
    brush.color = "black";
  });
}
$(init);
