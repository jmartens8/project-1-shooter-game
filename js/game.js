
class Game {
    constructor() {
        this.background
        this.enemiesEasy = []
       
        // this.leftBorder = 0
        // this.rightBorder = width
        // this.topBorder = 0
        // this.buttomBorder = heigth
    }

    setup() {
        this.enemy = new Enemy()
    }

    draw() {
        clear()
        // draw background
        image(this.background, 0, 0, width, heigth)

        cursor('/assets/crosshair177.png', 64, 64)

        // Hilfslinien:
        this.enemiesEasy.forEach(function(enemy){
            line(enemy.enemyCenterPosX, enemy.enemyCenterPosY, mouseX, mouseY)
        })

        // add enemies
        if (frameCount % 40 === 0) {
			// add an enemy to the enemyEasy array
			this.enemiesEasy.push(new Enemy(this.enemyImage))
            console.log('enemy added');
		}
		this.enemiesEasy.forEach(function (enemy) {
			enemy.draw()
		})

        // clear dead enemies or enemies out of sight
        this.enemiesEasy = this.enemiesEasy.filter(enemy => {
            // check flight LtR - right border 
			if (enemy.enemyFlightDirection === 0 && enemy.enemyPositionX > (width)) {
				return false
			} 
            // check flight LtR - top border
            else if (enemy.enemyFlightDirection === 0 && enemy.enemyPositionY < (0 - enemy.enemyHeight)) {
				return false
			}
            // check flight LtR - buttom border
            else if (enemy.enemyFlightDirection === 0 && enemy.enemyPositionY > (heigth)) {
				return false
			}
            // check flight RtL - left border
            else if (enemy.enemyFlightDirection === 1 && enemy.enemyPositionX < (0 - enemy.enemyWidth)) {
				return false
			}
            // check flight RtL - top border
            else if (enemy.enemyFlightDirection === 1 && enemy.enemyPositionY < (0 - enemy.enemyHeight)) {
				return false
			}
            // check flight RtL - buttom border
            else if (enemy.enemyFlightDirection === 1 && enemy.enemyPositionY > (heigth)) {
				return false
			}
            else return true
		})

		console.log(this.enemiesEasy.length)
    }

    // shoot(){
    //     console.log(`x: ${mouseX} / y: ${mouseY}`)
    // }

    hit(){
        console.log(this.enemiesEasy);
        
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
        this.enemyImage = loadImage('/assets/Lizard_1.png')
    }
}