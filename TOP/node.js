fetch("header.html")
  .then((response) => response.text())
  .then((data) => document.querySelector("#header").innerHTML = data);

fetch("footer.html")
  .then((response) => response.text())
  .then((data) => document.querySelector("#footer").innerHTML = data);

$(function() {
  $('.schedule-slider').slick({
    autoplay: true, // 自動再生ON
    dots: true, // ドットインジケーターON
    centerMode: true, // 両サイドに前後のスライド表示
    centerPadding: '0px', // 左右のスライドのpadding
    slidesToShow: 3, // 一度に表示するスライド数
  });
});