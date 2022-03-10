// ПОЗИЦИОНИРОВАНИЕ КУРСОРА
$(document).mousemove(function(e){
  $(".cursor").css({left: e.clientX, top: e.clientY})
  setTimeout(function(){
    $(".cursorLabel").css({left: e.clientX, top: e.clientY})
  }, 20)
})


// ЛОГО КЛИК
$(document).ready(function(){
  $(".logoBorder").hover(function(){
    $(".cursorLabel").addClass("cursorLabelClick");
  },function(){
    $(".cursorLabel").removeClass("cursorLabelClick");
  });
});
$(document).ready(function(){
  $(".logoBorder").hover(function(){
    $(".cursor").addClass("cursorClick");
  },function(){
    $(".cursor").removeClass("cursorClick");
  });
});

// ЛОГО ПРЕСС
$(document).ready(function(){
  $(".logoBorder").mousedown(function(){
    $(this).removeClass("logoBorderHover");
    $(this).addClass("objectColorClickBGCOLOR");
    $(".logo").addClass("logoClick");
  });
  $(".logoBorder").mouseup(function(){
    $(this).addClass("logoBorderHover");
    $(this).removeClass("objectColorClickBGCOLOR");
    $(".logo").removeClass("logoClick");
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


// ДРАГ
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
