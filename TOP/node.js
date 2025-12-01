fetch("header.html")
  .then((response) => response.text())
  .then((data) => document.querySelector("#header").innerHTML = data);

fetch("footer.html")
  .then((response) => response.text())
  .then((data) => document.querySelector("#footer").innerHTML = data);

$(function() {
    const BREAKPOINT = 769; // PCとSPの切り替え境界線 (CSSの @media (min-width: 769px) と合わせる)

    // --- Schedule Slider の設定 (元のコード) ---
    // #schedule-slider の初期化ロジックは、以前のindex.htmlの<script>タグ内に記述されていたロジック（PC/SP切り替え）を
    // こちらのファイルにも適用すべきですが、今回は #flow-slider の追加に集中します。

    // 暫定的に #schedule-slider (PC用) の初期化のみ残します。
    // ※ 厳密には、PC/SPの切り替えロジックはindex.htmlの<script>ブロックに残してあります。
    if ($(window).width() >= BREAKPOINT) {
        $('#schedule-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                    }
                },
            ]
        });
    }

    // ===========================================
    // --- Flow Slider の初期化 (新たに追加) ---
    // ===========================================

    const $pcFlowSlider = $('#flow-slider');
    const $spFlowSlider = $('#flow-slider2');
    let isPcFlowSlickActive = false;
    let isSpFlowSlickActive = false;

    // PC用Flowスライダーの初期化
    function initPcFlowSlick() {
        if ($pcFlowSlider.length && !isPcFlowSlickActive) {
            $pcFlowSlider.slick({
                slidesToShow: 4,      // PCでは4枚表示
                slidesToScroll: 1,
                dots: false,          // ドットナビゲーションは非表示
                arrows: true,         // 矢印は表示
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                ]
            });
            isPcFlowSlickActive = true;
        }
    }

    // SP用Flowスライダーの初期化
    function initSpFlowSlick() {
        if ($spFlowSlider.length && !isSpFlowSlickActive) {
            $spFlowSlider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
            });
            isSpFlowSlickActive = true;
        }
    }

    // リサイズ時の処理を制御
    function checkAndInitFlowSlick() {
        const currentWidth = $(window).width();
        const isPc = currentWidth >= BREAKPOINT;

        if (isPc) {
            // PCサイズの場合
            if (isSpFlowSlickActive) {
                $spFlowSlider.slick('unslick');
                isSpFlowSlickActive = false;
            }
            initPcFlowSlick(); 
        } else {
            // SPサイズの場合
            if (isPcFlowSlickActive) {
                $pcFlowSlider.slick('unslick');
                isPcFlowSlickActive = false;
            }
            initSpFlowSlick();
        }
    }

    // 初期ロード時とリサイズイベントで実行
    checkAndInitFlowSlick();
    let resizeTimer;
    $(window).on('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(checkAndInitFlowSlick, 100); 
    });
});