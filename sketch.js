var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, bohrio, radio;
var cars = [];

function preload() {
  backgroundImage = loadImage("./assets/inicio.jpeg");
  car1_img = loadImage("./assets/borioo.png");
  car2_img = loadImage("./assets/radi.png");
  track = loadImage("./assets/joao.jpeg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
