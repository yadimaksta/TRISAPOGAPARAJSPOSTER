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

// КЛИК
$(document).ready(function(){
  $(".CLICKELEMENTS").hover(function(){
    $(".cursorLabel").addClass("cursorLabelClick");
  },function(){
    $(".cursorLabel").removeClass("cursorLabelClick");
  });
});
$(document).ready(function(){
  $(".CLICKELEMENTS").hover(function(){
    $(".cursor").addClass("cursorClick");
  },function(){
    $(".cursor").removeClass("cursorClick");
  });
});

$(document).ready(function(){
  $(".CLICKELEMENTSDISABLE").hover(function(){
    $(".cursorLabel").addClass("cursorLabelClickDis");
  },function(){
    $(".cursorLabel").removeClass("cursorLabelClickDis");
  });
});
$(document).ready(function(){
  $(".CLICKELEMENTSDISABLE").hover(function(){
    $(".cursor").addClass("cursorClicks");
  },function(){
    $(".cursor").removeClass("cursorClick");
  });
});

// РИСОВАЛКА
$(document).ready(function(){
  $("#draw").hover(function(){
    $(".cursorLabel").addClass("cursorLabelDraw");
  },function(){
    $(".cursorLabel").removeClass("cursorLabelDraw");
  });
});
$(document).ready(function(){
  $("#draw").hover(function(){
    $(".cursor").addClass("cursorDraw");
  },function(){
    $(".cursor").removeClass("cursorDraw");
  });
});

// ПЕРС
$(document).ready(function(){
  $(".persBody").hover(function(){
    $(".cursorLabel").addClass("cursorLabelClickAndMove");
  },function(){
    $(".cursorLabel").removeClass("cursorLabelClickAndMove");
  });
});
$(document).ready(function(){
  $(".persBody").hover(function(){
    $(".cursor").addClass("cursorClick");
  },function(){
    $(".cursor").removeClass("cursorClick");
  });
});

// ДРАГ НАВЕДЕНИЕ
$(document).ready(function(){
  $(".shapesPath").hover(function(){
    $(".cursorLabel").addClass("cursorLabelDragAndClick");
  },function(){
    $(".cursorLabel").removeClass("cursorLabelDragAndClick");
  });
});
$(document).ready(function(){
  $(".shapesPath").hover(function(){
    $(".cursor").addClass("cursorClick");
  },function(){
    $(".cursor").removeClass("cursorClick");
  });
});

// ГРЯЗЬ НАВЕДЕНИЕ
$(document).ready(function(){
  $(".dirt").hover(function(){
    $(".cursorLabel").addClass("cursorLabelClick");
  },function(){
    $(".cursorLabel").removeClass("cursorLabelClick");
  });
});
$(document).ready(function(){
  $(".dirt").hover(function(){
    $(".cursor").addClass("cursorClick");
  },function(){
    $(".cursor").removeClass("cursorClick");
  });
});
