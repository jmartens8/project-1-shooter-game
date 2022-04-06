
class Game {
    constructor() {
        this.background
        this.enemiesArr = []
        this.bulletsArr = []
        this.alienShip = new AlienShip ()
        this.timer = 0 // Standard frame rate is 40 fps
        this.ammo = 12
    }

    setup() {
        // this.enemy = new Enemy()
    }

    draw() {
        clear()

        // draw background
        image(this.background, 0, 0, gameWidth, gameHeigth)

        // draw cursor image
        cursor('/assets/crosshair177.png', 64, 64)

        // draw alienShip
        this.alienShip.draw(mouseX, mouseY)

        // Hilfslinien:
        this.enemiesArr.forEach(function(enemy){
            line(enemy.enemyCenterPosX, enemy.enemyCenterPosY, mouseX, mouseY)
        })

        // add easy enemies
        if (frameCount % 80 === 0) {
			// add an enemy to the enemiesArr 
			this.enemiesArr.push(new Enemy(200, 200, this.enemyImageEasy, 2, 'easy'))
		}

        // add medium enemies
        if (frameCount % 140 === 0) {
			// add an enemy to the enemiesArr 
			this.enemiesArr.push(new Enemy(120, 120, this.enemyImageMedium, 4, 'medium'))
		}

        // add hard enemies
        if (frameCount % 160 === 0) {
			// add an enemy to the enemiesArr 
			this.enemiesArr.push(new Enemy(100, 100, this.enemyImageHard, 8, 'hard'))
		}

        // draw enemies from array
		this.enemiesArr.forEach(function(enemy) {
			enemy.draw()
		})

        // clear enemies out of sight from array
        this.enemiesArr = this.enemiesArr.filter(enemy => {
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

        // draw bullets from array
		this.bulletsArr.forEach(function(bullet) {
			bullet.draw()
		})

        // clear bullets out of sight from array
        this.bulletsArr = this.bulletsArr.filter(bullet =>{
            if (bullet.startX > gameWidth || bullet.startX < 0){
                return false
            }
            else if (bullet.startY<0){
                return false
            }
            else return true
        })
    
		
    }

    shoot(){
        this.ammo --
        this.soundGunFire.play()
        
        // add bullets to the array
        this.bulletsArr.push(new Bullet(mouseX,mouseY,this.bulletImage))
        // console.log(this.bulletsArr)
        // console.log(`bulletsArr length: ${this.bulletsArr.length}`);
    }

    reload(){
        this.ammo = 12
        this.soundReload.play()
    }

    hit(){ 
        // clear dead enemies from array

        this.enemiesArr = this.enemiesArr.filter(enemy => {
            if (dist(enemy.enemyCenterPosX, enemy.enemyCenterPosY, mouseX, mouseY) < enemy.hitBoxRadius) {
                console.log('Treffer ;)')
                return false
            } else {
                console.log('Daneben!')
                return true
            }
        }) 

        // clear dead enemies from array (death by bullet) 

        this.enemiesArr = this.enemiesArr.filter(enemy => {
            this.bulletsArr.forEach(bullet => {
                console.log('test');
                if (collideCircleCircle(enemy.enemyCenterPosX, enemy.enemyCenterPosY, enemy.hitBoxRadius, bullet.hitBoxCenterX, bullet.hitBoxCenterY, bullet.hitBoxRadius)){
                    return true
                }
                else {
                    return false
                }
            })
            
        })
            

        // clear bullets out of array that hit enemy

    }

    preload() {
        this.background = loadImage('/assets/background_retro-futurism.jpg')
        this.enemyImageEasy = loadImage('/assets/Lizard_1.png')
        this.enemyImageMedium = loadImage('/assets/Sheep_1.png')
        this.enemyImageHard = loadImage('/assets/Spider_1.png')
        this.soundGunFire = loadSound('/assets/sounds/laser-gun-19sf.mp3')
        this.soundGunEmpty = loadSound('/assets/sounds/LaserEmpty.mp3')
        this.soundReload = loadSound('/assets/sounds/Pushing-Magazine-Into-Gun-www.fesliyanstudios.com.mp3')
        this.bulletImage = loadImage('/assets/LaserBeam.png')
        this.alienShipImage = loadImage('/assets/AlienGun.png')
    }
}