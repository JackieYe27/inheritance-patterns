/* Create a HoneyMakerBee class, in pseudoclassical style, with:
call the Bee superclass
set the prototype
set the constructor
an age property that is set to 10
a job property that is set to make honey
a color property inherited from bee that is set to yellow
a food property that is inherited from grub
an eat method that is inherited from grub
a honeyPot property that is set to 0
a makeHoney method that adds 1 to that honeyBee\'s honeyPot
a giveHoney method that subtracts 1 from that honeyBee\'s honeyPot
*/


var HoneyMakerBee = function() {
	Grub.call(this, this.food);
	Bee.call(this, this.color);
	HoneyMakerBee.prototype.eat = function() {
		this.prototype.eat();
	}

	this.age = 10;
	this.job = 'make honey';
	this.honeyPot = 0;

};

HoneyMakerBee.prototype.makeHoney = function() {
	this.honeyPot += 1;
};

HoneyMakerBee.prototype.giveHoney = function() {
	this.honeyPot -= 1;
}
