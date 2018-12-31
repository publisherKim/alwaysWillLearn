// primitive data type: number, string, boolea, null, undefined, symbol
// structured data type: object and array

// number: integer, float, fractional(분수), real number(실수), unreal number(허수)
// JS is a dynamic typing language (사람들의 인식에 헷갈리수가 있음)
let num = 123;     // integer
num = 12.345;     // float
num = 'Jupeter';  // string

// String
let str = "Double quotes";
let str2 = 'Single quotes';
let phrase = `backtick can embed ${str}`;

// Boolean
let a = true; 
let b = false; 

// 평가 값(읽고 평가함)
let isGreater1 = 4 > 1;  // Read => Evaluate
console.log(isGreater1);

let isGreater2 = 4 + 2 * 8; // Read => Evaluate => process => print
console.log(isGreater2);

let age = null;   // 공을 할당(빈 값을 할당한다) nothing 또는 미생과 비슷
console.log(age)

let x;
console.log(x); // shows "undefined"

// dynamic typing
let message = "hello";
message = 123456;