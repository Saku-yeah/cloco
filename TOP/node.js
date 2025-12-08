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
        centerPadding: '200px',  // 両端の余白を設定 (ここを調整して見切れ具合を制御)

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

document.addEventListener('DOMContentLoaded', function() {
    // 1. 現在のページの完全なURLを取得
    const currentUrl = window.location.href;
    
    // 2. ヘッダー内の全てのリンク要素を取得
    const navLinks = document.querySelectorAll('header .pconly ul li a');
    
    navLinks.forEach(link => {
        // 3. リンクの href 属性を取得
        const linkUrl = link.href;

        // 4. URLを比較
        // 比較を簡単にするため、両端の / やインデックスファイルを除いたパスで比較するのが一般的です。
        // ここでは、完全一致または相対パスで一致する場合をチェックします。
        
        // 【簡単なURL一致判定】
        if (currentUrl.includes(linkUrl) || currentUrl.endsWith(linkUrl)) {
            // リンクが現在のURLと一致した場合、その親の <li> 要素にクラスを追加
            link.parentNode.classList.add('current-page');
            
        } 
        
        // 【TOPページ特別処理】
        // index.html や TOP.html がルートURLで開かれている場合の対応
        else if (linkUrl.endsWith('TOP.html') && currentUrl.endsWith('/')) {
            link.parentNode.classList.add('current-page');
        }
    });
});

// ハンバーガーメニュー
document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".menu");
  const openMenu = document.querySelector(".open-menu");
  const closeButton = document.querySelector(".close");
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