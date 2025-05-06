/**
 * Post Slider
 */
document.addEventListener("DOMContentLoaded", function () {
  const prevBtn = document.getElementById('prevSlide');
  const nextBtn = document.getElementById('nextSlide');
  const carousel = $('#postCarousel');
  if (prevBtn && nextBtn && carousel.length) {
    prevBtn.addEventListener('click', function () {
      carousel.carousel('prev');
    });

    nextBtn.addEventListener('click', function () {
      carousel.carousel('next');
    });

    carousel.swipe({
      swipe: function (event, direction) {
        if (direction === 'left') $(this).carousel('next');
        if (direction === 'right') $(this).carousel('prev');
      },
      allowPageScroll: "vertical",
      autoplay: false,
    });
     carouselCase.swipe({
      swipe: function (event, direction) {
        if (direction === 'left') $(this).carousel('next');
        if (direction === 'right') $(this).carousel('prev');
      },
      allowPageScroll: "vertical",
      autoplay: false,
    });
  }
});



/**
 * Services Slider
 */



document.addEventListener("DOMContentLoaded", function () {
  const prevBtn2 = document.getElementById('customPrev');
  const nextBtn2 = document.getElementById('customNext');
  const carousel2 = $('#servicesCarousel');
  if (prevBtn2 && nextBtn2 && carousel2.length) {
    prevBtn2.addEventListener('click', function () {
      carousel2.carousel('prev');
    });

    nextBtn2.addEventListener('click', function () {
      carousel2.carousel('next');
    });

    carousel2.swipe({
      swipe: function (_event, direction) {
        if (direction === 'left') $(this).carousel('next');
        if (direction === 'right') $(this).carousel('prev');
      },
      allowPageScroll: "vertical",
      autoplay: false,
    });
     carouselCase.swipe({
      swipe: function (_event, direction) {
        if (direction === 'left') $(this).carousel('next');
        if (direction === 'right') $(this).carousel('prev');
      },
      allowPageScroll: "vertical",
      autoplay: false,
    });
  }
});

/**
 * Case studies Slider
 */
document.addEventListener("DOMContentLoaded", function () {
  const carousel3 = $('#carouselCaseStudies');
  carousel3.swipe({
      swipe: function (_event, direction) {
        if (direction === 'left') $(this).carousel('next');
        if (direction === 'right') $(this).carousel('prev');
      },
      allowPageScroll: "vertical",
      autoplay: false,
    });
     carouselCase.swipe({
      swipe: function (_event, direction) {
        if (direction === 'left') $(this).carousel('next');
        if (direction === 'right') $(this).carousel('prev');
      },
      allowPageScroll: "vertical",
      autoplay: false,
    });
});

/**
 * Projects image Slider
 */

document.querySelectorAll('.card-body-project').forEach(container => {
    const foreground = container.querySelector('.foreground-image');
    const handle = container.querySelector('.slider-handle');
    let dragging = false;

    const slide = (x) => {
      const rect = container.getBoundingClientRect();
      let offsetX = x - rect.left;
      offsetX = Math.max(0, Math.min(offsetX, rect.width));
      const percent = (offsetX / rect.width) * 100;
      foreground.style.width = percent + '%';
      handle.style.left = percent + '%';
    };

    container.addEventListener('mousedown', () => dragging = true);
    container.addEventListener('mouseup', () => dragging = false);
    container.addEventListener('mouseleave', () => dragging = false);
    container.addEventListener('mousemove', (e) => {
      if (!dragging) return;
      slide(e.clientX);
    });

    container.addEventListener('touchstart', () => dragging = true);
    container.addEventListener('touchend', () => dragging = false);
    container.addEventListener('touchmove', (e) => {
      if (!dragging) return;
      slide(e.touches[0].clientX);
    });
  });
