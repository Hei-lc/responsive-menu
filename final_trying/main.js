$(document).ready(function() {
  let hamburgerClicked = false;
  $("#toggle").on("click", function() {
    if (hamburgerClicked == false) {
      $(".top").css(
        "transform",
        "translateY(11px) translateX(0) rotate(45deg)"
      );
      $(".middle").css("display", "none");
      $(".bottom").css(
        "transform",
        "translateY(-11px) translateX(0) rotate(-45deg)"
      );

      hamburgerClicked = true;
    } else {
      $(".top").css("transform", "translateY(0px) translateX(0) rotate(0deg)");
      $(".middle").css("display", "");
      $(".bottom").css(
        "transform",
        "translateY(0px) translateX(0) rotate(0deg)"
      );
      hamburgerClicked = false;
    }
    $("#overlay").toggleClass("active");
  });
});

