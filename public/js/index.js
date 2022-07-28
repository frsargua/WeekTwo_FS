$(window).scroll(function () {
  let scroll = $(window).scrollTop();
  if (scroll >= $("#porfolio").offset().top) {
    $("body").css("background-color", "black");
  } else {
    $("body").fadeIn().css("background-color", "white");
  }
});

let closingIconEl = $(".closing-icon-description-card");
let openingTag = $(".card-One");

closingIconEl.click(function () {
  $(this).parent().parent().css({ height: "0vh" });
  $("html").css({
    overflow: "auto",
  });
});
openingTag.click(function () {
  $(this).siblings().css({ height: "100vh", transition: "all 400ms" });
  $("html").css({
    overflow: "hidden",
  });
});
