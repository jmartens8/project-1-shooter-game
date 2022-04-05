class Enemy {
    constructor(width, heigth, image, speed, type){
        this.enemyWidth = width
        this.enemyHeigth = heigth

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

        this.enemyCenterPosX = this.enemyPositionX + this.enemyWidth/2
        this.enemyCenterPosY = this.enemyPositionY + this.enemyHeigth/2

        this.hitBoxRadius = this.enemyWidth / 2
    }

    draw(){
        this.enemyCenterPosX = this.enemyPositionX + this.enemyWidth/2
        this.enemyCenterPosY = this.enemyPositionY + this.enemyHeigth/2

        // flying from left to right
        if (this.enemyFlightDirection === 0) { 
            this.enemyPositionX += 1 * this.enemySpeed
        }

        // flying from right to left
        if (this.enemyFlightDirection === 1) { 
            this.enemyPositionX -= 1 * this.enemySpeed
        }

        image(this.enemyImage, this.enemyPositionX, this.enemyPositionY, this.enemyWidth, this.enemyHeigth)
    }
}