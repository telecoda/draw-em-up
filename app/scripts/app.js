// Entry-point for the App
var game = require('./game');
game.init();

var enemyFileDropper = require("./fileDropper");
enemyFileDropper.init("enemy-file-dropper", "enemy-file-input", game.setEnemyImage);

var playerFileDropper = require("./fileDropper");
playerFileDropper.init("player-file-dropper", "player-file-input", game.setPlayerImage);

