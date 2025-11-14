<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // フォームからのデータを取得
    $fullname = $_POST['fullname'];
    $tel = $_POST['tel'];
    $mail = $_POST['mail'];
    $birth = $_POST['birth'];
    $hopeday1 = $_POST['hopeday1'];
    $hopetime1 = $_POST['hopetime1'];
    $hopeday2 = $_POST['hopeday2'];
    $hopetime2 = $_POST['hopetime2'];
    $hopeday3 = $_POST['hopeday3'];
    $hopetime3 = $_POST['hopetime3'];
    $other = $_POST['other'];

    // 管理者へのメール送信
    $admin_subject = '鼠径ヘルニアLPよりご予約がありました。';
    $admin_message = "鼠径ヘルニアLPより以下の内容でご予約がありました。\n\nお名前：$fullname\n電話番号：$tel\nメールアドレス：$mail\n生年月日：$birth\nご予約希望日時(第１希望)：$hopeday1 $hopetime1\nご予約希望日時(第２希望)：$hopeday2 $hopetime2\nご予約希望日時(第３希望)：$hopeday3 $hopetime3\n備考：\n$other";

    // ユーザーへのメール送信
    $user_subject = 'お申し込みありがとうございます。';
    $user_message = "$fullname 様\n\nいつも大変お世話になっております。\nMYメディカルクリニックでございます。\n以下の内容で鼠径ヘルニアのお申し込みを承りました。\n\n\nお名前：$fullname\n電話番号：$tel\nメールアドレス：$mail\n生年月日：$birth\nご予約希望日時(第１希望)：$hopeday1 $hopetime1\nご予約希望日時(第２希望)：$hopeday2 $hopetime2\nご予約希望日時(第３希望)：$hopeday3 $hopetime3\n備考：\n$other\n\n3営業日以内にメールもしくはお電話にてご連絡させていただきますので少々お待ちください。\n今後とも何卒よろしくお願いいたします。\n\n※本メールは送信専用でございます。\n　ご返信頂けても対応しかねますので、ご了承ください。\n\n━━━━━━━━━━━━━━━━━━━\n▼医療法人社団MYメディカル\n▽ホームページ：https://mymc.jp/\n▽電話番号：03-6824-6527\n▽メールアドレス：honda-a@dym.jp\n▽本社所在地：	東京都渋谷区宇田川町20-17　NMF渋谷公園通りビル5F\n▽営業時間：9:00~19:00\n━━━━━━━━━━━━━━━━━━━";

    // 送信元の情報を設定
    $headers = "From: honda-a@dym.jp\r\n"; // 送信元のメールアドレスを指定

    // メール送信
    $admin_email = 'honda-a@dym.jp'; // 管理者のメールアドレス
    $admin_talknote_email = 'honda-a@dym.jp'; // Talknoteのメールアドレス
    $user_email = $mail; // ユーザーのメールアドレス（入力されたものを使用）

    // 管理者へのメール送信
    mail($admin_email, $admin_subject, $admin_message, $headers);

    // ユーザーへのメール送信
    mail($user_email, $user_subject, $user_message, $headers);

    // Talknoteにメール送信
    mb_language( 'Japanese' );
    mb_internal_encoding( 'UTF-8' );
    mb_send_mail( $admin_talknote_email, $admin_subject, $admin_message, $headers );



    // 送信後にリダイレクトなどを行う
    header('Location: thanks.html');
    exit();
}
?>
