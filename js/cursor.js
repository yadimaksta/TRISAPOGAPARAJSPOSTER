// ПОЗИЦИОНИРОВАНИЕ КУРСОРА + ПОЯВЛЕНИЕ
$(document).mousemove(function(e){
  $(".cursor").css({
    left: e.clientX,
    top: e.clientY,
    opacity: "100%",
  })
  setTimeout(function(){
    $(".cursorLabel").css({
      left: e.clientX,
      top: e.clientY,
      opacity: "100%",
    })
  }, 20)
})

$(document).ready(function(){
  // КЛИК
  $(".CLICKELEMENTS").hover(function(){
    $(".cursorLabel").addClass("cursorLabelClick");
  },function(){
    $(".cursorLabel").removeClass("cursorLabelClick");
  });
  $(".CLICKELEMENTS").hover(function(){
    $(".cursor").addClass("cursorClick");
  },function(){
    $(".cursor").removeClass("cursorClick");
  });
  $(".CLICKELEMENTSDISABLE").hover(function(){
    $(".cursorLabel").addClass("cursorLabelClickDis");
  },function(){
    $(".cursorLabel").removeClass("cursorLabelClickDis");
  });
  $(".CLICKELEMENTSDISABLE").hover(function(){
    $(".cursor").addClass("cursorClicks");
  },function(){
    $(".cursor").removeClass("cursorClick");
  });

  // РИСОВАЛКА
  $("#draw").hover(function(){
    $(".cursorLabel").addClass("cursorLabelDraw");
  },function(){
    $(".cursorLabel").removeClass("cursorLabelDraw");
  });
  $("#draw").hover(function(){
    $(".cursor").addClass("cursorDraw");
  },function(){
    $(".cursor").removeClass("cursorDraw");
  });

  // ПЕРС
  $(".persBody").hover(function(){
    $(".cursorLabel").addClass("cursorLabelClickAndMove");
  },function(){
    $(".cursorLabel").removeClass("cursorLabelClickAndMove");
  });
  $(".persBody").hover(function(){
    $(".cursor").addClass("cursorClick");
  },function(){
    $(".cursor").removeClass("cursorClick");
  });

  // ДРАГ НАВЕДЕНИЕ
  $(".shapesPath").hover(function(){
    $(".cursorLabel").addClass("cursorLabelDragAndClick");
  },function(){
    $(".cursorLabel").removeClass("cursorLabelDragAndClick");
  });
  $(".shapesPath").hover(function(){
    $(".cursor").addClass("cursorClick");
  },function(){
    $(".cursor").removeClass("cursorClick");
  });

  // ГРЯЗЬ НАВЕДЕНИЕ
  $(".dirt").hover(function(){
    $(".cursorLabel").addClass("cursorLabelClick");
  },function(){
    $(".cursorLabel").removeClass("cursorLabelClick");
  });
  $(".dirt").hover(function(){
    $(".cursor").addClass("cursorClick");
  },function(){
    $(".cursor").removeClass("cursorClick");
  });
});
