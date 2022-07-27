// $(window).scroll(function () {
//   let scroll = $(window).scrollTop();
//   if (scroll >= $("#porfolio").offset().top) {
//     $("body").css("background-color", "black");
//   } else {
//     $("body").fadeIn().css("background-color", "white");
//   }
// });

let closingIconEl = $("#closing-icon-description-card");

closingIconEl.click(function () {
  $(this).parent().parent().removeClass("d-flex").addClass("d-none");
});
