class Snake{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.xspeed = 1;
        this.yspeed = 0;
        this.total = 0;
        this.tail = [];
    }

    eat(pos){
        var distance = dist(this.x,this.y,pos.x,pos.y);
        if(distance < 1){
            this.total++;
            return true;
        } else {
            return false
        }
    }

    crash(){
        for (var i = 0 ; i < this.tail.length; i++){
            var pos = this.tail[i];
            var dis = dist(this.x,this.y,pos.x,pos.y);
            
            if (dis < 1){
                this.total = 0;
                this.tail = [];
                textAlign(CENTER);
                textSize(50);
                fill("green");
                text("YOU LOST",width/2,height/2);
                this.body.remove();
            }
        }
       
    }

    direction(x,y){
        this.xspeed = x;
        this.yspeed = y;
    }

    update(){
        if (this.total === this.tail.length){
            for (var i = 0; i < this.tail.length-1; i++){
                this.tail[i] = this.tail[i+1]
            }
        }
        
        this.tail[this.total-1] = createVector(this.x,this.y);

        this.x = this.x + this.xspeed*scl;
        this.y = this.y + this.yspeed*scl;
        this.x = constrain(this.x,0,width-scl);
        this.y = constrain(this.y,0,height-scl);

    }

    display(){
        fill("black");
        for (var i = 0; i < this.tail.length; i++){
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        rect(this.x,this.y,scl,scl);
    }
}