var PIXI = require('pixi.js');

var enemy = {

	constants : {

		SPRITE_WIDTH : 144,
		SPRITE_HEIGHT : 64,
		SPRITE_IMAGE : 'test-enemy-scaled.png'

	},

	sprite: undefined,

	init: function(constants) {

		var that = this;

		var texture = PIXI.Texture.fromImage(constants.SPRITE_DIR + that.constants.SPRITE_IMAGE);

		// position enemy
		that.sprite = new PIXI.Sprite(texture);	
		that.sprite.position.x = constants.GAME_WIDTH - that.constants.SPRITE_WIDTH;
		that.sprite.position.y = constants.GAME_HEIGHT/2;
		that.sprite.pivot.x = that.constants.SPRITE_WIDTH/2;
		that.sprite.pivot.y= that.constants.SPRITE_HEIGHT/2;

		that.sprite.scale.x = 1;
		that.sprite.scale.y = 1;


	},

	moveUp: function() {
		console.log("Enemy up");
	},

	moveDown: function() {
		console.log("Enemy down");
	},

	moveLeft: function() {
		console.log("Enemy left");
	},

	moveRight: function() {
		console.log("Enemy right");
	},

	fire: function() {
		console.log("Enemy fire");
	}

}

module.exports = enemy;
