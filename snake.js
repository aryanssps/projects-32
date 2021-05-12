class Snake{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.xDirection = 0;
        this.yDirection = 0;
        this.tailCount = 1;
        this.snakeXPosition = [];
        this.snakeYPosition =[];
    }
    display(){
        fill ("green");
        for(var i =0; i<this.tailCount; i++){
            var y = this.snakeYPosition[i];
            var x = this.snakeXPosition[i];
            rect (x,y,10,10);
        }
    }
    updatePosition(){
        this.x+=this.xDirection;
        this.y+=this.yDirection;
        if(this.snakeXPosition.length>=this.tailCount){
            this.snakeXPosition.shift();
            this.snakeYPosition.shift();
        }
        this.snakeXPosition.push(this.x);
        this.snakeYPosition.push(this.y);
    }
    eat(x,y){
        if(this.x === x && this.y ===y){
            this.tailCount++;
            return true;
        }
        else{
            return false;
        }
    }
}
