function confirmRegister() {
  const result = confirm("正常に登録されました。編集を終了しますか？");
  if (result) {
    // OK が押された場合 → index.html に戻る
    window.location.href = "index.html";
  } else {
    // Cancel が押された場合 → 何もしない（そのまま入力画面に残る）
  }
  return false; // フォームが送信されないようにする
}



