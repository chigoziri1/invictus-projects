class bankuser{
	#password = 'taryaha';
	#balance = 0;

	constructor(Username, phone){
		this.Username = Username;
		this.phone = phone;
	}

	report(){
		console.log(`This user ${this.Username} is a customer`);
		
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

const user1 = new bankuser('David', 'taryaha')
user1.report()
user1.setBalance('taryaha', 2000)

class staff extends bankuser {
	constructor(Username, phone, id){
		super(Username, phone)
		this.id = id
	}

	report(){
		console.log(`This user ${this.Username} is a staff`);	
	}
}

const staff1 = new staff('Lucky', '8134567', 'caller345')
staff1.report()
