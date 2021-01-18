class Pip{
    constructor(x, y, width, height){
        var options = {
            restitution: 1

        }
        this.body = Bodies.circle(x, y, radius, options)
        this.color = (random(0,255), random(0,255), random(0,255));
        this.radius=radius;
        World.add(world, this.body)
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        fill("brown");
        ellipse(pos.x, pos.y, 9.5);
    }

};