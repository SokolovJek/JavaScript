/*4. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя параметрами. 
Т.е. например, функция для сложения должна принимать два числа, складывать их и возвращать результат.
Обязательно использовать оператор return.*/
function sum(a, b){
	return a + b;
}


function subtraction(a, b){
	return a - b;
}


function division(a, b){
	return a / b;
}


function multiplication(a, b){
	return a * b;
}


/*5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических операций
(использовать функции из задания 4) и вернуть полученное значение.*/
function mathOperation(arg1, arg2, operation){
	switch(operation){
		case 'сложение':  
			alert(sum(arg1,arg2));
			break;
		case 'вычитание':
			alert(subtraction(arg1,arg2));
			break;
		case 'деление':
			alert(division(arg1,arg2));
			break;
		case 'умножение':
			alert(multiplication(arg1,arg2));
			break;
		default:
			alert('Ввод не верный!(');
	}
}


let num1 = +prompt('введите первое число');
let num2 = +prompt('введите второе число')
let condition = prompt('введите арифметическую операцию')
mathOperation(num1,num2,condition)