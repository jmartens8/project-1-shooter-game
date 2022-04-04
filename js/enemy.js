class Enemy {
    constructor(){
        this.enemyPositionX = width
        this.enemyPositionY = Math.random() * ((heigth-150) - 0);
        this.enemyWidth = 200
        this.enemyHeigth = 200
        // this.enemyVector = createVector(width, Math.random() * ((heigth-150) - 0))
        this.enemyImage
        this.enemyCenterPosX = this.enemyPositionX + this.enemyWidth/2
        this.enemyCenterPosY = this.enemyPositionY + this.enemyHeigth/2
        this.enemyPosYVariance = 100
    }

    draw(){
        this.enemyPositionX -= 1
        this.enemyCenterPosX = this.enemyPositionX + this.enemyWidth/2
        this.enemyCenterPosY = this.enemyPositionY + this.enemyHeigth/2

        this.enemyPositionY 
        // for (let i=0; i < this.enemyPosYVariance; i++){
        //     if (this.enemyCenterPosY)
        //     this.enemyCenterPosY ++

        // }
        image(game.enemyImage, this.enemyPositionX, this.enemyPositionY, this.enemyWidth, this.enemyHeigth)
        // console.log(`Enemy PositionX: ${this.enemyPositionX}`);
        // console.log(`Enemy centerPosX: ${this.enemyCenterPosX}`);

    }
}