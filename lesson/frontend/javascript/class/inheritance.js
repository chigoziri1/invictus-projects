class bankuser{
	#password = 'taryaha';
	#balance = 0;

	constructor(Username, phone){
		this.Username = Username;
		this.phone = phone;
	}

	getBalance(pass){
		if(pass !== this.#password){
			console.log('Invalid password');
		} else {
			console.log(`Your balance is ${this.#balance}`);
		}
	}

	setBalance(pass, amount){
		if(pass !== this.#password){
			console.log('Invalid password');
		} else {
			this.#balance += amount;
			console.log(`Your balance has been updated to ${this.#balance}`);
		}
	}
}

class staff extends bankuser {
	constructor(Username, phone, id){
		super(Username, phone)
		this.id = id
	}
}