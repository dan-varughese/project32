class SlingShot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.2,
            length: 7
        }
        this.pointB = pointB
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }

    fly() {
        this.sling.bodyA = null;
    }

    display() {

        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            rectMode(CENTER);

            if (pointA.x < 200) {
                strokeWeight(6);
                line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);

            } else {
                strokeWeight(2);
                line(pointA.x + 25, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);

            }


            pop();
        }

    }
}