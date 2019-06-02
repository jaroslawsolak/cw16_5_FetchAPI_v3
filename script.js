function Phone(brand, price, color, avalibility) {
	this.brand = brand;
	//by using this, the "brand" property of the object we create will assume the value of the brand argument
	this.price = price;
	this.color = color;
	this.avalibility = avalibility;
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + ", the price is " + this.price + " and the avalibility is " + this.price + ".");
}

var iPhone6S = new Phone("Apple", 2250, "silver", "available");
var SamsungGalaxyS6 = new Phone("Samsung", 1500, "gold", "not available");
var OnePlusOne = new Phone("Apple", 2000, "gray", "available");

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();



