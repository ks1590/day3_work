const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.getElementById("modal");
const submit = document.getElementById("submit");

open.addEventListener('click', () => modal.classList.add('show-modal'));

close.addEventListener('click', () => modal.classList.remove('show-modal'));

window.addEventListener('click', e => e.target == modal ? modal.classList.remove('show-modal') : false);

submit.addEventListener('click', () =>
  alert("問い合わせ内容を送信しました。")
);