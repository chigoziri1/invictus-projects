let fruits = ["Orange", "Banana", "Apple", "Mango", "Grapes"];
fruits.sort()
console.log(fruits);


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = numbers.filter((number) => number % 3 === 0)
// console.log(oddNumbers);

const evenNumbers = numbers.filter((number) => number % 2 === 0)
// console.log(evenNumbers);

const hasEvenNumbers = numbers.some((number) => number % 2 === 0)
// console.log(hasEvenNumbers);

const allEvenNumbers = numbers.every((number) => number % 2 === 0)
// console.log(allEvenNumbers);

// console.log(2 / 1);
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
// console.log(sum);




let mixedArray = ["Hello", 42, true, null, undefined, { name: "John" }, [1, 2, 3]];

let nestedArray = [[1, 2], [3, 4], [5, 6]];

const updateArr = nestedArray.map(item => item[0] + item[1])
// console.log(updateArr);

const objectArray = [
	{ name: "Alice", age: 25 },
	{ name: "Bob", age: 30 },
	{ name: "Charlie 1st", age: 39 },
	{ name: "Charlie 2nd", age: 14 },
	{ name: "Charlie", age: 80 }
];

const update = objectArray.map(item => item.age < 15 ? {...item, age: 20} : item)
//console.log(update);


numbers.forEach((number) => {
	// console.log(number * 2);
})

// let num = numbers.map((cur, acc) => cur * acc, 0)
//  console.log(num);
 

// const currentDate = new Date();
// const seconds = currentDate.getSeconds()

// document.querySelector('span').innerText = currentDate

// console.log(currentDate);


