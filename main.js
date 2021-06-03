canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

nasa_mars_images_array= ["nasa_image_1.jpg", "nasa_image_2.jpg", "nasa_image_3.jpg", "nasa_image_4.jpg"];
random_number= Math.floor(Math.random() *4)

rover_width= 100;
rover_height= 90;

rover_x= 10;
rover_y=10;


background_image= nasa_mars_images_array[random_number];
console.log("background_image= "+background_image);
rover_image= "rover.png";

function add() {
    background_imgtag= new Image();
    background_imgtag.onload= uploadbackground;
    background_imgtag.src= background_image;

    rover_imgtag= new Image();
    rover_imgtag.onload= uploadrover;
    rover_imgtag.src= rover_image;
}

function uploadbackground() {
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);

}

function uploadrover() {
    ctx.drawImage(rover_imgtag, rover_x, rover_y, rover_width, rover_height);

}

window.addEventListener("keydown", my_keydown);


function my_keydown(e) {
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed== "38") {
        up();
        console.log("up");
    }
    if(keypressed== "40") {
        down();
        console.log("down");
    }
    if(keypressed== "37") {
        left();
        console.log("left");
    }
    if(keypressed== "39") {
        right();
        console.log("right");
    }
}

function up() {
    if(rover_y >=0) {
        rover_y= rover_y -10;
        console.log("When up arrow is pressed, x="+ rover_x +" | y="+ rover_y);
        
        uploadbackground();
        uploadrover();
    }
}

function down() {
    if(rover_y <=500) {
        rover_y= rover_y +10;
        console.log("When down arrow is pressed, x="+ rover_x +" | y="+ rover_y);
        
        uploadbackground();
        uploadrover();
    }
}

function left() {
    if(rover_x >=0) {
        rover_x= rover_x -10;
        console.log("When left arrow is pressed, x="+ rover_x +" | y="+ rover_y);
        
        uploadbackground();
        uploadrover();
    }
}

function right() {
    if(rover_x <=700) {
        rover_x= rover_x +10;
        console.log("When right arrow is pressed, x="+ rover_x +" | y="+ rover_y);
        
        uploadbackground();
        uploadrover();
    }
}