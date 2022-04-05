
class Game {
    constructor() {
        this.background
        this.enemiesEasy = []
        this.timer = 0 // Standard frame rate is 40 fps
    }

    setup() {
        // this.enemy = new Enemy()
    }

    draw() {
        clear()

        // start and update timer
        // console.log(frameRate);


        // draw background
        image(this.background, 0, 0, gameWidth, gameHeigth)

        // draw cursor image
        cursor('/assets/crosshair177.png', 64, 64)

        // Hilfslinien:
        this.enemiesEasy.forEach(function(enemy){
            line(enemy.enemyCenterPosX, enemy.enemyCenterPosY, mouseX, mouseY)
        })

        // add easy enemies
        if (frameCount % 80 === 0) {
			// add an enemy to the enemyEasy array
			this.enemiesEasy.push(new Enemy(200, 200, this.enemyImageEasy, 2))
            console.log('enemy added');
		}

        // add medium enemies
        if (frameCount % 140 === 0) {
			// add an enemy to the enemyEasy array
			this.enemiesEasy.push(new Enemy(120, 120, this.enemyImageMedium, 4))
            console.log('enemy added');
		}

        // add hard enemies
        if (frameCount % 160 === 0) {
			// add an enemy to the enemyEasy array
			this.enemiesEasy.push(new Enemy(100, 100, this.enemyImageHard, 8))
            console.log('enemy added');
		}

        // draw enemies from array
		this.enemiesEasy.forEach(function(enemy) {
			enemy.draw()
		})

        // clear enemies out of sight from array
        this.enemiesEasy = this.enemiesEasy.filter(enemy => {
            // check flight LtR - right border 
			if (enemy.enemyFlightDirection === 0 && enemy.enemyPositionX > (gameWidth)) {
				return false
			} 
            // check flight LtR - top border
            else if (enemy.enemyFlightDirection === 0 && enemy.enemyPositionY < (0 - enemy.enemyHeigth)) {
				return false
			}
            // check flight LtR - buttom border
            else if (enemy.enemyFlightDirection === 0 && enemy.enemyPositionY > (gameHeigth)) {
				return false
			}
            // check flight RtL - left border
            else if (enemy.enemyFlightDirection === 1 && enemy.enemyPositionX < (0 - enemy.enemyWidth)) {
				return false
			}
            // check flight RtL - top border
            else if (enemy.enemyFlightDirection === 1 && enemy.enemyPositionY < (0 - enemy.enemyHeigth)) {
				return false
			}
            // check flight RtL - buttom border
            else if (enemy.enemyFlightDirection === 1 && enemy.enemyPositionY > (gameHeigth)) {
				return false
			}
            else return true
		})

		// console.log(this.enemiesEasy.length)
    }

    // shoot(){
    //     console.log(`x: ${mouseX} / y: ${mouseY}`)
    // }

    hit(){
        console.log(this.enemiesEasy);
        
        // clear dead enemies from array
        this.enemiesEasy = this.enemiesEasy.filter(enemy => {
            if (dist(enemy.enemyCenterPosX, enemy.enemyCenterPosY, mouseX, mouseY) < enemy.hitBoxRadius) {
                console.log('Treffer ;)')
                return false
            } else {
                console.log('Daneben!')
                return true
            }
        }) 
    }

    preload() {
        this.background = loadImage('/assets/background_retro-futurism.jpg')
        this.enemyImageEasy = loadImage('/assets/Lizard_1.png')
        this.enemyImageMedium = loadImage('/assets/Sheep_1.png')
        this.enemyImageHard = loadImage('/assets/Spider_1.png')
    }
}