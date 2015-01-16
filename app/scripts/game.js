
var PIXI = require('pixi.js');
var player = require('./player');
var enemy = require('./enemy');

var downPressed=false;
var upPressed=false;
var leftPressed=false;
var rightPressed=false;
var firePressed=false;

var gameWidth = 800;
var gameHeight = 480;
var scaleX = 1;
var scaleY = 1;

var game = {

	constants : {

		SPRITE_DIR : 'images/sprites/'

	},

	stage : new PIXI.Stage(),

	init: function() {

		var that = this;

		var opts = opts || {};
		that.initKeys(opts);
		
		// You can use either PIXI.WebGLRenderer or PIXI.CanvasRenderer
		var renderer = new PIXI.WebGLRenderer(gameWidth, gameHeight);

		var appDiv = document.getElementById("canvas-div");
		appDiv.appendChild(renderer.view);


		var backgroundSprite = new PIXI.Sprite.fromImage('images/backgrounds/graph-paper.jpg'); 
		that.stage.addChild(backgroundSprite);

		player.init(that.constants);
		that.stage.addChild(player.sprite);

		enemy.init(that.constants);
		that.stage.addChild(enemy.sprite);


		requestAnimationFrame(animate);

		function animate() {

			that.movePlayer();

			enemy.sprite.rotation += 0.05;

			renderer.render(that.stage);

			requestAnimationFrame(animate);
		}


	},

	movePlayer : function() {

		// called every animation frame

		if (downPressed) {
			player.moveDown();
		}
		if (upPressed) {
			player.moveUp();
		}
		if (leftPressed) {
			player.moveLeft();
		}
		if (rightPressed) {
			player.moveRight();
		}
	},

	setPlayerImage : function(imgsrc) {
		player.setImage(imgsrc);
	},

	setEnemyImage : function(imgsrc) {
		enemy.setImage(imgsrc);
	},

	initKeys : function(opts) {

	opts = opts || {};
	var upKey = opts.charCode || 'w'.charCodeAt(0) -32;
	var downKey = opts.charCode || 's'.charCodeAt(0) - 32;
	var leftKey = opts.charCode || 'a'.charCodeAt(0) - 32;
	var rightKey = opts.charCode || 'd'.charCodeAt(0) - 32;
	var fireKey = opts.charCode || ' '.charCodeAt(0) - 32;

	
	var element = opts.element;

	// callback to handle keypress
	var __bind = function(fn, me) {
		return function() {
			return fn.apply(me, arguments);
		}
	}

	var onKeyDown = __bind(function(event) {
		
		switch(event.which) {
			case downKey:
				downPressed = true;
				break;
			case upKey:
				upPressed = true;
				break;
			case leftKey:
				leftPressed = true;
				break;
			case rightKey:
				rightPressed = true;
				break;
			case fireKey:
				firePressed = true;
				break;

		}
		return;
	}, this);

	var onKeyUp = __bind(function(event) {
		
		switch(event.which) {
			case downKey:
				downPressed = false;
				break;
			case upKey:
				upPressed = false;
				break;
			case leftKey:
				leftPressed = false;
				break;
			case rightKey:
				rightPressed = false;
				break;
			case fireKey:
				firePressed = false;
				break;

		}
		return;
	}, this);

	document.addEventListener('keydown', onKeyDown, false);
	document.addEventListener('keyup', onKeyUp, false);

	return {
		unbind : function() {
			document.removeEventListener('keydown', onKeyDown, false);
			document.removeEventListener('keyup', onKeyUp, false);
			}
		}


	}


};


module.exports = game;
