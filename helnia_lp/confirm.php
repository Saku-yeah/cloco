<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>確認画面－日帰り！痛みの少ない鼠径ヘルニア手術 ｜ MYメディカルクリニック田町三田</title>
    <meta name="description" content="" />
	<link rel="icon" href="https://mymc.jp/wp2/wp-content/themes/mymc/img/cmn/favicon.ico">

    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-KL5CC9Q');</script>
      <!-- End Google Tag Manager -->

    <!-- googlegont -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap" rel="stylesheet">

    <!-- css -->
    <link rel="stylesheet" href="./style.css">
    <!-- SlickのCSS -->
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick.css"/>
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick-theme.css"/>
    <!-- jQueryとSlickのJS -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick.min.js"></script>
    <!-- カレンダー用 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
    <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
</head>
<body>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KL5CC9Q"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      <!-- End Google Tag Manager (noscript) -->

    <header>
      <div class="pconly">
        <a href="https://mymc.jp/tamachi/" class="logo"><img src="./img/logo.png" alt="MYメディカルクリニック田町三田院"></a>
        <ul>
          <li style="border-left: 1px solid;"><a href="#about">鼠径ヘルニア<br>とは</a></li>
          <li><a href="#method">当院の<br>手術方法</a></li>
          <li class="top"><a href="#feature">当院の特徴</a></li>
          <li class="top"><a href="#doctor">医師紹介</a></li>
          <li class="top"><a href="#price">手術費用</a></li>
          <li><a href="#flow">日帰り手術の<br>流れ</a></li>
          <li class="top"><a href="#access">アクセス</a></li>
          <li><a href="#faq">よくある<br>ご質問</a></li>
        </ul>
        <a href="#form" class="btn"><img src="./img/cta-web.png" alt="WEB予約はこちら"></a>
      </div>
      <div class="sponly">
        <a href="https://mymc.jp/tamachi/" class="logo"><img src="./img/logo-sp.png" alt="MYメディカルクリニック田町三田院"></a>
        <div class="menu">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
        <div class="open-menu">
          <ul>
            <div class="close">✕</div>
            <li><a href="#about">鼠径ヘルニアとは</a></li>
            <li><a href="#method">当院の手術方法</a></li>
            <li class="top"><a href="#feature">当院の特徴</a></li>
            <li class="top"><a href="#doctor">医師紹介</a></li>
            <li class="top"><a href="#price">手術費用</a></li>
            <li><a href="#flow">日帰り手術の流れ</a></li>
            <li class="top"><a href="#access">アクセス</a></li>
            <li><a href="#faq">よくあるご質問</a></li>
          </ul>
        </div>
      </div>
    </header>
    <main id="confirm">
      <section id="form" class="normal">
        <h2><span>入力内容のご確認</span></h2>
        <div class="title_en">CONFIRM</div>
        <form action="./mail.php" method="post" class="inner">
          <?php
              // フォームデータを受け取り、hiddenに格納
              echo '<input type="hidden" name="fullname" value="' . htmlspecialchars($_POST['fullname'], ENT_QUOTES, 'UTF-8') . '" />';
              echo '<input type="hidden" name="tel" value="' . htmlspecialchars($_POST['tel'], ENT_QUOTES, 'UTF-8') . '" />';
              echo '<input type="hidden" name="mail" value="' . htmlspecialchars($_POST['mail'], ENT_QUOTES, 'UTF-8') . '" />';
              echo '<input type="hidden" name="birth" value="' . htmlspecialchars($_POST['birth'], ENT_QUOTES, 'UTF-8') . '" />';
              echo '<input type="hidden" name="hopeday1" value="' . htmlspecialchars($_POST['hopeday1'], ENT_QUOTES, 'UTF-8') . '" />';
              echo '<input type="hidden" name="hopetime1" value="' . htmlspecialchars($_POST['hopetime1'], ENT_QUOTES, 'UTF-8') . '" />';
              echo '<input type="hidden" name="hopeday2" value="' . htmlspecialchars($_POST['hopeday2'], ENT_QUOTES, 'UTF-8') . '" />';
              echo '<input type="hidden" name="hopetime2" value="' . htmlspecialchars($_POST['hopetime2'], ENT_QUOTES, 'UTF-8') . '" />';
              echo '<input type="hidden" name="hopeday3" value="' . htmlspecialchars($_POST['hopeday3'], ENT_QUOTES, 'UTF-8') . '" />';
              echo '<input type="hidden" name="hopetime3" value="' . htmlspecialchars($_POST['hopetime3'], ENT_QUOTES, 'UTF-8') . '" />';
              echo '<input type="hidden" name="other" value="' . htmlspecialchars($_POST['other'], ENT_QUOTES, 'UTF-8') . '" />';
          ?>
          <div class="formpart">
            <div class="formname">
              <div>お名前</div>
              <div class="require">必須</div>
            </div>
            <div class="forminput">
              <?php echo htmlspecialchars($_POST['fullname'], ENT_QUOTES, 'UTF-8') ?>
            </div>
          </div>
          <div class="formpart">
            <div class="formname">
              <div>電話番号</div>
              <div class="require">必須</div>
            </div>
            <div class="forminput">
              <?php echo htmlspecialchars($_POST['tel'], ENT_QUOTES, 'UTF-8') ?>
            </div>
          </div>
          <div class="formpart">
            <div class="formname">
              <div>メールアドレス</div>
              <div class="require">必須</div>
            </div>
            <div class="forminput">
              <?php echo htmlspecialchars($_POST['mail'], ENT_QUOTES, 'UTF-8') ?>
            </div>
          </div>
          <div class="formpart">
            <div class="formname">
              <div>生年月日</div>
              <div class="require">必須</div>
            </div>
            <div class="forminput">
              <?php echo htmlspecialchars($_POST['birth'], ENT_QUOTES, 'UTF-8') ?>
            </div>
          </div>
          <div class="formpart">
            <div class="formname">
              <div>ご予約希望日時　(第１希望)</div>
              <div class="require">必須</div>
            </div>
            <div class="forminput hope">
              <?php echo htmlspecialchars($_POST['hopeday1'], ENT_QUOTES, 'UTF-8') ?>
              <?php echo htmlspecialchars($_POST['hopetime1'], ENT_QUOTES, 'UTF-8') ?>
            </div>
            <div class="formname">
              <div>ご予約希望日時　(第２希望)</div>
              <div class="require">必須</div>
            </div>
            <div class="forminput hope">
              <?php echo htmlspecialchars($_POST['hopeday2'], ENT_QUOTES, 'UTF-8') ?>
              <?php echo htmlspecialchars($_POST['hopetime2'], ENT_QUOTES, 'UTF-8') ?>
            </div>
            <div class="formname">
              <div>ご予約希望日時　(第３希望)</div>
              <div class="require">必須</div>
            </div>
            <div class="forminput hope">
              <?php echo htmlspecialchars($_POST['hopeday3'], ENT_QUOTES, 'UTF-8') ?>
              <?php echo htmlspecialchars($_POST['hopetime3'], ENT_QUOTES, 'UTF-8') ?>
            </div>
          </div>
          <div class="formpart" style="border-bottom: none;">
            <div class="formname">
              <div>備考</div>
            </div>
            <div class="forminput">
              <?php echo htmlspecialchars($_POST['other'], ENT_QUOTES, 'UTF-8') ?>
            </div>
          </div>
          <div class="submit">
            <div class="syusei" onclick="history.back()">修正する</div>
            <input type="submit" value="送信する">
          </div>
        </form>
      </section>
    </main>
    <footer>
      Copyright © mymedical clinic.
    </footer>
</body>
</html>