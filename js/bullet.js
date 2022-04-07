class Bullet {
    constructor(x, y, image){
        this.bulletWidth = 50
        this.bulletHeigth = 50
        this.dead = false
        
        this.speed = 25
        this.r = 5
        this.startX = (gameWidth / 2) - 30
        this.startY = gameHeigth - 120 // -110 sind die Anpassungen, dass die Kugeln gut aus der Kanone kommen
        this.targetX = x
        this.targetY = y
        this.dir = createVector(x-this.startX, y-this.startY).normalize()
        this.image = image
        this.angle = Math.atan2(this.startY, this.startX) * 180 / Math.PI;

        this.hitBoxRadius = this.bulletWidth / 2
        this.hitBoxCenterX = this.startX + this.hitBoxRadius
        this.hitBoxCenterY = this.startY + this.hitBoxRadius
    }

    draw(){
        // console.log('bullet drawn');
        // console.log(this.startX);
        // console.log(this.startY);

        
        this.startX += this.dir.x * this.speed;
        this.startY += this.dir.y * this.speed;

        this.hitBoxCenterX += this.dir.x * this.speed;
        this.hitBoxCenterY += this.dir.y * this.speed;

        // translate(this.startX, this.startY);
        // rotate(this.dir.heading() - radians(90));
        // image(this.image, 0, 0, this.bulletWidth, this.bulletHeigth)        
        image(this.image, this.startX, this.startY, this.bulletWidth, this.bulletHeigth)   
    }
}