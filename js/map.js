// ПЕРЕМЕЩЕНИЕ МАКЕТА ОТНОСИТЕЛЬНО МЫШИ
  let container = document.querySelector('.container');
  let canvas = document.querySelector('.canvas');
  container.addEventListener('mousemove', (e) => {
    let x = e.clientX - container.getBoundingClientRect().left;
    let y = e.clientY - container.getBoundingClientRect().top;
    canvas.style.transform = `translate(-${x}px, -${y*1.5}px)`;
  })

// НАВЕДЕНИЕ НА ЛОГОТИП НА ГЛАВНОМ ЭКРАНЕ
  $(document).ready(function(){
    $(".logoBorder").mouseenter(function(){
      $(".canvas").css({
        'transform': 'scale(0.5) translateX(-100%) translateY(-105%)',
        'transition': 'transform 0.4s ease-in-out'
      });
      $("body").addClass("orangeBack");
      $(".dragPreviewItems").addClass("yellowFill");
      $(".drawPreviewItem").addClass("yellowFill");
      $(".dirtPreviewItem").addClass("yellowFill");
      $(".blackHole").addClass("whiteBack");
    });
    $(".logoBorder").mouseleave(function(){
      $(".canvas").css({
        'transform': 'scale(1)',
        'transition': 'transform 2s ease-out'
      });
      $("body").removeClass("orangeBack");
      $(".dragPreviewItems").removeClass("yellowFill");
      $(".drawPreviewItem").removeClass("yellowFill");
      $(".dirtPreviewItem").removeClass("yellowFill");
      $(".blackHole").removeClass("whiteBack");
    });
  });

// НАВЕДЕНИЕ НА ФИГУРУ → ОРАНЖЕВЫЙ ФОН + ПОЯВЛЕНИЕ ЗАГОЛОВКА + СКРЫТИЕ ОСТАЛЬНЫХ ФИГУР
  $(document).ready(function(){
    $(".imgMainPage").hover(function(){
      $("body").addClass("orangeBack");
      $(".labelsMainPage").css("opacity","100");
    },function(){
      $("body").removeClass("orangeBack");
      $(".labelsMainPage").css("opacity","0");
    });
  });
  $(document).ready(function(){
    $(".dragPreview").hover(function(){
      $(".labelsMainPage").addClass("labelsMainPageDrag");
      $(".dirtPreview").addClass("ZEROOPACITY");
      $(".drawPreview").addClass("ZEROOPACITY");
      $(".blackHole").addClass("ZEROOPACITY");
    },function(){
      $(".labelsMainPage").removeClass("labelsMainPageDrag");
      $(".dirtPreview").removeClass("ZEROOPACITY");
      $(".drawPreview").removeClass("ZEROOPACITY");
      $(".blackHole").removeClass("ZEROOPACITY");
    });
  });
  $(document).ready(function(){
    $(".dirtPreview").hover(function(){
      $(".labelsMainPage").addClass("labelsMainPageDirt");
      $(".dragPreview").addClass("ZEROOPACITY");
      $(".drawPreview").addClass("ZEROOPACITY");
      $(".blackHole").addClass("ZEROOPACITY");
    },function(){
      $(".labelsMainPage").removeClass("labelsMainPageDirt");
      $(".dragPreview").removeClass("ZEROOPACITY");
      $(".drawPreview").removeClass("ZEROOPACITY");
      $(".blackHole").removeClass("ZEROOPACITY");
    });
  });
  $(document).ready(function(){
    $(".drawPreview").hover(function(){
      $(".dirtPreview").addClass("ZEROOPACITY");
      $(".dragPreview").addClass("ZEROOPACITY");
      $(".blackHole").addClass("ZEROOPACITY");
    },function(){
      $(".dirtPreview").removeClass("ZEROOPACITY");
      $(".dragPreview").removeClass("ZEROOPACITY");
      $(".blackHole").removeClass("ZEROOPACITY");
    });
  });

  // BLACK HOLES
  $(document).ready(function(){
    $(".blackHole").hover(function(){
      $("body").addClass("blackBack");
      $(".labelsMainPage").css("opacity","100");
    },function(){
      $("body").removeClass("blackBack");
      $(".labelsMainPage").css("opacity","0");
    });
  });
  $(document).ready(function(){
    $(".blackHole").hover(function(){
      $(".labelsMainPage").addClass("labelsMainPageHole");
      $(".drawPreview").addClass("ZEROOPACITY");
      $(".dirtPreview").addClass("ZEROOPACITY");
      $(".dragPreview").addClass("ZEROOPACITY");
    },function(){
      $(".labelsMainPage").removeClass("labelsMainPageHole");
      $(".drawPreview").removeClass("ZEROOPACITY");
      $(".dirtPreview").removeClass("ZEROOPACITY");
      $(".dragPreview").removeClass("ZEROOPACITY");
    });
  });
