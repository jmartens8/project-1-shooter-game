
class Game {
    constructor() {
        this.background
    }

    draw() {
        clear()
        image(this.background, 0, 0, width, heigth)
    }

    preload() {
        this.background = loadImage('/assets/background_retro-futurism.jpg')
    }
}