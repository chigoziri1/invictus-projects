function fizzBuzz() {
	const input = Number(prompt('Enter a number:'))

	for (let i = 1; i <= input; i++){
		if (i % 3 === 0 && i % 5 === 0){
			console.log(`fizzbuzz`)
		} else if (i % 5 === 0){
			console.log('buzz');
		} else if (i % 3 === 0 ){
			console.log('fizz');
		} else {
			console.log(i);			
		}
	}
}
//fizzBuzz()

// const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

// function even(list){
// 	for (i = 0; i < list.length; i++) {
		
// 	}
// }

function evenAndOdd(){
	let userNumber = Number(prompt('Enter a number:'))

	let evenArray = []; 
	let oddArray = [];

	for (let i = 1; i <= userNumber; i++) {
		if (i % 2 === 0) {
			 evenArray.push(i)
		} else {
			 oddArray.push(i)
		}
	}
	console.log(evenArray);
	console.log(oddArray);
}

//evenAndOdd()

// write a function that takes in two parameter,
// if both are positive number, you square their sum and add it to  their difference
// if they are not postive number, you subtract the smaller number from the bigger one and add it to the square of their sum

// * 1 * Create a function
// * 2 * give it two parameters
// * 3 * find out their postivity or negativity (if..else)
// * 4 * if positve, add it together then square their sum
// * 5 * add the squared sum to the multipliction of their difference


function positiveAndNegative(x, y) {
	if (x % 2 === 0 && y % 2 === 0) {
		let sum = x + y;
		let square = sum * sum;
		console.log(square);
		
	} else {
		let sub = x - y;
		let squared = (x * y) + sub;
	}
}

// let i = 30;

// while (i >= 1) {
// 	console.log(i);
// 	i--
// }


let numbers = [2, 4, 6];

numbers.forEach(n => {
	console.log(n * n);
})
