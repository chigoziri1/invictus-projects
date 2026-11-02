class car {
	constructor(brand, model, year) {
		this.brand = brand
		this.model = model
		this.year = year
	}

	startEngine (){
		console.log(`The engine of the ${this.brand} ${this.model} ${this.year} is starting.. `);
		this.#buttonClick()
		this.#electricalSurge()
		this.#engineIgnition()
		this.#fanBeltRoll()
	}

	#buttonClick (){
		console.log('Start button clicked');
	}

	#electricalSurge (){
		console.log('Electric surging');
	}

	#engineIgnition (){
		console.log('Engine igniting');
	}

	#fanBeltRoll (){
		console.log('Fan belt rolling...');
	}
}

const car1 = new car('Mercedes', 'GLE', 2024)
// console.log(car1.startEngine());
car1.startEngine()
