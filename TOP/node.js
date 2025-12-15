fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    // 1. headerの内容をDOMに挿入する
    document.querySelector("#header").innerHTML = data;

    // 2. ★★★ ここにハンバーガーメニューのコードを移動する ★★★
    const menu = document.querySelector(".menu");
    const openMenu = document.querySelector(".open-menu");
    const closeButton = document.querySelector(".open-menu .close");
    const menuLinks = document.querySelectorAll(".open-menu a");
    
    // menu要素が確実に存在することを確認してから処理を進める
    if (menu) {
      // メニューを開く
      menu.addEventListener("click", function () {
        openMenu.style.display = "block";
        setTimeout(() => {
          openMenu.classList.add("active");
          menu.style.display = "none";
        }, 10);
      });

      // メニューを閉じる関数
      function closeMenu() {
        openMenu.classList.remove("active");
        setTimeout(() => {
          openMenu.style.display = "none";
          menu.style.display = "block";
        }, 500);
      }
      
      closeButton.addEventListener("click", closeMenu);
      menuLinks.forEach(link => link.addEventListener("click", closeMenu));
    }
    // ★★★ ここまで移動 ★★★
    
    // 3. アクティブクラスの設定 (必要であればここで実行)
    // header要素内のリンクに対して適用する必要があるため、ここで実行するのが適切
    setActiveAnchor(); 
  });

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

        autoplay: true,
        autoplaySpeed: 3000,

        // ドット、矢印、自動再生設定
        dots: true,              // ドットナビゲーションを表示
        dotsClass: 'dots-wrap',
        arrows: false,            // 矢印ナビゲーションを表示
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '20%',
                    centerMode: true,
                    autoplay: true,
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

const IDLE_TIME_MS = 3000; // 10秒をミリ秒で定義
let timeoutId;
const banner = $("#overview"); // jQueryオブジェクトとして取得

// === 1. アイドルタイマーを開始する関数 ===
function startIdleTimer() {
    // 既存のタイマーがあればクリアする
    clearTimeout(timeoutId); 
    
    // 10秒後にバナーを表示するように設定
    timeoutId = setTimeout(showBanner, IDLE_TIME_MS);
    console.log("タイマーを再設定しました。");
}

// === 2. バナーを表示する関数 ===
function showBanner() {
    // バナーが表示されていなければ表示
    if (banner.is(':hidden')) {
        banner.show();
        console.log("操作停止10秒でバナーを表示しました。");
        // 一度表示したらタイマーは不要
        clearTimeout(timeoutId); 
    }
}

// === 3. ユーザー操作時にタイマーをリセットし再開する関数 ===
function resetTimer() {
    // バナーが表示されていなければ、タイマーをリセットし再開
    if (banner.is(':hidden')) {
        startIdleTimer();
    }
}

// === 4. イベントリスナーの設定 ===
window.onload = function() {
    // ページロード完了後、すぐにアイドルタイマーを開始
    startIdleTimer(); 

    // ページ上の主要な操作イベントに resetTimer を紐づける
    $(document).on('mousemove keypress scroll', resetTimer);

    /* ×ボタンが押されたとき、バナーブロックを非表示 */
    $("#overview .close").on("click", function(){
        banner.hide();
        // 閉じた後、すぐにタイマーを再開する（再びアイドル状態を監視）
        startIdleTimer(); 
    });
};
