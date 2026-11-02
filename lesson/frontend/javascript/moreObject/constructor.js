// *Constructor	function
// Keywords: New and this

function shoe(name, model, color, material, price) {
	this.name = name;
	this.model = model
	this.color = color
	this.material = material
	this.price = price
}

shoe.prototype.Detail = function() {
	return(`This is the ${this.name} ${this.model} model, comes primarily in ${this.color}, made with first grade ${this.material}. Priced at $${this.price}`);
}

const shoeType = new shoe('Tom ford', 'chelsea-boot', 'brown', 'leather', 1500)
console.log(shoeType, shoeType.Detail());

const shoeType2 = new shoe('Adidas', 'Samba', 'blue', 'leather', 300)
console.log(shoeType2, shoeType2.Detail());

const shoeType3 = new shoe('Nike', 'Airforce-1', 'white', 'leather', 300)
console.log(shoeType3, shoeType3.Detail());

