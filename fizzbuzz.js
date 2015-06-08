

function fizzbuzz(result) {
	var result;
	if (i % 15 === 0) {
		result = 'FizzBuzz'
	} else if (i % 3 === 0) {
		result = 'Fizz'
	} else if (i % 5 === 0) {
		result = 'Buzz'
	}
return result;
}



for (var i = 1; i<= 100; i++) {
	var result = fizzbuzz(i);
	console.log(result)
}

/* I didn't cheat! I'm not sure I understand it 100%, but I figured it out. */ 
