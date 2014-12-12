
var PIXI = require('pixi.js');
var player = require('./player');
var enemy = require('./enemy');


var game = {

	constants : {

		GAME_WIDTH : 800,
		GAME_HEIGHT : 600,
		SPRITE_DIR : 'images/sprites/'

	},

	stage : new PIXI.Stage(),

	init: function() {

		var that = this;

		var opts = opts || {};
		that.initKeys(opts);


		
		// You can use either PIXI.WebGLRenderer or PIXI.CanvasRenderer
		var renderer = new PIXI.WebGLRenderer(that.GAME_WIDTH, that.GAME_HEIGHT);

		document.body.appendChild(renderer.view);

		var backgroundSprite = new PIXI.Sprite.fromImage('images/backgrounds/graph-paper.jpg'); 
		that.stage.addChild(backgroundSprite);

		player.init(that.constants);
		that.stage.addChild(player.sprite);

		enemy.init(that.constants);
		that.stage.addChild(enemy.sprite);


		requestAnimationFrame(animate);

		function animate() {
			enemy.sprite.rotation += 0.05;

			renderer.render(that.stage);

			requestAnimationFrame(animate);
		}

	},

	initKeys : function(opts) {

	opts = opts || {};
	var upKey = opts.charCode || 'w'.charCodeAt(0);
	var downKey = opts.charCode || 's'.charCodeAt(0);
	var leftKey = opts.charCode || 'a'.charCodeAt(0);
	var rightKey = opts.charCode || 'd'.charCodeAt(0);
	var fireKey = opts.charCode || ' '.charCodeAt(0);

	
	var element = opts.element;

	// callback to handle keypress
	var __bind = function(fn, me) {
		return function() {
			return fn.apply(me, arguments);
		}
	}

	var onKeyPress = __bind(function(event) {
		
		switch(event.which) {
			case upKey:
				player.moveUp();
				break;
			case downKey:
				player.moveDown();
				break;
			case leftKey:
				player.moveLeft();
				break;
			case rightKey:
				player.moveRight();
				break;
			case fireKey:
				player.fire();
				break;

		}
		return;
	}, this);

	document.addEventListener('keypress', onKeyPress, false);

	return {
		unbind : function() {
			document.removeEventListener('keypress', onKeyPress, false);
		}
	}

}

};


module.exports = game;
