const game = new Game()

// this is used to load the game assets
function preload() {
	console.log('this is the preload from main.js')
	game.preload()
}

function setup() {
	console.log('this is the setup from main.js')
	createCanvas(width, heigth)
    game.setup()
}

function draw() {
	game.draw()
}

function mouseClicked() {
    game.shoot()
    game.hit()
}