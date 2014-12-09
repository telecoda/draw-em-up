var game;

game = function(name) {
  return console.log("Hello " + name + "no coffee");
};

game.init = function() {

	var PIXI = require('pixi.js');

	var GAME_WIDTH = 800;
	var GAME_HEIGHT = 600;
	var SPRITE_WIDTH= 64;
	var SPRITE_HEIGHT = 64;

	// You can use either PIXI.WebGLRenderer or PIXI.CanvasRenderer
	var renderer = new PIXI.WebGLRenderer(GAME_WIDTH, GAME_HEIGHT);

	document.body.appendChild(renderer.view);

	var stage = new PIXI.Stage();

	var playerTexture = PIXI.Texture.fromImage("images/sprites/go-man64.png");

	var player = new PIXI.Sprite(playerTexture);

	var backgroundSprite = new PIXI.Sprite.fromImage('images/backgrounds/graph-paper.jpg'); 
	stage.addChild(backgroundSprite);

	player.position.x = GAME_WIDTH/2;
	player.position.y = GAME_HEIGHT/2;
	player.pivot.x = SPRITE_WIDTH/2;
	player.pivot.y= SPRITE_HEIGHT/2;

	player.scale.x = 2;
	player.scale.y = 2;

	stage.addChild(player);

	requestAnimationFrame(animate);

	function animate() {
		player.rotation += 0.05;

		renderer.render(stage);

		requestAnimationFrame(animate);
	}



}

module.exports = game;
