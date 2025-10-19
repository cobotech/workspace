/*
let age = 88;
let result = '';

if (age >= 18) {
  result = '成人';
} else {
  result = '未成年';
}
//表示させる
document.body.append(`${age}才は${result}です`);
*/
/*
let age = 65;
let isMember = true; //is~の変数は真偽値が入りがちらしい
let result = null;

if (age >= 60 && isMember) {
  result = 'シニア割の対象です';
} else {
  result = 'シニア割の対象外です';
}

document.body.append(`${age}才は${result}`);
*/

/*
let number =8;
if(number%3 ===0){
  document.body.append('さぁん！！');
} else {
  document.body.append(number);
}
*/

let age = 5;
let isMember = true;
let result = null;

if(age<=15){
  result =800;
}else if(isMember){
  result = 1000;
} else {
  result = 1500;
}

document.body.append(`あなたのチケット代は${result}円です`)