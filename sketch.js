//Create variables here
var dog, happyDog;
var database;
var foodS, foodStock;

function preload(){
  //load images here\
  dog = loadImage("images/Dog.png");
  happyDog = loadImage("images/happydog.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  var dog1 = createSprite(250,250);
  dog1.addImage(dog);
  foodStock = database.ref('food');
    foodStock.on("value", readStock, showErr);
    
}

function readStock(data){
  position = data.val();
}

function showErr(){
  console.log("Error in reading it from the database");
}

function draw() {  

if (keyWentDown(UP_ARROW)) {
  writeStock(foodS);
  dog1.addImage(happyDog);
}

  drawSprites();
  //add styles here
textSize(4);
fill("blue");
stroke("black");
text("Note: Press UP_ARROW Key To Feed The Dog Milk");

}

function writeStock(x){
  database.ref('food').set({
      food:x
  })
}

