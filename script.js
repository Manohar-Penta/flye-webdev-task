$(document).ready(function () {
  $("img").hide();
  $("img").each(function () {
    if (this.complete) {
      $(this).fadeIn();
    } else {
      $(this).on("load", function () {
        $(this).fadeIn();
      });
    }
  });
});

document.querySelector(".popup-button").addEventListener("click", function () {
  $(".popup").fadeIn(300);
  $(".popup").css("display", "flex");
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    $(".popup").css("display", "none");
  }
});

$(document).ready(function () {
  const $container = $(".slides");
  const $dots = $(".dot");
  highlightDots();

  $dots.on("click", function () {
    const scrollPercent = $(this).data("scroll");
    const scrollPosition =
      ($container[0].scrollWidth - $container.width()) *
      (parseInt(scrollPercent) / 100);
    $container.animate({ scrollLeft: scrollPosition }, 300);
  });

  $container.on("scroll", highlightDots);

  function highlightDots() {
    const scrollLeft = $container.scrollLeft();
    const maxScrollLeft = $container[0].scrollWidth - $container.width();
    const scrollPercent = (scrollLeft / maxScrollLeft) * 100;

    $dots.each(function () {
      const dotScrollPercent = $(this).data("scroll");
      if (
        scrollPercent >= dotScrollPercent - 23.5 &&
        scrollPercent < dotScrollPercent + 23.5
      ) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });
  }
});

$(".section4 .contents .content").click(function () {
  $(".content").each(function () {
    $(this).removeClass("active");
  });
  $(this).toggleClass("active");
  let img = $(this).data("img");
  $("#fruits").attr("src", img);
});

$(".popup").click(function (event) {
  console.log(event.target, $(".popup form")[0]);
  if (event.target == $(".popup")[0]) {
    $(".popup").fadeOut(300);
    // $(".popup").css("display", "none");
  }
});
