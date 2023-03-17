$(function () {
  $(".openbtn1").click(function () {
    $(this).toggleClass("active");
    $("#header__menu").toggleClass("panelactive");
    $("header").toggleClass("panelactive");
    $(".header__bg").toggleClass("is-active");
  });

  $(".header__menu__list a").click(function () {
    $(".openbtn1").removeClass("active");
    $("header").removeClass("panelactive");
    $("#header__menu").removeClass("panelactive");
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

const swiper = new Swiper(".swiper", {
  // 無限ループにするか
  loop: true,
  allowTouchMove: false,

  // ふわっとなるスピード
  speed: 1000,

  // 自動再生
  autoplay: {
    // 次のスライドに切り替わる速さ
    delay: 5000,
  },

  // フェードにしたい場合はこれを入れるだけ！
  effect: "fade",
});
