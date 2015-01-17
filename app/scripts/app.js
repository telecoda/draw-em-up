// Entry-point for the App
var game = require('./game');
game.init();

var fileDropper = require("./fileDropper");

// set up file dropper callbacks
var playerDropDiv = document.getElementById("player-file-dropper");
var playerInputFile = document.getElementById("player-file-input");
var enemyDropDiv = document.getElementById("enemy-file-dropper");
var enemyInputFile = document.getElementById("enemy-file-input");

var enemyFileDropper = fileDropper(enemyDropDiv, enemyInputFile, game.setEnemyImage);
enemyFileDropper();
var playerFileDropper = fileDropper(playerDropDiv, playerInputFile, game.setPlayerImage);
playerFileDropper();

