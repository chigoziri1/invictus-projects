// ** Factory function

function carFactory(name, year,model,color) {
	return {
		name,
		year,
		model,
		color,

		description(){
			// console.log(`${this.name} ${this.model} ${this.year} is the latest entry in our collection of amazing and durable cars`);

			console.log(this.name + this.model + this.year + 'is the latest entry in our collection of amazing and durable cars');
		}
	}


}

const myCar = carFactory('Toyota', 2020, 'Camry', 'blue');
console.log('My car', myCar, myCar.description());

const myCar2 = carFactory('Honda', 2019, 'Civic', 'black');
console.log('My car', myCar2, myCar2.description());

const myCar3 = carFactory('Ford', 2021, 'Mustang', 'red');
console.log('My car',myCar3, myCar3.description());

const myCar4 = carFactory('Tesla', 2024, 'Cybertruck', 'gray');
console.log('My car:', myCar4, myCar4.description());

