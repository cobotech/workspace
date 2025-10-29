 /*for文の書き方
 for (let 初期化式;条件式;変化式){
  実行したい内容}

//ex1
for (let i = 1; i<=500;i++){
  document.body.append(i + ' ');
}
//ex2
for(let i=10;i>=0;i--){
  document.body.append(`あと${i}日`);
  document.body.append(' ')
}
*/
for (let i = 1; i<=500;i++){
  if(i%15===0){
    document.body.append(' FizzBuzz ');
  }else if(i%3===0){
    document.body.append(' Fizz ');
  }else if(i%5===0){
    document.body.append(' Buzz ');
  }else{
    document.body.append(' '+i + ' ');
  }
  
}