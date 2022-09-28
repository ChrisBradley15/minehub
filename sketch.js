function setup() {
  createCanvas(800, 600);
  noLoop();
}

function draw() {
  background(220);
  noFill();
  square(0, 200, 200);
  drawWitherSkelly();
  drawCow();
  drawEnderMite();
  drawSlime();
  drawDrowned();
}

function drawWitherSkelly() {
  translate(0, 200);
  noStroke();
  
  // Grey
  fill(100, 50, 50);
  square(20, 30, 10);
  
  // Black
  fill(0, 0, 0);
  rect(25, 100, 50,25);
  rect(125, 100, 50, 25);
  rect(50, 150, 100, 25);
  
  translate(0, -200);
  
}


function drawCow() {
  translate(600, 0);
  noStroke();
  fill(0, 0, 0);
  square(0,75, 25);
  
  fill(0, 0, 0);
  square(175, 75, 25);
  
  fill(255, 255, 255); 
  square(25, 75, 25)
  
  fill(255, 255, 255);
  square(150, 75, 25)
  
  fill(211, 211, 211); 
  square(0, 50, 25);
  
  fill(211, 211, 211); 
  square(25, 50, 25);
  
  fill(211, 211, 211); 
  square(150, 50, 25)
  
  fill(211, 211, 211); 
  square(175, 50, 25);
  
  fill(62, 38 ,45); 
  square(0, 100, 25)
  
   fill(62, 38 ,45); 
   square(0, 125, 25)
  
   fill(62, 38 ,45); 
   square(0, 150, 25)

   fill(62, 38 ,45); 
   square(0, 175, 25)

   fill(62, 38 ,45); 
   square(175, 100, 25)

   fill(62, 38 ,45); 
   square(175, 125, 25)

   fill(52, 42 ,32); 
   square(175, 150, 25)

   fill(62, 38 ,45); 
   square(175, 175, 25)
  
  translate(-600, 0);
}


function drawEnderMite() {
  translate(400, 400);

  noFill();
  strokeWeight(1);
  square(0, 0, 200);
  square(20, 20, 160)


  strokeWeight(0)
  fill(50, 0, 75)
  rect(50, 60, 100, 80)

  fill(100, 0, 0)
  rect(80, 70, 40, 20)

  translate(-400, -400)    
  }

function drawSlime() {
  translate(0, 0);
  
  noFill()
  strokeWeight(1);
  square(0, 0, 200);
  square(20, 20, 160)
  
  strokeWeight(0)
  fill(50, 200, 100)
  square(20, 20, 160)
  
  fill(50, 175, 75)
  square(40, 40, 120)
  square(20, 100, 20)
  square(160, 120, 20)
  square(80, 20, 20)
  square(80, 160, 20)
  
  fill(50, 100, 50)
  square(40, 60, 40)
  
  square(120, 60, 40)
  
  square(100, 120, 20)
  
  translate(0, 0);
}


function drawEnderMite() {
  translate(400, 400);

  noFill();
  strokeWeight(1);
  square(0, 0, 200);
  square(20, 20, 160)


  strokeWeight(0)
  fill(50, 0, 75)
  rect(50, 60, 100, 80)

  fill(100, 0, 0)
  rect(80, 70, 40, 20)

  translate(-400, -400)    
  }

function drawSlime() {
  translate(0, 0);
  
  noFill()
  strokeWeight(1);
  square(0, 0, 200);
  square(20, 20, 160)
  
  strokeWeight(0)
  fill(50, 200, 100)
  square(20, 20, 160)
  
  fill(50, 175, 75)
  square(40, 40, 120)
  square(20, 100, 20)
  square(160, 120, 20)
  square(80, 20, 20)
  square(80, 160, 20)
  
  fill(50, 100, 50)
  square(40, 60, 40)
  
  square(120, 60, 40)
  
  square(100, 120, 20)
  
  translate(0, 0);
}
function drawDrowned() {
  translate(400, 0);
  noStroke();
  fill(40, 126, 0);
  square(25, 0, 25);
  
  fill(48, 143, 1);
  square(0, 0, 25);
  
  fill(48, 143, 1)
  square(50, 0, 25)
  
  fill(75, 161, 126)
  square(75, 0, 25)
  
  fill(75, 140, 124)
  square(100, 0, 25)
  
  fill(75, 140, 124)
  square(125, 0, 25)
  
  fill(77, 108, 103)
  square(150, 0, 25)
  
  fill(40, 126, 0)
  square(175, 0, 25)
  
  fill(48,143,1)
  square(0, 25, 25)
  
  fill(77, 108, 103)
  square(25, 25, 25)
  
  fill(33, 108, 0)
  square(50, 25, 25)
  
  fill(83, 129, 123)
  square(75, 25, 25)
  
  fill(74, 161, 126)
  square(100, 25, 25)
  
  fill(83, 129, 123)
  square(125, 25, 25)
  
  fill(81, 176, 111)
  square(150, 25, 25)
  
  fill(83, 129, 123)
  square(175, 25, 25)
  
  fill(33, 108, 0)
  square(0, 50, 25)
  
  fill(83, 129, 123)
  square(25, 50, 25)
  
  fill(77, 108, 103)
  square(50, 50, 25)
  
  fill(75, 140, 124)
  square(75, 50, 25)
  
  fill(83, 129, 123)
  square(100, 50, 25)
  
  fill(75, 140, 124)
  square(125, 50, 25)
  
  fill(38, 79, 73)
  square(150, 50, 25)
  
  fill(77, 108, 103)
  square(175, 50, 25)
  
  fill(77, 108, 103)
  square(0, 75, 25)
  
  fill(75, 140, 124)
  square(25, 75, 25)
  
  fill(83, 129, 123)
  square(50, 75, 25)
  
  fill(83, 129, 123)
  square(75, 75, 25)
  
  fill(75, 140, 124)
  square(100, 75, 25)
  
  fill(83, 129, 123)
  square(125, 75, 25)
  
  fill(83, 129, 123)
  square(150, 75, 25)
  
  fill(75, 140, 124)
  square(175, 75, 25)
  
  fill(83, 129, 123)
  square(0,100, 25)
  
  fill(139, 233, 209)
  square(25, 100, 25)
  
  fill(139, 233, 209)
  square(50, 100, 25)
  
  fill(83, 129, 123)
  square(75, 100, 25)
  
  fill(83, 129, 123)
  square(100, 100, 25)
  
  fill(139, 233, 209)
  square(125, 100, 25)
  
  fill(139, 233, 209)
  square(150, 100, 25)
  
  fill(83, 129, 123)
  square(175, 100, 25)
  
  fill(83, 129, 123)
  square(0, 125, 25)
  
  fill(75, 140, 124)
  square(25, 125, 25)
  
  fill(71, 110, 105)
  square(50, 125, 25)
  
  fill(98, 217, 214)
  square(75, 125, 25)
  
  fill(98, 217, 214)
  square(100, 125, 25)
  
  fill(71, 110, 105)
  square(125, 125, 25)
  
  fill(71, 110, 105)
  square(150, 125, 25)
  
  fill(83, 129, 123)
  square(175, 125, 25)
  
  fill(83, 129, 123)
  square(0, 150, 25)
  
  fill(83, 129, 123)
  square(25, 150, 25)
  
  fill(139, 233, 209)
  square(50, 150, 25)
  
  fill(139, 233, 209)
  square(75, 150, 25)
  
  fill(139, 233, 209)
  square(100, 150, 25)
  
  fill(139, 233, 209)
  square(125, 150, 25)
  
  fill(83, 129, 123)
  square(150, 150, 25)
  
  fill(75, 140, 124)
  square(175, 150, 25)
  
  fill(71, 110, 105)
  square(0, 175, 25)
  
  fill(83, 129, 123)
  square(25, 175, 25)
  
  fill(71, 110, 105)
  square(50, 175, 25)
  
  fill(71, 110, 105)
  square(75, 175, 25)
  
  fill(71, 110, 105)
  square(100, 175, 25)
  
  fill(71, 110, 105)
  square(125, 175, 25)
  
  fill(83, 129, 123)
  square(150, 175, 25)
  
  fill(77, 108, 103)
  square(175, 175, 25)
  
  translate(-400, 0);
  
  
  
  
}
