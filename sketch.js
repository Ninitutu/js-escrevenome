function setup() {
    createCanvas(600, 600);
    background("Pink");
  }
  
  function draw() {
    stroke ("blue");
    fill("red");
    
    if(mouseIsPressed){
      rect(mouseX, mouseY, 10, 10);
     }
  
  }
  