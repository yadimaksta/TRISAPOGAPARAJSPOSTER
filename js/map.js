// ПОЯВЛЕНИЕ
$(document).ready(function(){
  $(".container").mousemove(function(){
    $(".container").css({
      'opacity': '100%',
    });
  });
});

// ПЕРЕМЕЩЕНИЕ ВЬЮПОРТА
let container = document.querySelector('.container');
let canvas = document.querySelector('.canvas');
container.addEventListener('mousemove', (e) => {
  let x = e.clientX - container.getBoundingClientRect().left;
  let y = e.clientY - container.getBoundingClientRect().top;
  canvas.style.transform = `translate(-${x*1}px, -${y*1}px)`;
})

// НАВЕДЕНИЕ НА ЛОГОТИП НА ГЛАВНОМ ЭКРАНЕ
$(document).ready(function(){
  $(".logoBorder").mouseenter(function(){
    $(".canvas").css({
      'transform': 'scale(0.5) translateX(-100%) translateY(-100%)',
      'transition': 'transform 0.4s ease-in-out'
    });
  });
  $(".logoBorder").mouseleave(function(){
    $(".canvas").css({
      'transform': 'scale(1)',
      'transition': 'transform 2s ease-out'
    });
  });
});

// НАВЕДЕНИЕ → ОРАНЖЕВЫЙ ФОН + ПОЯВЛЕНИЕ НАДПИСИ
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
  },function(){
    $(".labelsMainPage").removeClass("labelsMainPageDrag");
  });
});
