var database;
var hipnauticBall, position;
function setup(){
    database=firebase.database();

    createCanvas(500,500);
    hipnauticBall = createSprite(250,250,10,10);
    hipnauticBall.shapeColor = "red";
    var hipnauticBallposition=database.ref("ball/position");
    hipnauticBallposition.on("value",readPosition,showError);
}

function draw(){
    background("white");
    if(position !==undefined){

    
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}
}

function writePosition(x,y){
    database.ref("ball/position").set({
        "x": position.x+x, 
        "y": position.y+y
    })
    
}
function readPosition(data){
    position=data.val();
    console.log(position.x);
    hipnauticBall.x = position.x ;
    hipnauticBall.y = position.y ;
}
function showError(){
    console.log("error in data")
}