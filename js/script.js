$(function () {
  $(".openbtn1").click(function () {
    $(this).toggleClass("active");
    $("#header__menu").toggleClass("panelactive");
  });

  $(".menu__list a").click(function () {
    $(".openbtn1").removeClass("active");
    $("#header__menu").removeClass("panelactive");
  });
  var appear = false;
  var pagetop = $("#page_top");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      //700pxスクロールしたら
      if (appear == false) {
        appear = true;
        pagetop.stop().animate(
          {
            bottom: "25px", //下から50pxの位置に
          },
          300
        ); //0.3秒かけて現れる
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate(
          {
            bottom: "-25px", //下から-50pxの位置に
          },
          300
        ); //0.3秒かけて隠れる
      }
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
