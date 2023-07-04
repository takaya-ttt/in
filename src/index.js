/**
 * const、let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "変数を上書き";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言す可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// //const変数は上書き不可
// // val3 = "const変数上書き";

// const val3 = "const再宣言";

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "ty",
//   age: 31
// };
// val4.name = "たかや";
// val4.adress = "koyot";
// console.log(val4);

// //constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey"); //push追加
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "takaya";
// const age = 31;
// //私の名前はyakayaです。年齢は31歳です

// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //テンプレート文字列を用いた場合
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
//従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => str;
// // { これを1行に省略すると↑
// //   // =>が→みたいだからアロー関数という。これが出てくれば関数とおもえ！
// //   return str;
// // };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;
// // {　これを1行に省略すると↑
// //   return num1 + num2;
// // };
// console.log(func3(10, 20));

/*
分割代入
*/

//オブジェクトの場合
// const myProfile = {
//   name: "jack",
//   age: 8
// };

// const message1 = `名前は${myProfile.name}、年齢は${myProfile.age}ヶ月です、`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}、年齢は${age}ヶ月です、`;
// console.log(message1);

// //配列の場合
// const myProfile = [`jyack`, 8];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}ヶ月です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

// /**
// デフォルト値、引数等
// */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん`);
// sayHello("jack");

/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["田中", "山田", "ジャック"];
for (let index = 0; index < nameArr.lenght; index++) {
  console.log(`${index + 1}番目は${nameArr[index]}です`);
}

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name) => console.log(`${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "ジャック") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
