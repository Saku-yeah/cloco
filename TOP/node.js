fetch("header.html")
  .then((response) => response.text())
  .then((data) => document.querySelector("#header").innerHTML = data);

fetch("footer.html")
  .then((response) => response.text())
  .then((data) => document.querySelector("#footer").innerHTML = data);

$(document).ready(function(){
    $('.schedule-slider').slick({
        // ★ページの端に半分が来る設定 (Partial view) ★
        slidesToShow: 3,         // 一度に3つのスライドを表示
        slidesToScroll: 1,
        
        // ★中央のスライドを強調表示 (Center mode) ★
        centerMode: true,        // 中央のスライドを強調
        
        // ★中央のスライドをページの中心から開始 (Center padding) ★
        centerPadding: '10%',  // 両端の余白を設定 (ここを調整して見切れ具合を制御)

        // ドット、矢印、自動再生設定
        dots: true,              // ドットナビゲーションを表示
        arrows: false,            // 矢印ナビゲーションを表示
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '100px',
                    centerMode: true,
                }
            }
        ]
    });
});

/**
 * 現在のページに基づいて、<a>タグにアクティブクラスを設定する関数
 */
function setActiveAnchor() {
    const currentUrl = window.location.href;
    const navLinks = document.querySelectorAll('header .pconly ul li a'); // 全ての<a>タグを取得

    // 1. すべての<a>タグから既存の.currentクラスを削除
    navLinks.forEach(aTag => {
        aTag.classList.remove('current');
    });

    // 2. 現在のURLと一致する<a>タグに.currentクラスを付与
    navLinks.forEach(aTag => {
        if (aTag.href) {
            // 比較用のパスを取得
            const aHref = aTag.href.split('/').pop().split('?')[0].split('#')[0];
            const currentPath = currentUrl.split('/').pop().split('?')[0].split('#')[0];

            // URLが一致した場合
            if (aHref === currentPath || (aHref === '' && currentPath === '')) {
                aTag.classList.add('current'); 
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', setActiveAnchor);
// ハンバーガーメニュー
document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".menu");
  const openMenu = document.querySelector(".open-menu");
  const closeButton = document.querySelector(".open-menu .close");
  const menuLinks = document.querySelectorAll(".open-menu a");
  // メニューを開く
  menu.addEventListener("click", function () {
    openMenu.style.display = "block";
    setTimeout(() => {
      openMenu.classList.add("active");
    }, 10); // 少し遅らせることでCSSのtransitionが適用される
  });
  // メニューを閉じる
  function closeMenu() {
    openMenu.classList.remove("active");
    setTimeout(() => {
      openMenu.style.display = "none";
    }, 500); // transition時間と合わせる
  }
  closeButton.addEventListener("click", closeMenu);
  menuLinks.forEach(link => link.addEventListener("click", closeMenu));
});