//* 1 ** Cinema Ticket Pricing using Switch Case **
function ticketPrice() {
	let age = Number(prompt('Enter your age:'));
	let weekday = prompt('Enter the day of the week:').toLowerCase();

	switch(weekday) {
		case 'saturday':
			// if (age < 5) {
			// 	alert('Free to watch!')
			// } else if (age >= 5 && age <= 12) {
			// 	alert('Ticket price is 2000')
			// } else if (age >= 13 && age <= 59) {
			// 	alert('Ticket price is 4000')
			// } else if (age >= 60) {
			// 	alert('Ticket price is 2500')
			// } else if (age <= 0 || age === '' || isNaN(age)) {
			// 	alert('Invalid age input. Please enter a valid age.')
			// }
			if (age < 0 || age == '') {
				alert('Invalid age')
			} else if (age > 59){
				alert('Ticket price is 2500')
			} else if (age > 12){
				alert('Ticket price is 4000')
			} else if (age < 5) {
				alert('Free to watch!')
			} else {
				alert('Ticket price is 2000')
			}
			break;
		case 'sunday':
			if (age < 5) {
				alert('Free to watch!')
			} else if (age >= 5 && age <= 12) {
				alert('Ticket price is 2000')
			} else if (age >= 13 && age <= 59) {
				alert('Ticket price is 4000')
			} else if (age >= 60) {
				alert('Ticket price is 2500')
			}
			break;
		case 'monday':
			if (age < 5) {
				alert('Free to watch!')
			} else if (age >= 5 && age <= 12) {
				alert('Ticket price is 1500')
			} else if (age >= 13 && age <= 59) {
				alert('Ticket price is 3000')
			} else if (age >= 60) {
				alert('Ticket price is 2000')
			}
			break;
		case 'tuesday':
			if (age < 5) {
				alert('Free to watch!')
			} else if (age >= 5 && age <= 12) {
				alert('Ticket price is 1500')
			} else if (age >= 13 && age <= 59) {
				alert('Ticket price is 3000')
			} else if (age >= 60) {
				alert('Ticket price is 2000')
			}
			break;
		case 'wednesday':
			if (age < 5) {
				alert('Free to watch!')
			} else if (age >= 5 && age <= 12) {
				alert('Ticket price is 1500')
			} else if (age >= 13 && age <= 59) {
				alert('Ticket price is 3000')
			} else if (age >= 60) {
				alert('Ticket price is 2000')
			}
			break;
		case 'thursday':
			if (age < 5) {
				alert('Free to watch!')
			} else if (age >= 5 && age <= 12) {
				alert('Ticket price is 1500')
			} else if (age >= 13 && age <= 59) {
				alert('Ticket price is 3000')
			} else if (age >= 60) {
				alert('Ticket price is 2000')
			}
			break;
		case 'friday':
			if (age > 0 && age < 5) {
				alert('Free to watch!')
			} else if (age >= 5 && age <= 12) {
				alert('Ticket price is 1500')
			} else if (age >= 13 && age <= 59) {
				alert('Ticket price is 3000')
			} else if (age >= 60) {
				alert('Ticket price is 2000')
			}
			break;
		default:
			alert('Invalid day input. Please enter a valid day of the week.')
	}
}

ticketPrice()

function ticketPricing(age, weekday){
	if (weekday === 'monday') {
		if (age < 5) {
			console.log('Free');	
		} else if (age >= 5 && age <= 12){
			console.log('Price: 1500');
		} else if (age >= 13 && age <= 59){
			console.log('Price: 3000');
		} else if (age > 59){
			console.log('Price: 2000');
		} 
	} else if (weekday === 'sunday'){
		if (age < 5) {
			console.log('Free');	
		}
	} else if (weekday === 'tuesday') {

	} else if (weekday === 'wednesday') {
		
	} else if (weekday === 'thursday') {
		
	} else if (weekday === 'friday') {
		
	} else if (weekday === 'saturday') {
		
	} else {
		console.log("Invalid day");
		
	}
}

ticketPricing(-1, 'monday');


//* 2 ** Login Authentication **
const userName = 'admin';
const userPassword = 'admin123';

function login() {
	 let name = prompt('Enter your username:');
	 let password = prompt('Enter your password:');

	if (userName === name && userPassword === password) {
		alert('Login successful!')
	} else if (userName !== name) {
		alert('Invalid Username. Please try again.');
		name = prompt('Enter your Username:');
		if (userName === name && userPassword === password) {
			alert('Login successful!')
		}
	} else if (userPassword !== password) {
		alert('Invalid password. Please try again.');
		password = prompt('Enter your password:')
		if (userName === name && userPassword === password) {
			alert('Login successful!')
		}
	} else {
		alert('Invalid credentials. Please try again.');
	 } 
}



//login();

//* 3 ** Loan Eligibility Checker **
function checkLoanEligibility() {
	let income = Number(prompt('Enter your monthly income:'));
	let age = Number(prompt('Enter your age:'));
	let workYears = Number(prompt('Enter the number of years you have been working in number:'));

	if ((age >= 21 && age <= 60) && income >= 150000 && workYears >= 2) {
		alert('You are eligible for the loan.');
	} else {
		alert("You are not eligible for the loan. The criteria wasn't met.");
	}
}

//checkLoanEligibility();

//* 4 ** Restaurant Order Calculator **

function calculateOrder() {
	let item  = prompt('Enter your order (e.g., "burger", "pizza", "pasta"....):').toLowerCase();
	let price;
	let moreItems;

	let quantity = Number(prompt('Enter the quantity:'));
	let total = 0;

	switch(item) {
		case 'burger':
			price = 5000
			if (quantity <= 0) {
				alert('insufficient quantity')
			} else {
				total = price * quantity;

				if (total >= 20000) {
					let discount = total * 0.10;
					let discountedTotal = total - discount;
					alert(`A 10% discount was applied! 
						Original total:  ₦${total} for ${quantity} ${item} , 
						Discount:  ₦${discount}, 
						Final total: ₦${discountedTotal}`);
				} else {
					alert(`Total price for ${quantity} ${item}(s) is:  ₦${total}`);
				}
			}
			moreItems = prompt('Do you want to order more items? (yes/no)').toLowerCase();
			if (moreItems === 'yes') {
				total += calculateOrder();
			} else {
				alert('Thank you for your order!');
			}
			break;
		case 'pizza':
			price = 8000;
			if (quantity <= 0) {
				alert('insufficient quantity')
			} else {
				total = price * quantity;
				
				if (total >= 20000) {
					let discount = total * 0.10;
					let discountedTotal = total - discount;
					alert(`A 10% discount was applied! 
						Original total:  ₦${total} for ${quantity} ${item} , 
						Discount:  ₦${discount}, 
						Final total: ₦${discountedTotal}`);
				} else {
					alert(`Total price for ${quantity} ${item}(s) is:  ₦${total}`);
				}
			}
			moreItems = prompt('Do you want to order more items? (yes/no)').toLowerCase();
			if (moreItems === 'yes') {
				total += calculateOrder();
			} else {
				alert('Thank you for your order!');
			}
			break;
		case 'chicken':
			price = 6000
			if (quantity <= 0) {
				alert('insufficient quantity')
			} else {
				total = price * quantity;

				if (total >= 20000) {
					let discount = total * 0.10;
					let discountedTotal = total - discount;
					alert(`A 10% discount was applied! 
						Original total:  ₦${total} for ${quantity} ${item} , 
						Discount:  ₦${discount}, 
						Final total: ₦${discountedTotal}`);
				} else {
					alert(`Total price for ${quantity} ${item}(s) is:  ₦${total}`);
				}
			}
			moreItems = prompt('Do you want to order more items? (yes/no)').toLowerCase();
			if (moreItems === 'yes') {
				total += calculateOrder();
			} else {
				alert('Thank you for your order!');
			}
			break;
		case 'pasta':
			price = 4000;
			if (quantity <= 0) {
				alert('insufficient quantity')
			} else {
				total = price * quantity;

				if (total >= 20000) {
					let discount = total * 0.10;
					let discountedTotal = total - discount;
					alert(`A 10% discount was applied! 
						Original total:  ₦${total} for ${quantity} ${item} , 
						Discount:  ₦${discount}, 
						Final total: ₦${discountedTotal}`);
				} else {
					alert(`Total price for ${quantity} ${item}(s) is:  ₦${total}`);
				}
			}
			moreItems = prompt('Do you want to order more items? (yes/no)').toLowerCase();
			if (moreItems === 'yes') {
				total += calculateOrder();
			} else {
				alert('Thank you for your order!');
			}
			break;
		default:
			alert('Invalid order. Please enter a valid item.');
	}
}

//calculateOrder();

// ** 5 ** Electricity Connection Eligibility
function electricityConnection() {
	let age = Number(prompt('Enter your age:'));
	let propertyStatus = prompt('Enter your status (e.g., (owner, tenant) ..):').toLowerCase();
	let income = Number(prompt('Enter your income:'));

	if (propertyStatus == 'owner') {
		if (age >= 18 && income >= 200000) {
			alert(`You're eligible for a Premium connection!`)
		} else if (age >= 18 && income < 200000) {
			alert(`You're eligible for a Standard connection!`)
		} else if (age < 18) {
			alert('You are not old enough (wow, do you really own the property?).')
		}
	} else if (propertyStatus == 'tenant') {
		if (age >= 18 && income >= 300000) {
			alert(`You're eligible for a Standard connection!`)
		} else if (age >= 18 && income < 300000) {
			alert(`You're eligible for a Basic connection!`)
		} else if (age < 18) {
			if (age < 18 && income > 200000) {
				alert(`You're not old enough (you have adult money though)`)
			} else {
				alert('You are not old enough (you are still a kid lol).')
			}
		}
	} else {
		alert('Invalid property status. please enter a valid status')
	}
}

//electricityConnection();