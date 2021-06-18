//Create variables here
var canvas, backgroundImage

var gameState = 0;
var dog
var happyDog
var database 
var FoodS
var FoodStock

var dogImg_png, dogImg1_png;

function preload()
{
	dogImg_png = loadImage("images/doglmg.png");
  dogImg1_png = loadImage("doglmg1.png");

} 

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(500,200);
  dog.addImage("dog",dogImg_png);


  
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(Foods)
  dog2.addImage(dogImg1_png);
}

//function to read values from DB
function readStock(data){
  FoodS=data.val();

}
//function to write vaules DB
function writeStock(x){
  database.ref('/').update({
    
  }

  )
}


  drawSprites();
  

}



