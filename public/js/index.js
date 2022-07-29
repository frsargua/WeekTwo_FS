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
openingTag.click(function (e) {
  let indetifierIdSelector = $(e.currentTarget)
    .closest(".card-One")
    .attr("identifier");

  $(`#${indetifierIdSelector}`).css({
    height: "100vh",
    width: "100vw",
    transition: "all 400ms",
  });
  $("html").css({
    overflow: "hidden",
  });
});
