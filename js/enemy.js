class Enemy {
    constructor(){
        this.enemyImage

        this.enemyPositionX = width
        this.enemyPositionY = random(500)

        this.enemyFinalPositionX = 0 - this.enemyWidth
        this.enemyFinalPositionY = random(500)

        this.enemyWidth = 200
        this.enemyHeigth = 200
        
        this.enemySpeed = 10
        this.enemyFlightDirection = Math.round(Math.random())

        this.enemyCenterPosX = this.enemyPositionX + this.enemyWidth/2
        this.enemyCenterPosY = this.enemyPositionY + this.enemyHeigth/2

        this.hitBoxRadius = this.enemyWidth / 2
        this.enemyHit = false //brauchte ich nur für die längere Version der game.hit() method
    }

    draw(){
        this.enemyCenterPosX = this.enemyPositionX + this.enemyWidth/2
        this.enemyCenterPosY = this.enemyPositionY + this.enemyHeigth/2

        console.log(this.enemyFlightDirection);

        if (this.enemyFlightDirection === 0){ // flying from left to right
            
            this.enemyPositionX += 1 * this.enemySpeed
        }

        if (this.enemyFlightDirection === 1){ // flying from right to left
            this.enemyPositionX -= 1 * this.enemySpeed
        }
        // this.enemyPositionX -= 1 * this.enemySpeed

        // if (this.enemyFinalPositionY - this.enemyPositionY >= 0){
        //     this.enemyPositionY -= 1
        // }
        // else if (this.enemyFinalPositionY - this.enemyPositionY < 0){
        //     this.enemyPositionY += 1
        // }

        image(game.enemyImage, this.enemyPositionX, this.enemyPositionY, this.enemyWidth, this.enemyHeigth)


        // console.log(`Enemy PositionX: ${this.enemyPositionX}`);
        // console.log(`Enemy centerPosX: ${this.enemyCenterPosX}`);
    }
}