canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
rover_width = 100;
rover_height = 90;
player_width = 50;
player_height = 120;
var rover_image = "rover.png";
var player_image = "player.png";
nasa_mars_images = ["Mars1.jpeg", "Mars2.jpeg", "Mars3.jpeg", "Mars4.jpeg"];
random_number = Math.floor(Math.random()*4);
var background_image = nasa_mars_images[random_number];
rover_x = 10;
rover_y = 10;
player_x = 1000;
player_y = 10;


function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_image;

    player_imgTag = new Image();
    player_imgTag.onload = uploadRover;
    player_imgTag.src = player_image;
}

function uploadRover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
    ctx.drawImage(player_imgTag, player_x, player_y, player_width, player_height);
    
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0,0, canvas.width, canvas.height);
}


window.addEventListener("keydown", my_keydown);
window.addEventListener("keydown", my_keydown);


function my_keydown(e){
    key_pressed = e.keyCode;
    console.log(key_pressed);
    if(key_pressed == '37'){
        left();
        console.log("left");
    }
    //w
    if(key_pressed == '87'){
        up2();
        console.log("up");
    }
    if(key_pressed == '38'){
        up();
        console.log("up");
    }

    if(key_pressed == '39'){
        right();
        console.log("right");
    }

    if(key_pressed == '40'){
        down();
        console.log("down");
    }
}

function up(){
    if(rover_y >= 0){
        rover_y -= 10;
        console.log(rover_y);
        uploadBackground();
        uploadRover();
    }
}
function up2(){
    if(player_y >= 0){
        player_y -= 10;
        console.log(player_y);
        uploadBackground();
        uploadRover();
    }
}
function down(){
    if(rover_y <=500){
        rover_y += 10;
        console.log(rover_y);
        uploadBackground();
        uploadRover();
    }
}

function left(){
    if(rover_x >= 0){
        rover_x -= 10;
        console.log(rover_x);
        uploadBackground();
        uploadRover();
    }
}

function right(){
    if(rover_x <=700){
        rover_x += 10;
        console.log(rover_x);
        uploadBackground();
        uploadRover();
    }
}