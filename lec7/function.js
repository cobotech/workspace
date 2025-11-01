/*
userInformation //キャメルケース　JSが多い
user_information //スネークケース　Pythonが多い
user-information //ケバブケース　　HTMLのクラスとか


let nextChristmas = new Date('2025-12-25 00:00');

//updateParagraphという関数を作ったら同じ名前の変数ができる
function updateParagraph(){
  let now =new Date();
  let seconds = (nextChristmas.getTime() -now.getTime())/1000;
  document.getElementById('next-christmas').innerText =`次のクリスマスまであと${seconds}秒`
}

 setInterval(updateParagraph,50)
*/

function areaOfCircle(r){
  // let area;
  // area= r*r*3.14
  // return area;
  return r*r*3.14
}

document.body.innerHTML +=`<p>半径５㎝の円の面積は${areaOfCircle(5)}です</p>`
document.body.innerHTML +=`<p>半径５㎝の円の面積は${areaOfCircle(10)}です</p>`
document.body.innerHTML +=`<p>半径５㎝の円の面積は${areaOfCircle(15)}です</p>`