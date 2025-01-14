// review-1
$(document).on("ready", function () {
  $(".navbar-toggler").click(function () {
    $("body").toggleClass("no-scroll");
    $(this).toggleClass("show-cross");
  });

  $(".review-slider").slick({
    dots: false,
    vertical: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    infinite: true,
    prevArrow: $(".slick-prev"), // Link custom button for previous
    nextArrow: $(".slick-next"), // Link custom button for next
    centerMode: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1470,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "90px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "90px",
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Update progress bar on slide change
  $(".review-slider").on("afterChange", function (event, slick, currentSlide) {
    let slideCount = slick.slideCount;
    let progressPercentage = ((currentSlide + 1) / slideCount) * 100;

    $(".progress-bar").css("width", progressPercentage + "%");
    $("#current-slide").text(currentSlide + 1);
  });

  // Initialize progress bar width on load
  let initialSlideCount = $(".review-slider").slick("getSlick").slideCount;
  let initialProgressPercentage = (1 / initialSlideCount) * 100;
  $(".progress-bar").css("width", initialProgressPercentage + "%");

  let totalSlides = $(".review-slider").slick("getSlick").slideCount;
  $("#total-slides").text(totalSlides);
  $("#current-slide").text(1); // Set to first slide initially
});

$(document).on("ready", function () {
  $(".wc_slick").slick({
    dots: true,
    arrows: false,
    vertical: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    infinite: true,
    centerMode: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1470,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "90px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "90px",
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

//second-review

$(document).on("ready", function () {
  $(".review-slider-gey").slick({
    dots: false,
    vertical: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    infinite: true,
    centerMode: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1470,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "90px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "90px",
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// section-5 combo slide

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
