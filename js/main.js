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
	if ((mouseX <= gameWidth && mouseY <= gameHeigth) && (mouseX > 0 && mouseY > 0) /*&& game.ammo > 0*/){
		game.shoot()
		game.hit()
	}
	// play gun empty sound, when ammo lvl is 0
	else game.soundGunEmpty.play()
}

function keyPressed(){
	if (keyCode === 82){
		game.reload()
	}
}