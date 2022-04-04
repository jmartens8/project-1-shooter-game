
class Game {
    constructor() {
        
        this.background
    }

    setup() {
        this.enemy = new Enemy()
    }

    draw() {
        clear()
        image(this.background, 0, 0, width, heigth)
        this.enemy.draw()
        line(this.enemy.enemyCenterPosX, this.enemy.enemyCenterPosY, mouseX, mouseY)
    }

    shoot(){
        console.log(`x: ${mouseX} / y: ${mouseY}`)
    }

    hit(){
        let hitBoxRadius = this.enemy.enemyWidth / 2
        let distanceToEnemy = dist(this.enemy.enemyCenterPosX, this.enemy.enemyCenterPosY, mouseX, mouseY);

        if (distanceToEnemy < hitBoxRadius){
            console.log('Treffer');
            // hier muss noch hin, dass die Enemeys wie bei den Coins einem Array beim Start hinzugefügt werden
            // und wenn abgechossen aus dem Array entfernt werden

        } else {
            console.log('Daneben!');
        }
    }



    preload() {
        this.background = loadImage('/assets/background_retro-futurism.jpg')
        this.enemyImage = loadImage('/assets/Lizard_1.png')
    }
}