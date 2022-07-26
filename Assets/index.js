$(window).scroll(function () {
  let scroll = $(window).scrollTop();
  if (scroll >= $("#porfolio").offset().top) {
    $("body").css("background-color", "black");
  } else {
    $("body").fadeIn().css("background-color", "white");
  }
});
