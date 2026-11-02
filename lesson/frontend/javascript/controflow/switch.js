// ** Cinema Ticket Pricing **
function ticketPricing() {
	let age = Number(prompt('Enter your age:'));
	let weekday = prompt('Enter the day of the week:').toLowerCase();
	
	if (age < 5) {
		alert('Free to watch!')
	} else if (age >= 5 && age <= 12 ) {
		if (weekday == 'saturday' || weekday == 'sunday') {
			alert('Ticket price is 2000')
		} else {
			alert('Ticket price is 1500')
		}
	} else if (age >= 13 && age <= 59 ) {
		if (weekday === 'saturday' || weekday === 'sunday') {
			alert('Ticket price is 4000')
		} else {
			alert('Ticket price is 3000')
		}
	} else if (age >= 60) {
		if (weekday === 'saturday' || weekday === 'sunday') {
			alert('Ticket price is 2500')
		} else {
			alert('Ticket price is 2000')
		}
	} else if (age <= 0 || isNaN(age)) {
		alert('Invalid age input. Please enter a valid age.')
		if(weekday === '' || weekday === '') {
			alert('Invalid day input. Please enter a valid day of the week.')
		}
	}
}

//ticketPricing();



function internetPricing(plan) {
	const premiumPlan = 5000;
	const standardPlan = 2000;
	const basicPlan = 1000;

	let balance = 10000; // Example balance, you can change this value to test different scenarios

	switch (plan) {
		case 'premium':
			if (balance >= premiumPlan) {
				balance -= premiumPlan;
				console.log(`Subscription successful. 5000 deducted for the Premium plan. Received 10GB. Remaining balance ${balance}`);
			} else {
				console.log('Insufficient funds for the selected plan.');
			}
		case 'standard':
			if (balance >= standardPlan) {
				balance -= standardPlan;
				console.log(`Subscription successful. 2000 deducted for the Standard plan. Received 5GB. Remaining balance ${balance}`);
			} else {
				console.log('Insufficient funds for the selected plan.');
			}
		case 'basic':
			if (balance >= basicPlan) {
				balance -= basicPlan;
				console.log(`Subscription successful. 1000 deducted for the Basic plan. Received 2GB. Remaining balance ${balance}`);
			} else {
				console.log('Insufficient funds for the selected plan.');
			}
		default:
			console.log('Invalid plan selected.');
	}
}

//internetPricing();

function RestaurantOrderCalculator() {
	let item = prompt('Enter your order (e.g., (burger, pizza, pasta, chicken)....):').toLowerCase();
	let price;
	let quantity = Number(prompt('Enter the quantity:'));
	let total = 0;

	if (quantity <= 0 || isNaN(quantity)) {
		alert('Invalid quantity. Please enter a valid number.');
		return;
	} else if (item === 'burger') {
		price = 5000;
		total = price * quantity
		if (total >= 20000) {
			let discount = total * 0.10;
			let finalTotal = total - discountedTotal;
			alert(`A 10% discount was applied! Original total: ₦${total}, Discount: ₦${discount}, Final total: ₦${finalTotal}`)
		} else {
			alert(`Total price for ${quantity} ${item}(s) is:  ₦${total}`)
		}
		
	} else if (item === 'pizza') {
		price = 8000;
	} else if (item === 'chicken') {
		price = 6000;
	}	else if (item === 'pasta') {
		price = 4000
	} else {
		alert('Invalid order. please enter a valid item')
	}
}

RestaurantOrderCalculator();