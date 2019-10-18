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
    }
});

$(function () {
  $('.masonry__link').Chocolat();
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

// выпадающее меню
$('.dropdown').click(function(){
    $(this).find('.dropdown-content').slideToggle(400);
});
