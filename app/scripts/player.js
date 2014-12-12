var PIXI = require('pixi.js');

var player = {

	constants : {

		SPRITE_WIDTH : 221,
		SPRITE_HEIGHT : 64,
		SPRITE_IMAGE : 'test-player-scaled.png'

	},

	sprite: undefined,

	init: function(constants) {

		var that = this;

		var texture = PIXI.Texture.fromImage(constants.SPRITE_DIR + that.constants.SPRITE_IMAGE);

		// position player
		that.sprite = new PIXI.Sprite(texture);	
		that.sprite.position.x = that.constants.SPRITE_WIDTH;
		that.sprite.position.y = constants.GAME_HEIGHT/2;
		that.sprite.pivot.x = that.constants.SPRITE_WIDTH/2;
		that.sprite.pivot.y= that.constants.SPRITE_HEIGHT/2;

		that.sprite.scale.x = 1;
		that.sprite.scale.y = 1;


	},

	moveUp: function() {
		console.log("Player up");
	},

	moveDown: function() {
		console.log("Player down");
	},

	moveLeft: function() {
		console.log("Player left");
	},

	moveRight: function() {
		console.log("Player right");
	},

	fire: function() {
		console.log("Player fire");
	}

}

module.exports = player;
