/*gameオブジェクトにまとめる
let startTime = null;
let stopTime =  null;
let seconds = null;
let displayArea = document.getElementById('display-area');
*/
// let endTime = null;
// let result = null;


let game = {
  startTime: null,
  stopTime: null,
  seconds: null,
  displayArea: document.getElementById('display-area'),
  option: {
    once: true
  },
  start: function () {
    game.displayArea.innerText = '計測中';
    game.startTime = Date.now();
  },
  stop: function () {
    document.body.addEventListener(
      'keydown',
      game.retry,
      game.option
    );
    game.stopTime = Date.now();
    game.seconds = (game.stopTime - game.startTime) / 1000;
    if (game.seconds >= 9.5 && game.seconds <= 10.5) {
      game.displayArea.innerText = 'すごい';
    } else {
      game.displayArea.innerText = `${game.seconds}秒でした。残念`;
    }
  },
  retry: function () {
    if (confirm('リトライしますか？')) {
      game.start();

      // document.body.onkeydown = stop;

      document.body.addEventListener(
        'keydown',
        game.stop,
        game.option,
      )

    }
  }
}
/*
function start() {
  displayArea.innerText= '計測中';
  startTime = Date.now();
}

function stop(){
  stopTime = Date.now();
  seconds = (stopTime-startTime)/1000 ;

  if (seconds>=9.5 && seconds<=10.5){
    displayArea.innerText='すごい';
  }else{
    displayArea.innerText = `${seconds}秒でした。残念`;
  }
}
/*
function end() {
  endTime = Date.now();
  result = (endTime - startTime) / 1000;
  console.log('停止しました');
  console.log(`結果は${result}です`)
}

*/

if (confirm('OKを押してちょうど10秒立ったと思ったら何かキーを押してください。')) {
  // ここからゲームが開始される
  game.start();

  // document.body.onkeydown = stop;

  document.body.addEventListener(
    'keydown',
    game.stop,
    game.option
  );
}


//confirm()引数で渡した文字列をダイアログで表示する関数でボタンがOKとキャンセルのもの
