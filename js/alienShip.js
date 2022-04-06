class AlienShip {
    constructor() {
        this.width = 250
        this.heigth = 250

        this.x = (gameWidth / 2) - (this.width / 2)
        this.y = (gameHeigth) - (this.heigth - (this.heigth/8))

        //this.dir = createVector(this.mousePosX-this.x, this.mousePosY-this.y).normalize()
        this.direction = 0
        this.radians = 0
    }

    draw() {
        push()

        translate(795, 900);
        let angle = Math.atan2(mouseY - 900, mouseX - 795)
        rotate(angle + radians(90));


        imageMode(CENTER)
        image(game.alienShipImage, 0, 0, this.width, this.heigth)
        pop()
    }
}
