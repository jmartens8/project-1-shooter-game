
class Game {
    constructor() {
        this.background
        this.enemiesArr = []
        this.bulletsArr = []
        this.alienShip = new AlienShip ()
        this.timer = 0 // Standard frame rate is 40 fps
        this.ammo = 12
        this.life = 6
        this.gamePoints = 0

        // difficulty adjustments:
        this.speedEasy = 2
        this.speedMedium = 4
        this.speedHard = 8
    }

    setup() {
        // play background music
        game.backgroundMusicFight.loop()

        // set text parameters
        textFont(this.myFont);
        textSize(80);
        textAlign(CENTER, CENTER);
        fill(255, 255, 255)
    }

    draw() {
        clear()

        // console.log(frameCount);
        

        // draw background
        image(this.background, 0, 0, gameWidth, gameHeigth)

        // draw cursor image
        cursor('assets/crosshair177.png', 64, 64)

        // add easy enemies (from the start)
        if (frameCount % 80 === 0) {
			// add an enemy to the enemiesArr 
			this.enemiesArr.push(new Enemy(200, 200, this.enemyImageEasy, this.speedEasy, 'easy', 5))
		}

        // add medium enemies (after 550 frames)
        if (frameCount >= 550 && frameCount % 140 === 0) {
			// add an enemy to the enemiesArr 
			this.enemiesArr.push(new Enemy(120, 120, this.enemyImageMedium, this.speedMedium, 'medium', 10))
		}

        // add hard enemies (after 1200 frames)
        if (frameCount >= 1200 && frameCount % 200 === 0) {
			// add an enemy to the enemiesArr 
			this.enemiesArr.push(new Enemy(100, 100, this.enemyImageHard, this.speedHard, 'hard', 30))
		}

        // draw enemies from array
		this.enemiesArr.forEach(function(enemy) {
			enemy.draw()
		})

        // clear enemies out of sight from array
        this.enemiesArr = this.enemiesArr.filter(enemy => {
            // check flight LtR - right border 
			if (enemy.enemyFlightDirection === 0 && enemy.enemyPositionX > (gameWidth)) {
                game.looseLife()
				return false
			} 
            // check flight LtR - top border
            else if (enemy.enemyFlightDirection === 0 && enemy.enemyPositionY < (0 - enemy.enemyHeigth)) {
                game.looseLife()
				return false
			}
            // check flight LtR - buttom border
            else if (enemy.enemyFlightDirection === 0 && enemy.enemyPositionY > (gameHeigth)) {
                game.looseLife()
				return false
			}
            // check flight RtL - left border
            else if (enemy.enemyFlightDirection === 1 && enemy.enemyPositionX < (0 - enemy.enemyWidth)) {
                game.looseLife()
				return false
			}
            // check flight RtL - top border
            else if (enemy.enemyFlightDirection === 1 && enemy.enemyPositionY < (0 - enemy.enemyHeigth)) {
                game.looseLife()
				return false
			}
            // check flight RtL - buttom border
            else if (enemy.enemyFlightDirection === 1 && enemy.enemyPositionY > (gameHeigth)) {
                game.looseLife()
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
        
        // draw alienShip
        this.alienShip.draw()
    }

    shoot(){
        this.ammo --
        this.soundGunFire.play()
        
        // add bullets to the array
        this.bulletsArr.push(new Bullet(mouseX,mouseY,this.bulletImage))

        // remove a bullet from the html div
        document.querySelector('.ammo :nth-child(1)').remove()

        // show messge to reload
        if (this.ammo === 0){
            // console.log('ammo ist Null');
            document.querySelector('.ammo').innerHTML = `<div><h2>Press r to reload</h2></div>`
        }
        
    }

    reload(){
        this.ammo = 12
        this.soundReload.play()

        //refill the html div ammo with new bullets
        document.querySelector('.ammo').innerHTML = `<div class="bullet" id="bullet1">
        <img src="assets/LaserBall.png" alt="LaserBall">
    </div>
    <div class="bullet" id="bullet2">
        <img src="assets/LaserBall.png" alt="LaserBall">
    </div>
    <div class="bullet" id="bullet3">
        <img src="assets/LaserBall.png" alt="LaserBall">
    </div>
    <div class="bullet" id="bullet4">
        <img src="assets/LaserBall.png" alt="LaserBall">
    </div>
    <div class="bullet" id="bullet5">
        <img src="assets/LaserBall.png" alt="LaserBall">
    </div>
    <div class="bullet" id="bullet6">
        <img src="assets/LaserBall.png" alt="LaserBall">
    </div>
    <div class="bullet" id="bullet7">
        <img src="assets/LaserBall.png" alt="LaserBall">
    </div>
    <div class="bullet" id="bullet8">
        <img src="assets/LaserBall.png" alt="LaserBall">
    </div>
    <div class="bullet" id="bullet9">
        <img src="assets/LaserBall.png" alt="LaserBall">
    </div>
    <div class="bullet" id="bullet10">
        <img src="assets/LaserBall.png" alt="LaserBall">
    </div>
    <div class="bullet" id="bullet11">
        <img src="assets/LaserBall.png" alt="LaserBall">
    </div>
    <div class="bullet" id="bullet12">
        <img src="assets/LaserBall.png" alt="LaserBall">
    </div>`
    }

    checkHit(){
            
        this.enemiesArr.forEach(enemy => {         
            this.bulletsArr.forEach(bullet => {
                if (collideCircleCircle(enemy.enemyCenterPosX, enemy.enemyCenterPosY, enemy.hitBoxRadius, bullet.hitBoxCenterX, bullet.hitBoxCenterY, bullet.hitBoxRadius) && enemy.hit === false) {
                    enemy.hit = true
                    bullet.dead = true
                    
                    // delay that the enemy is dead and therefore will be removed from the array and not drawn anylonger
                    setTimeout(() => {enemy.dead = true}, 1000)

                    // change picture of dead enemy
                    enemy.enemyImage = this.enemyImageDead

                    //play sound
                    this.soundEnemyHit.play()


                    // add the points for each enemy to the score in the html
                    this.gamePoints += enemy.enemyPoints
                    document.getElementById('current-score').innerHTML = this.gamePoints
                    // document.getElementById('score').innerHTML = this.gamePoints
                }
            })
        })

        this.enemiesArr = this.enemiesArr.filter(enemy => {
            if (enemy.dead){
                return false
            }
            else {
                return true
            }
        })

        this.bulletsArr = this.bulletsArr.filter(bullet => {
            if (bullet.dead){
                return false
            }
            else {
                return true
            }
        })
    }

    increaseDifficulty() {

        // console.log(frameCount);

        if (frameCount >= 0){
            this.speedEasy = 4
            if (0 < frameCount && frameCount < 200){
                text('Level 1', gameWidth/2, 350)
            }
        }

        if (frameCount >= 1800){
            this.speedEasy = 4
            if (1800 < frameCount && frameCount < 2000){
                text('Level 2', gameWidth/2, 350)
            }

            // console.log('Speed Easy was increased!');
            // console.log(this.speedEasy);
        }

        if (frameCount >= 2700) {
            this.speedMedium = 8
            if (2300 < frameCount && frameCount < 2500){
                text('Level 3', gameWidth/2, 350)
            }
            // console.log('Speed Medium was increased!');
            // console.log(this.speedMedium);
        }

        if (frameCount >= 3400){
            this.speedHard = 12
            if (3400 < frameCount && frameCount < 3600){
                text('Level 4', gameWidth/2, 350)
            }
            // console.log('Speed Hard was increased!');
            // console.log(this.speedHard);
        }

        if (frameCount >= 3800){
            this.speedEasy = 6
            if (3800 < frameCount && frameCount < 4000){
                text('Level 5', gameWidth/2, 350)
            }
            // console.log('Speed Easy was increased again!');
            // console.log(this.speedEasy);
        }

        if (frameCount >= 4500) {
            this.speedMedium = 10
            if (4500 < frameCount && frameCount < 4700){
                text('Level 6', gameWidth/2, 350)
            }
            // console.log('Speed Medium was increased again!');
            // console.log(this.speedMedium);
        }

        if (frameCount >= 5000){
            this.speedHard = 14
            if (5000 < frameCount && frameCount < 5200){
                text('Good Luck', gameWidth/2, 350)
            }
            // console.log('Speed Hard was increased again!');
            // console.log(this.speedHard);
        }
    }

    looseLife(){
        this.life --
        this.soundLooseLife.play()

        // remove a life from the html div
        document.querySelector('.life :nth-child(1)').remove()
        
        // add empty heart to the html div
        let emptyLife = document.createElement('div')
        emptyLife.innerHTML = `<img src="assets/tile_0046.png" alt="HeartEmtpy">`
        emptyLife.classList.add('heart')
        document.querySelector('.life').appendChild(emptyLife)

        if (this.life < 0){
            game.gameOver()
        }
    }

    gameOver (){
        this.backgroundMusicFight.stop()
        stop()
        this.backgroundMusicEnd.loop()
        
        let gameOver = document.createElement('section')
        gameOver.innerHTML =`<div id="dead">You died!</div><div id="score">Score: ${this.gamePoints}</div><div><img src="https://media.giphy.com/media/l378BzHA5FwWFXVSg/giphy.gif" alt="rick and morty"></div>`
        gameOver.classList.add('game-over')
        document.querySelector('body').appendChild(gameOver)
    }

    preload() {
        // this.backgroundMusicStart = loadSound('')
        this.background = loadImage('assets/cool-geometric-triangular-figure-neon-laser-light-great-background.jpg')
        
        this.enemyImageEasy = loadImage('assets/Lizard_1.png')
        this.enemyImageMedium = loadImage('assets/Sheep_1.png')
        this.enemyImageHard = loadImage('assets/Spider_1.png')
        this.bulletImage = loadImage('assets/LaserBall.png')
        this.alienShipImage = loadImage('assets/AlienGun.png')
        this.enemyImageDead = loadImage('/assets/YQDj.gif')
        
        this.soundGunFire = loadSound('assets/sounds/laser-gun-19sf.mp3')
        this.soundGunEmpty = loadSound('assets/sounds/LaserEmpty.mp3')
        this.soundReload = loadSound('assets/sounds/Pushing-Magazine-Into-Gun-www.fesliyanstudios.com.mp3')
        this.soundLooseLife = loadSound('assets/sounds/hurt.wav')
        this.soundEnemyHit = loadSound('assets/sounds/Explosion 112.wav')
        this.backgroundMusicFight = loadSound('assets/sounds/background/DubStepDropBoom.mp3')
        this.backgroundMusicEnd = loadSound('assets/sounds/background/RhytmicBounceA.mp3')

        this.myFont = loadFont('assets/ethnocentric/ethnocentric\ rg\ it.otf')
    }
}