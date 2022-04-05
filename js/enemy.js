class Enemy {
    constructor(){
        this.enemyPositionX = width
        this.enemyPositionY = random(500)

        this.enemyFinalPositionX = 0 - this.enemyWidth
        this.enemyFinalPositionY = random(500)

        this.enemyWidth = 200
        this.enemyHeigth = 200
        this.enemyImage

        this.enemyCenterPosX = this.enemyPositionX + this.enemyWidth/2
        this.enemyCenterPosY = this.enemyPositionY + this.enemyHeigth/2

        this.hitBoxRadius = this.enemyWidth / 2
        this.enemyHit = false
    }

    draw(){
        this.enemyCenterPosX = this.enemyPositionX + this.enemyWidth/2
        this.enemyCenterPosY = this.enemyPositionY + this.enemyHeigth/2

        this.enemyPositionX -= 2

        if (this.enemyFinalPositionY - this.enemyPositionY >= 0){
            this.enemyPositionY -= 1
        }
        else if (this.enemyFinalPositionY - this.enemyPositionY < 0){
            this.enemyPositionY += 1
        }

        image(game.enemyImage, this.enemyPositionX, this.enemyPositionY, this.enemyWidth, this.enemyHeigth)


        // console.log(`Enemy PositionX: ${this.enemyPositionX}`);
        // console.log(`Enemy centerPosX: ${this.enemyCenterPosX}`);
    }
}