$(function() {
  // Slick for case studies slider
  $('.case-studies-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    dots: false,
    draggable: true,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  });
/* Services */
  $('.slick-services').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 }
      }
    ]
  });

  $('#customPrev').on('click', function() {
    $(' .slick-services').slick('slickPrev');
  });

  $('#customNext').on('click', function() {
    $(' .slick-services').slick('slickNext');
  });
/* /blogs slider */
  var $slider = $('.blogs-slider');

  $slider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: false,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  });

  $('#prevSlide').on('click', function() {
    $slider.slick('slickPrev');
  });

  $('#nextSlide').on('click', function() {
    $slider.slick('slickNext');
  });
});
