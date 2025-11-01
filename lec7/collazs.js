function collazs(n) {
  document.body.innerHTML += `nの値が${n}になりました。<br>`;
  if (n === 1) {
    document.body.innerHTML += `終了`;
  } else if (n % 2 === 0) {
    collazs(n / 2);
  } else {
    collazs(n * 3 + 1)
  }
}

collazs(1000);