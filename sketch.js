var x = 50;
var y = 50;
var speedx = 3;
var speedy = 6;
var r;
var g; 
var b;
var ellipseRadius = 100;
var run;
var box1x;

function setup(){
  createCanvas(1000, 400);
  run = createGraphics(860, 300);
}

function draw(){
      background(155); 
      run.background(100);
      run.fill(30, 200, 150);
      run.stroke(y);
      run.ellipse(x, y, 60, 60);
      run.fill(200,10, 10);
      run.triangle(x-50, y-50, 60, 60);
      run.triangle(x, y, 60, 60);
      run.rect(x, y-105, 60, 60);
      run.rect(x, y, 60, 60);
      run.triangle(x, y-105, 60);
      run.fill(100, 90, y);
      fill(100, 234, 60);
      rect(x, y, 60, 60);
      fill(x, y, y);
      rect(x, y, 60, 60);
      run.quad(x, y, x, 20, 69, 63, 30, 290-y);
      run.quad(y, x, y, 20, 60, 63, 30, 290-y);
      run.quad(y, x, y, 0, 0, x - 63, x - 30, 290-y);
      image(run, 40, 40);
   
   
   //I wrote this so that the background s=changes when clicked
   
     
   
   //makesoutline white, 6px thick, no color inside shaapes
   stroke(255); 
   strokeWeight(2);
   
   
   //a circle
   for(var i = 0; i < 40; i++){
        ellipse(x, y, 100, 100, ellipseRadius);
        ellipseRadius = ellipseRadius - 20;
   }
   //this code is going to get the circle to move on its own.
    
    x = x + speedx;
    y = y + speedy;
    if(x > width || x < 0){
        console.log("CIRCLE IS OFF THE SCREEN!!!!")
        speedx = -speedx;
    }
    
    
    console.log(x);
    
    if(y > height || y < 0){
        console.log("CIRCLE IS OFF THE SCREEN!!!!")
        speedy = -speedy;
    }
    
    console.log(y);
    
    
    
}



