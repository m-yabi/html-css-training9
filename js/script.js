$(function () {
  $(".openbtn1").click(function () {
    $(this).toggleClass("active");
    $("#header__menu").toggleClass("panelactive");
    $(".header__bg").toggleClass("is-active");
  });

  $(".header__menu__list a").click(function () {
    $(".openbtn1").removeClass("active");
    $("#header__menu").removeClass("panelactive");
    $(".header__bg").removeClass("is-active");
  });

  var pagetop = $("#page_top");
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $("body, html").animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    return false;
  });
});

$('a[href^="#"]').click(function () {
  var adjust = 80;
  var speed = 300;
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? "html" : href);
  var position = target.offset().top - adjust;
  $("body,html").animate({ scrollTop: position }, speed, "swing");
  return false;
});
