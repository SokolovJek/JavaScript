/*6**. (Это задание не является частью курса, можете его не делать, оно для тех кому мало обычных
 заданий, требует времени и возможно гугления, делайте по желанию.)
Программа должна спросить у пользователя число, это будет количество денег, которое он хочет 
положить на счет в банке. Затем программа должна выдать примерно такое сообщение:
"Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101.
"Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020.
"Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104.
То есть ваша задача выводить слово «рубль» в правильном падеже, в зависимости от введенного числа.*/
function wordEnd(){
	let word = prompt('Ведите число')
	let len = word.length
	let wordLastLetter = word.charAt(len - 1)
	let wordRub = 'рубл'
	if(wordLastLetter == 1){
		wordRub += 'ь'
		alert(`Ваша сумма в ${word} ${wordRub} успешно зачислена.`)
	}else if(wordLastLetter == 2 || wordLastLetter == 3 || wordLastLetter == 4){
		wordRub += 'я'
		alert(`Ваша сумма в ${word} ${wordRub} успешно зачислена.`)
	}else{
		wordRub += 'ей'
		alert(`Ваша сумма в ${word} ${wordRub} успешно зачислена.`)
	}
}
wordEnd()

//рубль 1,
//рублей 0, 5, 6, 7, 8, 9,
//рубля 2, 3, 4, 