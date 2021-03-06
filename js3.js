"use strict";

console.log(10 + 10 + "10");
//получили строку 2010 так как в выражении присутствует строка "10" и результат сложения
// 10+10=20 добавляется к ней слева
console.log(10 + "10" + 10);
//получили строку 101010 так как в выражении присутствует строка "10" и числа преобразуются
// в строки и добавляются соответственно слева и справа
console.log(10 + 10 + +"10");
//получили число 30 так как по приоритету сначала выполянется унарный плюс
// и строка преобразуется в число
console.log(10 / -"");
//получили число -Infinity так как -""=-0 и деление на ноль дает Infinity
console.log(10 / +"2,5");
//получили число NaN так как не удалось преобразовать 2,5 в число изза неправильного
// разделителя дробной части

console.log(typeof (10 + 10 + "10"));
console.log(typeof (10 + "10" + 10));
console.log(typeof (10 + 10 + +"10"));
console.log(typeof (10 / -""));
console.log(typeof (10 / +"2,5"));