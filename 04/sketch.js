//variables botones de color

var boton1x = 20;
var boton1y = 20;
var boton1tam = 30;

var boton2x = 20;
var boton2y = 70;
var boton2tam = 30;

var boton3x = 20;
var boton3y = 120;
var boton3tam = 30;

var boton4x = 20;
var boton4y = 170;
var boton4tam = 30;

var boton5x = 20;
var boton5y = 220;
var boton5tam = 30;

var boton6x = 20;
var boton6y = 270;
var boton6tam = 30;

var boton7x = 20;
var boton7y = 320;
var boton7tam = 30;

var boton8x = 20;
var boton8y = 370;
var boton8tam = 30;

var boton9x = 20;
var boton9y = 420;
var boton9tam = 30;

var boton10x = 20;
var boton10y = 470;
var boton10tam = 30;


//variables botones de pinceles

var boton11x = 70;
var boton11y = 20;
var boton11tam = 30;

var boton12x = 120;
var boton12y = 20;
var boton12tam = 30;

var boton13x = 170;
var boton13y = 20;
var boton13tam = 30;

var boton14x = 220;
var boton14y = 20;
var boton14tam = 30;

var boton15x = 270;
var boton15y = 20;
var boton15tam = 30;

var boton16x = 320;
var boton16y = 20;
var boton16tam = 30;

var boton17x = 370;
var boton17y = 20;
var boton17tam = 30;

var boton18x = 420;
var boton18y = 20;
var boton18tam = 30;

var boton19x = 470;
var boton19y = 20;
var boton19tam = 30;

var boton20x = 520;
var boton20y = 20;
var boton20tam = 30;

var boton20x = 520;
var boton20y = 20;
var boton20tam = 30;

//Borrador
var boton21x = 530;
var boton21y = 530;
var boton21tam = 60;


var colorSelect = 0;
var herramienta = 0;
var botonTam = 1;

function setup() {
  createCanvas(600, 600);
  background(255, 255, 255);
}

function draw() {



  //botones de color

  fill(206, 104, 0);
  rect(boton1x, boton1y, boton1tam, boton1tam);

  fill(165, 111, 9);
  rect(boton2x, boton2y, boton2tam, boton2tam);

  fill(13, 145, 97);
  rect(boton3x, boton3y, boton3tam, boton3tam);

  fill(0, 145, 41);
  rect(boton4x, boton4y, boton4tam, boton4tam);

  fill(112, 139, 39);
  rect(boton5x, boton5y, boton5tam, boton5tam);

  fill(178, 178, 6);
  rect(boton6x, boton6y, boton6tam, boton6tam);

  fill(255, 208, 0);
  rect(boton7x, boton7y, boton7tam, boton7tam);

  fill(213, 0, 61);
  rect(boton8x, boton8y, boton8tam, boton8tam);

  fill(158, 23, 87);
  rect(boton9x, boton9y, boton9tam, boton9tam);

  fill(247, 8, 120);
  rect(boton10x, boton10y, boton10tam, boton10tam);

  //botones de pinceles

  //boton de hexagono
  fill(255, 255, 255);
  rect(boton11x, boton11y, boton11tam, boton11tam);
  fill(0, 0, 0);
  beginShape();
  vertex(72, 35);
  vertex(79, 23);
  vertex(93, 23);
  vertex(99, 35);
  vertex(92, 47);
  vertex(79, 47);
  endShape(CLOSE);

  //boton de triangulos
  fill(255, 255, 255);
  rect(boton12x, boton12y, boton12tam, boton12tam);
  fill(0, 0, 0);
  beginShape();
  vertex(121, 38);
  vertex(149, 38);
  vertex(144, 45);
  vertex(131, 25);
  vertex(139, 25);
  vertex(125, 45);
  endShape(CLOSE);

  //boton de rectangulo con picos
  fill(255, 255, 255);
  rect(boton13x, boton13y, boton13tam, boton13tam);
  fill(0, 0, 0);
  beginShape();
  vertex(172, 28);
  vertex(198, 28);
  vertex(189, 32);
  vertex(198, 32);
  vertex(189, 35);
  vertex(198, 36);
  vertex(189, 37);
  vertex(198, 39);
  vertex(172, 39);
  vertex(182, 37);
  vertex(172, 36);
  vertex(182, 35);
  vertex(172, 32);
  vertex(182, 32);
  endShape(CLOSE);

  //boton de flor
  fill(255, 255, 255);
  rect(boton14x, boton14y, boton14tam, boton14tam);
  fill(0, 0, 0);
  ellipse(236, 34, 7, 7);
  beginShape();
  vertex(231, 32);
  vertex(224, 28);
  vertex(223, 26);
  vertex(226, 26);
  vertex(225, 24);
  vertex(228, 24);
  vertex(228, 22);
  vertex(230, 22);
  vertex(234, 29);
  endShape(CLOSE);
  beginShape();
  vertex(237, 29);
  vertex(241, 22);
  vertex(243, 21);
  vertex(243, 24);
  vertex(246, 23);
  vertex(245, 26);
  vertex(248, 25);
  vertex(247, 27);
  vertex(241, 31);
  endShape(CLOSE);
  beginShape();
  vertex(240, 35);
  vertex(247, 39);
  vertex(248, 41);
  vertex(245, 41);
  vertex(246, 44);
  vertex(243, 43);
  vertex(244, 46);
  vertex(241, 45);
  vertex(237, 38);
  endShape(CLOSE);
  beginShape();
  vertex(231, 35);
  vertex(224, 39);
  vertex(224, 42);
  vertex(226, 41);
  vertex(226, 44);
  vertex(228, 43);
  vertex(228, 46);
  vertex(230, 45);
  vertex(234, 38);
  endShape(CLOSE);

  //Boton de estrella
  fill(255, 255, 255);
  rect(boton15x, boton15y, boton15tam, boton15tam);
  fill(0, 0, 0);
  beginShape();
  vertex(271, 29);
  vertex(282, 29);
  vertex(285, 20);
  vertex(288, 29);
  vertex(299, 29);
  vertex(290, 34);
  vertex(293, 45);
  vertex(285, 38);
  vertex(275, 45);
  vertex(279, 34);
  endShape(CLOSE);

  //boton Y
  fill(255, 255, 255);
  rect(boton16x, boton16y, boton16tam, boton16tam);
  fill(0, 0, 0);
  beginShape();
  vertex(323, 23);
  vertex(324, 22);
  vertex(335, 32);
  vertex(346, 22);
  vertex(349, 23);
  vertex(336, 34);
  vertex(336, 46);
  vertex(334, 46);
  vertex(334, 34);
  endShape(CLOSE);

  //boton elipse
  fill(255,255,255);
  rect(boton17x, boton17y, boton17tam, boton17tam);
  fill(0,0,0)
  ellipse(385,22,8,2);
  ellipse(385,22,8,2);
  ellipse(396,28,10,3);
  ellipse(397,39,9,2);
  ellipse(386,45,8,3);
  ellipse(375,40,9,2);
  ellipse(375,28,10,3);
  
  //boton estrella de 9 puntas
  fill(255,255,255);
  rect(boton18x, boton18y, boton18tam, boton18tam);
  fill(0,0,0)
  beginShape();
  vertex(422,32);
  vertex(428,30);
  vertex(427,24);
  vertex(433,26);
  vertex(438,20);
  vertex(438,26);
  vertex(445,24);
  vertex(443,30);
  vertex(450,33);
  vertex(444,36);
  vertex(448,42);
  vertex(441,41);
  vertex(438,48);
  vertex(435,43);
  vertex(429,47);
  vertex(430,41);
  vertex(423,40);
  vertex(427,35);
  endShape(CLOSE);
// boton letra trestriangulos
  fill(255,255,255);
  rect(boton19x, boton19y, boton19tam, boton19tam);
  fill(1,1,1);
  beginShape();
  vertex(492,23);
  vertex(497,35);
  vertex(485,35);
  vertex(484,47);
  vertex(473,44);
  vertex(482,34);
  vertex(472,30);
  vertex(486,31);
  endShape(CLOSE);
// boton medio circulo
  fill(255,255,255);
  rect(boton20x, boton20y, boton20tam, boton20tam);
  fill(1,1,1);
  arc(536, 34, 26, 26, 0, PI+QUARTER_PI, PIE);
  
  fill(255, 255, 255);
  rect(boton21x, boton21y, boton21tam, boton21tam);


  //condiciones de color
  if (mouseIsPressed) {

    if (mouseX > boton1x && mouseX < boton1x + boton1tam &&
      mouseY > boton1y && mouseY < boton1y + boton1tam) {
      colorSelect = 1;

    }
    if (mouseX > boton2x && mouseX < boton2x + boton2tam &&
      mouseY > boton2y && mouseY < boton2y + boton2tam) {
      colorSelect = 2;
    }
    if (mouseX > boton3x && mouseX < boton3x + boton3tam &&
      mouseY > boton3y && mouseY < boton3y + boton3tam) {
      colorSelect = 3;
    }
    if (mouseX > boton4x && mouseX < boton4x + boton4tam &&
      mouseY > boton4y && mouseY < boton4y + boton4tam) {
      colorSelect = 4;
    }
    if (mouseX > boton5x && mouseX < boton5x + boton5tam &&
      mouseY > boton5y && mouseY < boton5y + boton5tam) {
      colorSelect = 5;
    }
    if (mouseX > boton6x && mouseX < boton6x + boton6tam &&
      mouseY > boton6y && mouseY < boton6y + boton6tam) {
      colorSelect = 6;
    }
    if (mouseX > boton7x && mouseX < boton7x + boton7tam &&
      mouseY > boton7y && mouseY < boton7y + boton7tam) {
      colorSelect = 7;
    }
    if (mouseX > boton8x && mouseX < boton8x + boton8tam &&
      mouseY > boton8y && mouseY < boton8y + boton8tam) {
      colorSelect = 8;
    }
    if (mouseX > boton9x && mouseX < boton9x + boton9tam &&
      mouseY > boton9y && mouseY < boton9y + boton9tam) {
      colorSelect = 9;
    }
    if (mouseX > boton10x && mouseX < boton10x + boton10tam &&
      mouseY > boton10y && mouseY < boton10y + boton10tam) {
      colorSelect = 10;
    }

    //borrador 

    if (mouseX > boton21x && mouseX < boton21x + boton21tam &&
      mouseY > boton21y && mouseY < boton21y + boton21tam) {
      background(255, 255, 255);
    }

    //condiciones de pinceles

    if (mouseX > boton11x && mouseX < boton11x + boton11tam &&
      mouseY > boton11y && mouseY < boton11y + boton11tam) {
      herramienta = 1;
    }

    if (mouseX > boton12x && mouseX < boton12x + boton12tam &&
      mouseY > boton12y && mouseY < boton12y + boton12tam) {
      herramienta = 2;
    }

    if (mouseX > boton13x && mouseX < boton13x + boton13tam &&
      mouseY > boton13y && mouseY < boton13y + boton13tam) {
      herramienta = 3;
    }

    if (mouseX > boton14x && mouseX < boton14x + boton14tam &&
      mouseY > boton14y && mouseY < boton14y + boton14tam) {
      herramienta = 4;
    }

    if (mouseX > boton15x && mouseX < boton15x + boton15tam &&
      mouseY > boton15y && mouseY < boton15y + boton15tam) {
      herramienta = 5;
    }

    if (mouseX > boton16x && mouseX < boton16x + boton16tam &&
      mouseY > boton16y && mouseY < boton16y + boton16tam) {
      herramienta = 6;
    }

    if (mouseX > boton17x && mouseX < boton17x + boton17tam &&
      mouseY > boton17y && mouseY < boton17y + boton17tam) {
      herramienta = 7;
    }
    if (mouseX > boton18x && mouseX < boton18x + boton18tam &&
      mouseY > boton18y && mouseY < boton18y + boton18tam) {
      herramienta = 8;
    }
      if (mouseX > boton19x && mouseX < boton19x + boton19tam &&
      mouseY > boton19y && mouseY < boton19y + boton19tam) {
      herramienta = 9;
    }
       if (mouseX > boton20x && mouseX < boton20x + boton20tam &&
      mouseY > boton20y && mouseY < boton10y + boton20tam) {
      herramienta = 10;
    }

    //condiciones de color



    if (colorSelect == 0) {
      fill(0, 0, 0);
    }
    if (colorSelect == 1) {
      fill(206, 104, 0);
    }
    if (colorSelect == 2) {
      fill(165, 111, 9);
    }
    if (colorSelect == 3) {
      fill(13, 145, 97);
    }
    if (colorSelect == 4) {
      fill(0, 145, 41);
    }
    if (colorSelect == 5) {
      fill(112, 139, 39);
    }
    if (colorSelect == 6) {
      fill(178, 178, 6);
    }
    if (colorSelect == 7) {
      fill(255, 208, 0);
    }
    if (colorSelect == 8) {
      fill(213, 0, 61);
    }
    if (colorSelect == 9) {
      fill(158, 23, 87);
    }
    if (colorSelect == 10) {
      fill(247, 8, 120);
    }



    //condiciones de pinceles
    if (herramienta == 0) {
      rect(mouseX - 10, mouseY - 10, botonTam, botonTam);
    }

    if (herramienta == 1) {
      beginShape();
      vertex(mouseX - 14, mouseY);
      vertex(mouseX - 7, mouseY - 13);
      vertex(mouseX + 7, mouseY - 12);
      vertex(mouseX + 13, mouseY);
      vertex(mouseX + 6, mouseY + 12);
      vertex(mouseX - 8, mouseY + 11);
      endShape(CLOSE);
    }

    if (herramienta == 2) {
      beginShape();
      vertex(mouseX - 13, mouseY + 12);
      vertex(mouseX + 6, mouseY - 15);
      vertex(mouseX - 6, mouseY - 15);
      vertex(mouseX + 12, mouseY + 12);
      vertex(mouseX + 19, mouseY + 3);
      vertex(mouseX - 20, mouseY + 3);
      endShape(CLOSE);
    }

    if (herramienta == 3) {
      beginShape();
      vertex(mouseX + 13, mouseY - 6);
      vertex(mouseX + 3, mouseY - 3);
      vertex(mouseX + 13, mouseY - 3);
      vertex(mouseX + 3, mouseY);
      vertex(mouseX + 13, mouseY + 1);
      vertex(mouseX + 3, mouseY + 2);
      vertex(mouseX + 13, mouseY + 4);
      vertex(mouseX - 12, mouseY + 4);
      vertex(mouseX - 4, mouseY + 2);
      vertex(mouseX - 12, mouseY + 1);
      vertex(mouseX - 4, mouseY);
      vertex(mouseX - 12, mouseY - 2);
      vertex(mouseX - 4, mouseY - 3);
      vertex(mouseX - 12, mouseY - 6);
      endShape(CLOSE);
    }

    if (herramienta == 4) {
      ellipse(mouseX, mouseY, 7, 7);
      beginShape();
      vertex(mouseX - 5, mouseY - 2);
      vertex(mouseX - 12, mouseY - 6);
      vertex(mouseX - 13, mouseY - 9);
      vertex(mouseX - 10, mouseY - 8);
      vertex(mouseX - 11, mouseY - 11);
      vertex(mouseX - 8, mouseY - 10);
      vertex(mouseX - 8, mouseY - 13);
      vertex(mouseX - 6, mouseY - 12);
      vertex(mouseX - 2, mouseY - 5);
      endShape(CLOSE);

      beginShape();
      vertex(mouseX + 2, mouseY - 4);
      vertex(mouseX + 4, mouseY - 10);
      vertex(mouseX + 6, mouseY - 12);
      vertex(mouseX + 6, mouseY - 8);
      vertex(mouseX + 8, mouseY - 10);
      vertex(mouseX + 8, mouseY - 8);
      vertex(mouseX + 10, mouseY - 8);
      vertex(mouseX + 10, mouseY - 6);
      vertex(mouseX + 4, mouseY - 2);
      endShape(CLOSE);


      beginShape();
      vertex(mouseX + 1, mouseY + 5);
      vertex(mouseX + 4, mouseY + 2);
      vertex(mouseX + 11, mouseY + 5);
      vertex(mouseX + 12, mouseY + 8);
      vertex(mouseX + 9, mouseY + 7);
      vertex(mouseX + 10, mouseY + 10);
      vertex(mouseX + 7, mouseY + 10);
      vertex(mouseX + 7, mouseY + 12);
      vertex(mouseX + 5, mouseY + 11);
      endShape(CLOSE);

      beginShape();
      vertex(mouseX - 2, mouseY + 4);
      vertex(mouseX - 6, mouseY + 11);
      vertex(mouseX - 8, mouseY + 12);
      vertex(mouseX - 8, mouseY + 9);
      vertex(mouseX - 11, mouseY + 10);
      vertex(mouseX - 10, mouseY + 7);
      vertex(mouseX - 13, mouseY + 8);
      vertex(mouseX - 12, mouseY + 6);
      vertex(mouseX - 6, mouseY + 2);
      endShape(CLOSE);

    }
    if (herramienta == 5) {
      beginShape();
      vertex(mouseX - 4, mouseY - 5);
      vertex(mouseX, mouseY - 14);
      vertex(mouseX + 2, mouseY - 5);
      vertex(mouseX + 14, mouseY - 5);
      vertex(mouseX + 5, mouseY);
      vertex(mouseX + 8, mouseY + 11);
      vertex(mouseX, mouseY + 4);
      vertex(mouseX - 11, mouseY + 11);
      vertex(mouseX - 6, mouseY);
      vertex(mouseX - 15, mouseY - 5);
      endShape(CLOSE);
    }
    if (herramienta == 6) {
      beginShape();
      vertex(mouseX - 13, mouseY - 11);
      vertex(mouseX - 12, mouseY - 12);
      vertex(mouseX - 1, mouseY - 1);
      vertex(mouseX + 12, mouseY - 11);
      vertex(mouseX + 14, mouseY - 10);
      vertex(mouseX + 1, mouseY + 1);
      vertex(mouseX, mouseY + 13);
      vertex(mouseX - 1, mouseY + 13);
      vertex(mouseX - 2, mouseY);
      endShape(CLOSE);
    }
   if (herramienta == 7) {
     ellipse(mouseX,mouseY-12,8,2);
     ellipse(mouseX+10,mouseY-7,10,3);
     ellipse(mouseX+11,mouseY+5,9,2);
     ellipse(mouseX,mouseY+11,8,3);
     ellipse(mouseX-11,mouseY+6,9,2);
     ellipse(mouseX-11,mouseY-6,10,3);
   }
   if (herramienta == 8) {
     beginShape();
     vertex(mouseX-15,mouseY-3);
     vertex(mouseX-8,mouseY-5);
     vertex(mouseX-10,mouseY-10);
     vertex(mouseX-4,mouseY-8);
     vertex(mouseX,mouseY-10);
     vertex(mouseX+3,mouseY-8);
     vertex(mouseX+9,mouseY-11);
     vertex(mouseX+7,mouseY-4);
     vertex(mouseX+14,mouseY-1);
     vertex(mouseX+8,mouseY+2);
     vertex(mouseX+11,mouseY+8);
     vertex(mouseX+4,mouseY+7);
     vertex(mouseX+2,mouseY+14);
     vertex(mouseX-1,mouseY+8);
     vertex(mouseX-7,mouseY+13);
     vertex(mouseX-7,mouseY+6);
     vertex(mouseX-14,mouseY+6);
     vertex(mouseX-9,mouseY+1);
     endShape(CLOSE);
   } 
     
  if (herramienta == 9) {
    strokeWeight(1);
    line(mouseX, mouseY,pmouseX,pmouseY);
     }
  }
if (herramienta == 10) {
     arc(mouseX,mouseY, 22, 22, 0, PI+QUARTER_PI, PIE);
  }
  }
}
