$(function () {
  $(".openbtn1").click(function () {
    $(this).toggleClass("active");
    $("#header__menu").toggleClass("panelactive");
  });

  $(".menu__list a").click(function () {
    $(".openbtn1").removeClass("active");
    $("#header__menu").removeClass("panelactive");
  });

  $(".reason__list1, .reason__list2").on("inview", function () {
    $(this).addClass("fadein");
  });
  $(".student,.student1").on("inview", function () {
    $(this).addClass("inview");
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
