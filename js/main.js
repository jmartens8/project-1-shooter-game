const game = new Game()

// this is used to load the game assets
function preload() {
	console.log('this is the preload from main.js')
	game.preload()
}

function setup() {
	console.log('this is the setup from main.js')
	createCanvas(gameWidth, gameHeigth)
    game.setup()
}

function draw() {
	game.draw()
}

function mouseClicked() {
    game.hit()
	game.shoot()
}

function keyPressed(){
	if (keyCode === 82){
		game.reload()
	}
}