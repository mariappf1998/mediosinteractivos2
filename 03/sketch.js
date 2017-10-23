var x = 0;
var x1 = 0;
var x2 = 0;
var x3 = 0;
var x4 = 0;
var x5 = 0;
var x6 = 167;
var x7=0;
var velX = 4;
var dirX = 1;
var tamX = 10;
var tamX2 = 40;
var tamX3 =78;

var y = 200;
var y1 = 200;
var y2 = 400;
var y3 = 17;
var y4 = 17;
var y5 = 0;
var y6 = 0;
var y7 = 0;
var y8 = 0;
var y9 = 0;
var y10 = 0;
var y11 = 0;
var y12 = 0;
var y13 = 400;
var y14 = 0;
var y15=0;
var velY = 4;
var dirY = 1;
var tamY = 10;
var tamY2 = 12;
var tamY3 =78;

var miCancion;

function preload() {
  miCancion=loadSound('assets/audio final.mp3');
}



function setup() {
  createCanvas(400, 400);
  miCancion.setVolume(0.8);
  miCancion.play();
  comienzo=millis();
  print(comienzo);
}

function draw() {
  background(38, 122, 239);

  //cuadrado amarillo
  if (millis() > 300 && millis() < 2000) {
    noStroke();
    fill(255, 245, 96);
    rect(x, y, 60, 60);
    x = x + (8 * dirX);
    y = y + (8 * dirY);
  }
  //primer circulo naranja
  if (millis() > 700 && millis() < 1300) {
    noStroke();
    fill(232, 132, 12);
    ellipse(x1 + 200, y1 - 100, tamX, tamY);
    tamX = tamX + 5;
    tamY = tamY + 5;
    //primer circulo morado
  }
  if (millis() > 1100 && millis() < 1700) {
    noStroke();
    fill(173, 110, 232);
    ellipse(x1 + 200, y1 - 100, tamX, tamY);
    tamX = tamX + 5;
    tamY = tamY + 5;
  }
  //segundo circulo naranja
  if (millis() > 1500 && millis() < 2200) {
    noStroke();
    fill(232, 132, 12);
    ellipse(x1 + 200, y1 - 100, tamX, tamY);
    tamX = tamX + 5;
    tamY = tamY + 5;

  }
  //segundo circulo morado
  if (millis() > 1900 && millis() < 3000) {
    noStroke();
    fill(173, 110, 232);
    ellipse(x1 + 200, y1 - 100, tamX, tamY);
    tamX = tamX + 5;
    tamY = tamY + 5;
  }
  //primer circulo rojo
  if (millis() > 2300 && millis() < 2900) {
    noStroke();
    fill(255, 0, 0);
    ellipse(x2, y2, tamX, tamY);
    tamX = tamX + 5;
    tamY = tamY + 5;
    //primer circulo verde
  }
  if (millis() > 2700 && millis() < 3300) {
    noStroke();
    fill(9, 178, 130);
    ellipse(x2, y2, tamX, tamY);
    tamX = tamX + 5;
    tamY = tamY + 5;
  }
  //triangulos amarrillo
  if (millis() > 3300 && millis() < 4100) {
    noStroke();
    fill(255, 195, 25);
    triangle(x3, y3, x3 + 35, y3 + 16, x3, y3 + 31);
    x3 = x3 + (11 * dirX);
  }
  if (millis() > 4100 && millis() < 4900) {
    noStroke();
    fill(255, 195, 25);
    triangle(x4 + 400, y4 + 105, x4 + 365, y4 + 120, x4 + 400, y4 + 136);
    x4 = x4 - (11 * dirX);
  }
// primer rectangulo morado izquierda
  if (millis() > 4900 && millis() < 5100) {
    noStroke();
    fill(255, 0, 171);
    rect(x5 + 32, y5 + 400, 15, 103);
    y5 = y5 - (8 * dirY);
  }
//segundo rectangulo morado izquierda
  if (millis() > 5100 && millis() < 5350) {
    noStroke();
    fill(255, 0, 171);
    rect(60, y6 + 400, 15, 137);
    y6 = y6 - (8 * dirY);
  }
//tercer rectangulo morado izquierda
  if (millis() > 5350 && millis() < 5650) {
    noStroke();
    fill(255, 0, 171);
    rect(89, y7 + 400, 15, 153);
    y7 = y7 - (8 * dirY);
  }
//cuarto rectangulo morado izquierda
  if (millis() > 5650 && millis() < 6000) {
    noStroke();
    fill(255, 0, 171);
    rect(118, y8 + 400, 15, 183);
    y8 = y8 - (8 * dirY);
  }
  //gran rectangulo del centro
  if (millis() > 6000 && millis() < 7750) {
    noStroke();
    fill(255, 0, 171);
    rect(x6, y13, tamX2, tamY2);
    tamY2 = tamY2 - 80;
  }

// primer rectangulo morado derecha
  if (millis() > 6400 && millis() < 6800) {
    noStroke();
    fill(255, 0, 171);
    rect(246, y9 + 400, 15, 183);
    y9 = y9 - (8 * dirY);
  }
// segundo rectangulo morado derecha
  if (millis() > 6800 && millis() < 7200) {
    noStroke();
    fill(255, 0, 171);
    rect(274, y10 + 400, 15, 153);
    y10 = y10 - (8 * dirY);
  }
//tercer rectangulo morado derecha
  if (millis() > 7200 && millis() < 7550) {
    noStroke();
    fill(255, 0, 171);
    rect(303, y11 + 400, 15, 137);
    y11 = y11 - (8 * dirY);
  }
// ultimo rectangulo morado izquierda
  if (millis() > 7550 && millis() < 7750) {
    noStroke();
    fill(255, 0, 171);
    rect(331, y12 + 400, 15, 103);
    y12 = y12 - (8 * dirY);
  }
//circulo rosado con verde izquierda
if (millis() > 7750 && millis() < 7900) {
    stroke(222,0,255);
    strokeWeight(5);  
    fill(20,204,154);
    ellipse(70,130,78,78);
}
//circulo rosado con verde derecha
if (millis() > 7900 && millis() < 8100) {
    stroke(222,0,255);
    strokeWeight(5);  
    fill(20,204,154);
    ellipse(310,130,78,78);
}
//circulo rosado con verde centro
if (millis() > 8100 && millis() < 10200) {
    stroke(222,0,255);
    strokeWeight(5);  
    fill(20,204,154);
    ellipse(200,200,78,78);
} 
//arcos rosado 
 if (millis() > 8300 && millis() < 8800) {
    stroke(222,0,255);
    strokeWeight(5);  
    noFill();
    ellipse(200,200,100,100);
}   
  if (millis() > 8500 && millis() < 9000) {
    stroke(222,0,255);
    strokeWeight(5);  
    noFill();
    ellipse(200,200,120,120);
}   
  if (millis() > 8800 && millis() < 9300) {
    stroke(222,0,255);
    strokeWeight(5);  
    noFill();
    ellipse(200,200,140,140);
}    
   if (millis() > 9100 && millis() < 9600) {
    stroke(222,0,255);
    strokeWeight(5);  
    noFill();
    ellipse(200,200,160,160);
} 
   if (millis() > 9400 && millis() < 9900) {
    stroke(222,0,255);
    strokeWeight(5);  
    noFill();
    ellipse(200,200,180,180);
}   
  if (millis() > 9700 && millis() < 10200) {
    stroke(222,0,255);
    strokeWeight(5);  
    noFill();
    ellipse(200,200,200,200);
}    
//ciruculo se expande
  if (millis() > 10200 && millis() < 10800) {
    stroke(222,0,255);
    strokeWeight(5);  
    fill(20,204,154);
    ellipse(200,200,tamX3,tamY3);
    tamX3=tamX3+60
    tamY3=tamY3+60
} 
//circulo se encoge
 if (millis() > 10800 && millis() < 11300) {
    stroke(222,0,255);
    strokeWeight(5);  
    fill(20,204,154);
    ellipse(200,200,tamX3,tamY3);
    tamX3=tamX3-80
    tamY3=tamY3-80
 }
//rectangulos verdes a los lados
  if (millis() > 11300 && millis() < 15000) {
   noStroke(); 
    fill(144, 255,182);
   rect(0,44,104,15);
  }
if (millis() > 11500 && millis() < 15000) {
   noStroke(); 
    fill(144, 255,182);
   rect(296,44,104,15);
  }
if (millis() > 11800 && millis() < 15000) {
   noStroke(); 
    fill(144, 255,182);
   rect(0,74,104,15);
  }
if (millis() > 12000 && millis() < 15000) {
   noStroke(); 
    fill(144, 255,182);
   rect(296,74,104,15);
  }
if (millis() > 12300 && millis() < 15000) {
   noStroke(); 
    fill(144, 255,182);
   rect(0,104,104,15);
  }
if (millis() > 12500 && millis() < 15000) {
   noStroke(); 
    fill(144, 255,182);
   rect(296,104,104,15);
  }
if (millis() > 12800 && millis() < 15000) {
   noStroke(); 
   fill(144, 255,182);
    rect(0,134,104,15);
}
if (millis() > 13000 && millis() < 15000) {
   noStroke(); 
    fill(144, 255,182);
   rect(296,134,104,15);
  }
if (millis() > 13300 && millis() < 15000) {
   noStroke(); 
    fill(144, 255,182);
   rect(0,164,104,15);
  }
if (millis() > 13500 && millis() < 15000) {
   noStroke(); 
    fill(144, 255,182);
   rect(296,164,104,15);
}

//rectangulos verticales que suben
if (millis() > 13800 && millis() < 15500) {
   noStroke(); 
   fill(144, 255,182);
   rect(x7+150,y14+400,20,400);
   y14=y14-60;  
}
if (millis() > 14150 && millis() < 15500) {
   noStroke(); 
   fill(144, 255,182);
   rect(220,y15+400,20,400);
   y15=y15-60;  
}


}


  
  
  
  
  
  
  