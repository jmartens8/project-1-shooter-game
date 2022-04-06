class AlienShip {
    constructor(mousePosX, mousePosY) {
        this.width = 250
        this.heigth = 250

        this.x = (gameWidth / 2) - (this.width / 2)
        this.y = (gameHeigth) - (this.heigth - (this.heigth/8))

        this.mousePosX = mousePosX
        this.mousePosY = mousePosY

        //this.dir = createVector(this.mousePosX-this.x, this.mousePosY-this.y).normalize()
        this.direction = 0
        this.radians = 0
    }

    draw() {
        // console.log('Alien ship has arrived');
        



        // translate(this.x, this.y)
        // rotate(Math.atan2(mouseY-this.y, mouseX-this.x))    
        
        
        // // let angle = Math.atan2(mouseY-this.y, mouseX-this.x) * 180 / Math.PI
        
        // // translate(this.x, this.y);
        // // // rotate(angle)
        // // rotate(angle + radians(-90))
        image(game.alienShipImage, this.x, this.y, this.width, this.heigth)   
    }
}
