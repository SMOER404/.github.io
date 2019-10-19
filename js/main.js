// Modal
$(function () {
  $('.masonry__link').Chocolat();
});
$('.js-phone-mask').mask("+7(000) 000-0000");
// Carousel
$('.hall.owl-carousel').owlCarousel({
  loop: true,
  nav: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1,
      nav: false,
      dots: true
    },
    1000: {
      items: 3
    }
  }
});
$('.reviews__carousel.owl-carousel').owlCarousel({
  loop: true,
  nav: true,
  autoplay: true,
  margin: 95,
  autoWidth: true,
  navigationText: ["<img src='images/reviews/prev.png'>","<img src='images/reviews/next.png'>"],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2,
      margin: 95,
      nav: false,
      slideBy: 2
    },
    1024: {
      items: 3
    }
  }
});
$('.clients__carousel.owl-carousel').owlCarousel({
  loop: true,
  nav: false,
  autoplay: true,
  margin: 130,
  autoWidth: true,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 4,
      dots: false,
      margin: 78
    },
    1000: {
      items: 5
    }
  }
});
// Modal
$(".show").on("click", function(){
  $(".mask").addClass("active");
});
function closeModal(){
  $(".mask").removeClass("active");
}
$(".close, .mask").on("click", function(){
  closeModal();
});
$(document).keyup(function(e) {
  if (e.keyCode == 27) {
    closeModal();
  }
});
// QUIZ
function startQuizz() {
  var nextBtn = $('button[data-action="quiz__next"]');
  var prevBtn = $('button[data-action="quiz__prev"]');
  var submitBtn = $('button[data-action="quiz-submit"]');
  var quizForm = $('#quiz__form');
  var dots = $('.dots');
  var quizItems = $('[data-quiz]');
  var quizLength = quizItems.length;
  var currentQuestion = 1;
  var nextBtnText = nextBtn.text();

  function checkButtons() {

    function checkFirstQuestion() {
      if(currentQuestion == 1) {
          prevBtn.hide();
      } else {
          prevBtn.show();
      }
    }
    function checkLastQuestion() {
        if(currentQuestion == quizLength) {
          $('.quiz__control').hide();
          $('.quiz__header').hide();
          // setTimeout(function () { 
          //   location.reload();
          // }, 30 * 1000);
      } else {
          submitBtn.hide();
          nextBtn.show();
      }
    }
    function checkSevenQuestion() {
      if (currentQuestion == 7) {
        nextBtnText = "";
        nextBtn.text('Ввести контакты');
        nextBtn.css('width', '160px');
        $('.quiz__control-dots').hide();
      }
    }
    function checkEightQuestion() {
      if (currentQuestion == 8) {
        nextBtnText = "";
        nextBtn.text('Отправить заявку');
        nextBtn.css('width', '160px');
        $('.quiz__control-dots').hide();
        $('.quiz__header').hide();
      } 
    }
    checkFirstQuestion();
    checkLastQuestion();
    checkSevenQuestion();
    checkEightQuestion();
  }
  
  function nextQestion() {
    if(currentQuestion !== 7 || currentQuestion !==8){
      nextBtnText == "Далее";
    }
      currentQuestion++;
      changeQuestion();
  }
  
  function prevQestion() {
      if(currentQuestion > 1) {
        currentQuestion--;
        changeQuestion();
       }
  }    
  
  function changeQuestion() {
      checkButtons();
      quizItems.hide();
      dots.removeClass('active');
      $('[step="'+ currentQuestion +'"]').addClass('active');
      $('[data-quiz="'+ currentQuestion +'"]').css({'display': 'flex'});
  }
  
  //общие обработчики для частей квиза
  nextBtn.on('click', nextQestion);
  prevBtn.on('click', prevQestion);
  
  //отправка формы
  quizForm.on('submit', function() {
      var th = $(this);
      $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
      }).done(function() {
      alert("Спасибо за заявку, наш менеджер свяжется с Вами в ближайшее время!");
      setTimeout(function() {
      // Done Functions
      th.trigger("reset");
      }, 1000);
      });
      return false;
  });
  
}
startQuizz();

function startMenu() {

  function showMenu() {
    $('.show-menu').click(function(){
      $('.navbar-mobile__menu').fadeIn(400);
      $('.navbar-mobile__top').hide();
    });
  }
  function hideMenu() {
    $('.navbar-mobile__menu-close').click(function(){
      $('.navbar-mobile__menu').hide();
      $('.navbar-mobile__top').fadeIn(400);
    });
  }
  showMenu();
  hideMenu();
}

startMenu();

