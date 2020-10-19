
class Boundary {
    constructor(x1, y1, x2, y2, colorize) {
        this.a = createVector(x1, y1);
        this.b = createVector(x2, y2);
        if(colorize) {
            // this.red = random(150, 255);
            // this.green = random(150, 255);
            // this.blue = random(150, 255);
            this.colorize = colorize;
            this.red
        }
        else{
            this.colorize = 255;
            this.red = 255;
            this.green = 255;
            this.blue= 255;
        }
    }

    update() {
        // this.a.set(this.a.x+1, this.a.y);
    }

    show() {
        stroke(color(`hsb(${this.colorize}, 100%, 100%)`));
        // stroke(color(200));
        line(this.a.x, this.a.y, this.b.x, this.b.y);

    }
}

