var PIXI = require('pixi.js');

var player = {

	constants : {

		SPRITE_WIDTH : 221,
		SPRITE_HEIGHT : 64,
		SPRITE_IMAGE : 'test-player-scaled.png'

	},

	gameConstants: undefined,
	sprite: undefined,
	speed: 5,

	init: function(constants) {

		var that = this;

		var texture = PIXI.Texture.fromImage(constants.SPRITE_DIR + that.constants.SPRITE_IMAGE);

		that.gameConstants = constants;
		// position player
		that.sprite = new PIXI.Sprite(texture);	
		that.sprite.position.x = that.constants.SPRITE_WIDTH;
		that.sprite.position.y = window.innerHeight/2;
		that.sprite.pivot.x = that.constants.SPRITE_WIDTH/2;
		that.sprite.pivot.y= that.constants.SPRITE_HEIGHT/2;

		that.sprite.hitArea = new PIXI.Rectangle(30, 30, 100 ,100);

		that.sprite.scale.x = 1;
		that.sprite.scale.y = 1;


	},

	setImage : function(imgsrc) {
		var texture = PIXI.Texture.fromImage(imgsrc);
		this.sprite.setTexture(texture);
	},

	moveUp: function() {
		// check not off top of screen
		if (this.sprite.position.y - this.sprite.pivot.y - this.speed<=0) {
			return
		}
		this.sprite.position.y = this.sprite.position.y - this.speed;
		//console.log("Player up :"+this.sprite.position.y);
	},

	moveDown: function() {
		// check not off bottom of screen
		if (this.sprite.position.y + this.sprite.pivot.y + this.speed > window.innerHeight) {
			return
		}
		this.sprite.position.y = this.sprite.position.y + this.speed;
		//console.log("Player down :"+this.sprite.position.y);
	},

	moveLeft: function() {
		if (this.sprite.position.x - this.sprite.pivot.x - this.speed<=0) {
			return
		}
		this.sprite.position.x = this.sprite.position.x - this.speed;
		//console.log("Player left :"+this.sprite.position.x);
	},

	moveRight: function() {
		if (this.sprite.position.x + this.sprite.pivot.x + this.speed > window.innerWidth) {
			return
		}
		this.sprite.position.x = this.sprite.position.x + this.speed;
		//console.log("Player right :"+this.sprite.position.x);
	},

	fire: function() {
		console.log("Player fire");
	}

}

module.exports = player;
