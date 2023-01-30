$(window).scroll(function () {
  if ($("#navbar").offset().top > 50) {
    $("#navbar").addClass("bg-light");
    $("a.link-nav").addClass("link-nav-scroll");
  } else {
    $("#navbar").removeClass("bg-light");
    $("a.link-nav").removeClass("link-nav-scroll");
  }
});
