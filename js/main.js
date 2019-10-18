$('.hall.owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      }
    },
    onInitialized:slideOpacity,
    onTranslated:slideOpacity
});

$('.reviews__carousel.owl-carousel').owlCarousel({
  loop: true,
  nav: true,
  autoplay: true,
  margin: 92,
  autoWidth: true,
  navigationText: ["<img src='images/reviews/prev.png'>","<img src='images/reviews/next.png'>"],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
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
      items: 3
    },
    1000: {
      items: 5
    }
  }
});

// добавляем класс первому элементу с классом active
function slideOpacity(){
    $('.owl-carousel .owl-item.opacity').removeClass('opacity');
    $('.owl-carousel .owl-item.active').eq(0).addClass('first');
}
// выпадающее меню
$('.dropdown').click(function(){
    $(this).find('.dropdown-content').slideToggle(400);
});
// Заголовок в блоке "Услуги"
$('.services__item').hover(
  function(){
    $(this)
  }

);


$('.services__item').hover(
  function() {
    $( this ).find('.services__item-title').addClass('active');
  }, function() {
    $( this ).find('.services__item-title').removeClass('active');
  }
);