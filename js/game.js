
class Game {
    constructor() {
        this.background
        this.enemiesEasy = []
        this.leftBorder = 0
        this.rightBorder = width
        this.topBorder = 0
        this.buttomBorder = heigth
    }

    setup() {
        this.enemy = new Enemy()
    }

    draw() {
        clear()
        // draw background
        image(this.background, 0, 0, width, heigth)

        //hier vielleicht ausklammern?!::
        this.enemiesEasy.forEach(function(enemy){
            line(enemy.enemyCenterPosX, enemy.enemyCenterPosY, mouseX, mouseY)
        })

        // add enemies
        if (frameCount % 40 === 0) {
			// add an enemy to the enemyEasy array
			this.enemiesEasy.push(new Enemy(this.enemyImage))
		}
		this.enemiesEasy.forEach(function (enemy) {
			enemy.draw()
		})

        // clear dead enemies or enemies out of sight
        this.enemiesEasy = this.enemiesEasy.filter(enemy => {
			if (enemy.enemyPositionX < (0 - enemy.enemyWidth)) {
				return false
			} 
            else {
				return true
			}
		})

		console.log(this.enemiesEasy.length)
    }

    // shoot(){
    //     console.log(`x: ${mouseX} / y: ${mouseY}`)
    // }

    hit(){
        console.log(this.enemiesEasy);
        
        // this.enemiesEasy.forEach(function(enemy){
        //     let distanceToEnemy = dist(enemy.enemyCenterPosX, enemy.enemyCenterPosY, mouseX, mouseY);
    
        //     if (distanceToEnemy < enemy.hitBoxRadius){
        //         enemy.enemyHit = true 
        //         console.log('Treffer ;)');

        //         game.enemiesEasy = game.enemiesEasy.filter(enemy => {
        //             if (enemy.enemyHit === true) {
        //                 return false
        //             } else {
        //                 return true
        //             }
        //         })
        //     } else {
        //         console.log('Daneben!');
        //     }
        // })  

        // kürzere Version:
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