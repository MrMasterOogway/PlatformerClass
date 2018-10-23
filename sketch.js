// PLATFORMER - CLASSES & OBJECTS

// Declare Global Variables
let player1, player2;
let platform, platform2, platform3;

let GREY = 80;
let RED = "#bb2a27";
let GREEN = "#8cc542";
let BLUE = "#28a9e0";
let ORANGE = "#faaf3b";
let BROWN = "#aa6c39";

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(800, 600);
	
	// Initialize Global Variables
	player1 = new JumpingPlayer(200, 580, BLUE, 65, 68, 87);
	player2 = new JumpingPlayer(600, 580, RED, 37, 39, 38);
	platform = new Platform(400, 450, 200);
	platform2 = new Platform(200, 300, 150);
	platform3 = new Platform(600, 200, 250);
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
	// LOGIC
	player1.move();
	player2.move();
	platform.move();
	platform2.move();
	platform3.move();
	
	// DRAW
    background(GREEN);
	player1.show();
	player2.show();
	platform.show();
	platform2.show();
	platform3.show();
}

// EVENT FUNCTIONS
function keyPressed() {
	player1.jump();
	player2.jump();
}
