var miimag1;
var miimag2;
var miimag3;
var miimag4;
var miimag5;
var miimag6;
var miimag7;
var miimag8;
var miimag11;
var miimag14;

var miimag20;
var miimag21;
var miimag22;
var miimag23;
var miimag30;
var miimag31;
var miimga32;
var miimag33;
var miimag34;
var miimag35;

var miimag38;
var miimag39;
var miimag40;
var miimag41;

var miimag49;
var miimag54;
var miimag55;
var miimag56;
var miimag57;
var miimag61;
var miimag64;
var miimag66;
var miimag68;
var miimag69;


var tamX = 0;
var tamY = 0;

var tamImg8 = 0;

function preload() {
  miimag1 = loadImage("data/imagen1.png");
  miimag2 = loadImage("data/imagen2.png");
  miimag3 = loadImage("data/imagen3.png");
  miimag4 = loadImage("data/imagen4.png");
  miimag5 = loadImage("data/imagen5.png");
  miimag6 = loadImage("data/imagen6.png");
  miimag7 = loadImage("data/imagen7.png");
  miimag8 = loadImage("data/imagen8.png");
  miimag11 = loadImage("data/imagen11.png");
  miimag14 = loadImage("data/imagen14.png");
  miimag20 = loadImage("data/imagen20.png");
 miimag21 = loadImage("data/imagen21.png");
 miimag22 = loadImage("data/imagen22.png");
 miimag23 = loadImage("data/imagen23.png");
miimag30 = loadImage("data/imagen30.png");
miimag31 = loadImage("data/imagen31.png");
miimag32 = loadImage("data/imagen32.png");
miimag33 = loadImage("data/imagen33.png");
miimag34 = loadImage("data/imagen34.png");
miimag35 = loadImage("data/imagen35.png");
miimag38 = loadImage("data/imagen38.png");
miimag39 = loadImage("data/imagen39.png");
miimag40 = loadImage("data/imagen40.png");
miimag41 = loadImage("data/imagen41.png");
miimag49 = loadImage("data/imagen49.png");

miimag54 = loadImage("data/imagen54.png");
miimag55 = loadImage("data/imagen55.png");
miimag56 = loadImage("data/imagen56.png");
miimag57 = loadImage("data/imagen57.png");
miimag61 = loadImage("data/imagen61.png");
miimag64 = loadImage("data/imagen64.png");
miimag66 = loadImage("data/imagen66.png");
miimag68 = loadImage("data/imagen68.png");
miimag69 = loadImage("data/imagen69.png");
}

function setup() { 
  //frameRate(4);
  createCanvas(1004,650);
} 

function draw() { 
  //background(220);
image(miimag1,0,0);

if (millis() > 100 && millis() < 300) {
    image(miimag2, 0, 0);
  }
if (millis() > 300 && millis() < 500) {
    image(miimag3, 0, 0);
  }
  if (millis() > 500 && millis() < 700) {
    image(miimag4, 0, 0);
  }
  if (millis() > 700 && millis() < 900) {
    image(miimag5, 0, 0);
  }
  if (millis() > 900 && millis() < 1100) {
    image(miimag6, 0, 0);
  }
  if (millis() > 1100 && millis() < 1300) {
    image(miimag7, 0, 0);
  }
  if (millis() > 1300 && millis() < 1500) {
    image(miimag8, 0, 0);
  }
  if (millis() > 1500 && millis() <1700) {
    image(miimag8,160,0);
    
  }
  if (millis() > 1700 && millis() <2000) {
    fill(255,255,255);
   rect(0,0,1004,650); 
    image(miimag8,524,0);
  }
 if (millis() > 2000 && millis() <2300) {
   fill(255,255,255);
   rect(0,0,1004,650); 
   image(miimag11,0,0);
  }
if (millis() > 2300 && millis() <2500) {
    image(miimag11,-220,-116,1388,883);
    
  }
if (millis() > 2500 && millis() <2700) {
    image(miimag11,-293,-325,1592,1013);
    
  }
if (millis() > 2700 && millis() <3000) {
    image(miimag14,77,0);
    
  }
if (millis() > 3000 && millis() <3300) {
    image(miimag14,-278,-230,1728,1110);
 
  }
if (millis() > 3300 && millis() <3800) {
    image(miimag14,-278,-230,1728,1110);
    fill(1,1,1);
    ellipse(517,321,tamX,tamY);
    tamX = tamX + 60;
    tamY = tamY + 60;
  }
if (millis() > 3800 && millis() < 4000) {
    
    fill(1,1,1);
    ellipse(517,321,tamX+1191,tamY+1191);
    tamX = tamX - 90;
    tamY = tamY - 90;
  }
if (millis() > 4000 && millis() < 4300) {
    image(miimag20,0,0);
 
  }
if (millis() > 4300 && millis() < 4500) {
    image(miimag21,0,0);
}
if (millis() > 4500 && millis() < 4700) {
    image(miimag22,0,0);
}
if (millis() > 4700 && millis() < 4900) {
    image(miimag23,0,135);
}
if (millis() > 4900 && millis() < 5100) {
   
 fill(255,255,255);
   rect(0,0,1004,650); 
image(miimag23,0,281);
}
if (millis() > 5100 && millis() < 5300) {
    
 fill(255,255,255);
   rect(0,0,1004,650); 
image(miimag23,0,464);
}
if (millis() > 5300 && millis() < 5500) {
  fill(255,255,255);
   rect(0,0,1004,650);  
  image(miimag30,-586,0);
}
if (millis() > 5500 && millis() < 5700) {
  fill(255,255,255);
   rect(0,0,1004,650); 
  image(miimag30,-353,0);
}
if (millis() > 5700 && millis() < 5900) {
  fill(255,255,255);
   rect(0,0,1004,650);  
  image(miimag30,-129,0);
}
if (millis() > 5900 && millis() < 6100) {
  image(miimag30,0,0);
}
if (millis() > 6100 && millis() < 6300) {
  image(miimag31,0,0);
}
if (millis() > 6300 && millis() < 6500) {
  image(miimag32,0,0);
}
if (millis() > 6500 && millis() < 6700) {
  image(miimag33,0,0);
}
if (millis() > 6700 && millis() < 6900) {
  image(miimag34,0,0);
}
if (millis() > 6900 && millis() < 7100) {
  image(miimag35,0,0);
}
if (millis() > 7100 && millis() < 7300) {
  image(miimag35,0,0);
}
if (millis() > 7300 && millis() < 7500) {
  image(miimag38,0,0);
}
if (millis() > 7500 && millis() < 7700) {
  image(miimag39,0,0);
}
if (millis() > 7700 && millis() < 7900) {
  image(miimag40,0,0);
}
if (millis() > 7900 && millis() < 8100) {
  image(miimag41,0,0);
}
if (millis() > 8100 && millis() < 8300) {
  image(miimag41,178,0);
}
if (millis() > 8300 && millis() < 8500) {
  image(miimag41,259,0);
}
if (millis() > 8500 && millis() < 8700) {
  rect(0,0,1004,650);
  image(miimag41,393,0);
    
  
}
if (millis() > 8700 && millis() < 9100) {
  rect(0,0,1004,650);
  image(miimag41,521,0);
   

}
if (millis() > 9100 && millis() < 9300) {
  rect(0,0,1004,650);  
  image(miimag41,701,0);
  
  
}
if (millis() > 9300 && millis() < 9700) {
  rect(0,0,1004,650);
  image(miimag49,0,436);
   
  
}
if (millis() > 9700 && millis() < 9900) {
  rect(0,0,1004,650); 
  image(miimag49,0,225);
  
}
if (millis() > 9900 && millis() < 11000) {
  image(miimag49,0,0);
}
if (millis() > 11000 && millis() < 11300) {
  image(miimag54,0,0);
}
if (millis() > 11300 && millis() < 11600) {
  image(miimag55,0,0);
}
if (millis() > 11600 && millis() < 11900) {
  image(miimag56,0,0);
}
if (millis() > 11900 && millis() < 12200) {
  image(miimag57,0,0);
}
if (millis() > 12200 && millis() < 12500) {
  image(miimag61,0,0);
}
if (millis() > 12500 && millis() < 12800) {
  image(miimag64,0,0);
}
if (millis() > 12800 && millis() < 13100) {
  image(miimag66,0,0);
}
if (millis() > 13100 && millis() < 13400) {
  image(miimag68,0,0);
}
if (millis() > 13400 && millis() < 13700) {
  image(miimag69,0,0);
}
//if (frameCount < 70) {
//    //saveCanvas(name+frameCount, 'jpg');
//  }



}