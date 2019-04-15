/*
call the ForagerBee superclass
set the prototype
set the constructor
an age property that is set to 40
a job property that is set to gamble
a canFly property that is set to false
a color property that is set to grey
a forage method that returns "I am too old, let me play cards instead"
a food property that is inherited from grub
an eat method that is inherited from grub
a treasureChest property inherited from ForagerBee that is set to an empty array []
an always winning gamble method that allows the bee to add a treasure to the treasureChest
*/


var RetiredForagerBee = function() {
	Grub.call(this, this.food);
	RetiredForagerBee.prototype.eat = function() {
		this.prototype.eat();
	};
	ForagerBee.call(this, this.treasureChest);
	this.age = 40;
	this.job = 'gamble'
	this.canFly = false;
	this.color = 'grey'
};

RetiredForagerBee.prototype.forage = function() {
	return 'I am too old, let me play cards instead'
}

RetiredForagerBee.prototype.gamble = function(treasure) {
	this.treasureChest.push(treasure);
}