class Enemy {
    constructor(){
        this.enemyWidth = 200
        this.enemyHeigth = 200

        this.enemyImage
        this.enemyFlightDirection = Math.round(Math.random())

        if (this.enemyFlightDirection === 0) {
            this.enemyPositionX = 0 - this.enemyWidth
        } else {
            this.enemyPositionX = width
        }

        this.enemyPositionY = random(500)
        
        this.enemySpeed = 3

        this.enemyCenterPosX = this.enemyPositionX + this.enemyWidth/2
        this.enemyCenterPosY = this.enemyPositionY + this.enemyHeigth/2

        this.hitBoxRadius = this.enemyWidth / 2
    }

    draw(){
        this.enemyCenterPosX = this.enemyPositionX + this.enemyWidth/2
        this.enemyCenterPosY = this.enemyPositionY + this.enemyHeigth/2

        // console.log(`flight direction: ${this.enemyFlightDirection}`);

        if (this.enemyFlightDirection === 0){ // flying from left to right
            this.enemyPositionX += 1 * this.enemySpeed
        }

        if (this.enemyFlightDirection === 1){ // flying from right to left
            this.enemyPositionX -= 1 * this.enemySpeed
        }

        image(game.enemyImage, this.enemyPositionX, this.enemyPositionY, this.enemyWidth, this.enemyHeigth)


        // console.log(`Enemy PositionX: ${this.enemyPositionX}`);
        // console.log(`Enemy centerPosX: ${this.enemyCenterPosX}`);
    }
}