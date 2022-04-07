class Enemy {
    constructor(width, heigth, image, speed, type, points){
        this.enemyWidth = width
        this.enemyHeigth = heigth
        this.dead = false

        this.enemyImage = image
        this.enemyFlightDirection = Math.round(Math.random())


        // x postion
        if (this.enemyFlightDirection === 0) {
            this.enemyPositionX = 0 - this.enemyWidth
        } else {
            this.enemyPositionX = gameWidth
        }

        // y postion
        this.enemyPositionY = random(500)
        
        this.enemySpeed = speed
        this.enemyType = type
        this.enemyPoints = points

        this.enemyCenterPosX = this.enemyPositionX + this.enemyWidth/2
        this.enemyCenterPosY = this.enemyPositionY + this.enemyHeigth/2

        this.hitBoxRadius = this.enemyWidth
    }

    draw(){
        this.enemyCenterPosX = this.enemyPositionX + this.enemyWidth/2
        this.enemyCenterPosY = this.enemyPositionY + this.enemyHeigth/2


        // flying from left to right
        if (this.enemyFlightDirection === 0) { 
            this.enemyPositionX += 1 * this.enemySpeed
            this.enemyCenterPosX += 1 * this.enemySpeed // NEU NEU NEU
            // console.log(`enemy position x: ${this.enemyPositionX} // enemy centerPosX ${this.enemyCenterPosX}`);
            // console.log(`radius of enemy hitbox ${this.hitBoxRadius}`);
        }

        // flying from right to left
        if (this.enemyFlightDirection === 1) { 
            this.enemyPositionX -= 1 * this.enemySpeed
            this.enemyCenterPosY -= 1 * this.enemySpeed // NEU NEU NEU
        }

        image(this.enemyImage, this.enemyPositionX, this.enemyPositionY, this.enemyWidth, this.enemyHeigth)
    }
}