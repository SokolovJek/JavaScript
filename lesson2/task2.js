/*2. Чему будут равны переменные x и a в примере ниже? 
Написать почему так произошло (описать последовательность действий).*/

/*Cначала объявляется переменнная а = 2, потом обявляется переменная х 
которая равняется выражению 1 + (2 * 2), и так как используется оператор *= то а = 4 */
let a = 2;
let x = 1 + (a *= 2); //ответ: 5. 
alert(`переменная а = ${a}, переменная х = ${x}`)