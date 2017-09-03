function setup() { 
  createCanvas(400, 400);
  background(240,203,173);
  
//fila triangulos morados arriba
for( var posX=20;posX<=320;posX=posX+60){
 noStroke();
 fill(147,151,185);
 triangle(posX,0,posX+30,15,posX+60,0);
}
//fondo fila triangulos amarillos  
  fill(215,181,160);
  rect(0,67,400,28);
  //fila de triangulos amarillos
for( var posX1=20;posX1<=170;posX1=posX1+30){
  noStroke();
  fill(255,168,0);
  triangle(posX1,68,posX1,95,posX1+30,95);
}
//fila de triangulos amarillos invertidos
for(var posX2=230;posX2<=380;posX2=posX2+30){
  fill(255,168,0)
  triangle(posX2-30,95,posX2,68,posX2,95);
}  
// rectangulo verde claro, fondo de cuadrados amarillos
  noStroke();
  fill(181,172,153);
  rect(0,176,400,14); 
//fila de triangulos verde debajo amarillos
for(var posX3=50;posX3<=200;posX3=posX3+30){
  fill(226,186,41);
  triangle(posX3-30,95,posX3,95,posX3,122);
}
 //fila de triangulos verdes debajo amarillos invertidos
 for(var posX4=200;posX4<=350;posX4=posX4+30){
    fill(226,186,41);
    triangle(posX4,95,posX4,122,posX4+30,95);
}
//rectangulos verdes a  los lados
  rect(0,95,11,27);
  rect(390,95,11,27);
// mitad fila de rectangulos rosados
  for(var posX5=20;posX5<=170;posX5=posX5+30){
    fill(204,123,146);
    rect(posX5,167,20,10);
} 
//mitad derecha fila de rectangulos rosados
   for(var posX21=210;posX21<=365;posX21=posX21+30){
    fill(204,123,146);
    rect(posX21,167,20,10);
}
//rectangulo fondo verde entre rectangulos amarillos
  noStroke();
  fill(99,134,105);
  rect(0,188,400,12);
//figuras naranjas a los lados 
  fill(255,30,0);
  beginShape();
  vertex(0,177);
  vertex(7,177);
  vertex(21,188);
  vertex(21,200);
  vertex(7,200);
  vertex(0,191);
  endShape(CLOSE);
  beginShape();
  vertex(400,175);
  vertex(400,200);
  vertex(383,200);
  vertex(383,188);
  endShape(CLOSE);
//mitad izq fila rectangulos verticales amarillos
  for(var posX22=40;posX22<=190;posX22=posX22+30){
  fill(255,168,0);
  rect(posX22,177,10,23);
}
//mitad derecha fila rectangulos verticales amarillos
  for(var posX6=200;posX6<=360;posX6=posX6+30){
  fill(255,168,0);
  rect(posX6,177,10,23);
}
//rectangulo fondo verde oscuro
  fill(0,118,87);
  rect(0,122,400,21);
//cuadros azules a los lados
  fill(107,127,171);
  rect(3,135,8,8);
  rect(391,135,8,8);
//mitad derecha fila de triangulos morados bajo verde oscuro
   for(var posX9=20;posX9<=170;posX9=posX9+30){
  fill(107,127,171);
  triangle(posX9,123,posX9,143,posX9+30,143);
}  
//mitad izq fila de triangulos morados bajo verde oscuro
for(var posX10=230;posX10<=380;posX10=posX10+30){
  fill(107,127,171);
  triangle(posX10-30,143,posX10,123,posX10,143);
} 
//rectangulo fondo piel abajo  
noStroke();
fill(239,214,204);
rect(0,380,400,20);
//fila triangulos morado oscuro abajo sobre fondo piel
for(var posX11=30;posX11<=330;posX11=posX11+60){
  fill(26,12,75);
  triangle(posX11,396,posX11+30,380,posX11+52,396);
} 
//rectangulo fondo naranja
  noStroke();
  fill(211,115,0);
  rect(0,370,400,10);
//triangulos vinotintos sobre fondo naranja
  for(var posX12=0;posX12<=400;posX12=posX12+60){
  fill(105,0,0);
  triangle(posX12,380,posX12+26,370,posX12+53,380);
  } 
  
//fila rectangulos morados
  for(var posX13=32;posX13<=370;posX13=posX13+30){
  fill(61,9,94);
  rect(posX13,200,9,15);
  }
//figuras moradas de los lados
  beginShape();
  vertex(0,200);
  vertex(7,200);
  vertex(25,215);
  vertex(0,215);
  endShape(CLOSE);
  triangle(400,200,400,215,384,215);
//fondo rectangulos marrones
  fill(232,180,115);
  rect(0,225,400,10);
//lineas fondo rectangulos marrones
  for(var posY=225;posY<=235;posY=posY+2){
    stroke(106,45,21,120);
    strokeWeight(1);
    line(0,posY,400,posY);
  }
//mitad izquierda rectangulos marrones
 for(var posX14=52;posX14<=175;posX14=posX14+30){
  noStroke();
  fill(106,45,21);
  rect(posX14,215,9,21);
  }
//mitad derecha rectangulos marrones
 for(var posX15=220;posX15<=340;posX15=posX15+30){
  fill(106,45,21);
  rect(posX15,215,9,21);
  }
//rectangulos marrones de los lados
  fill(106,45,21);
  rect(0,215,32,20);
  rect(370,215,30,20);
//mitad izquierda fila rectangulos horizontales rosados
 for(var posX16=52;posX16<=175;posX16=posX16+30){
  fill(232,108,127,180);
  rect(posX16,215,18,10);
  } 
//mitad derecha fila rectangulos horizontales rosados
 for(var posX17=212;posX17<=340;posX17=posX17+30){
  fill(232,108,127,180);
  rect(posX17,215,18,10);
  }  
//rectangulos horizontales rosados con opacidad
  rect(0,215,41,10);
  rect(362,215,40,10);
//rectangulo fondo circulos rojos
 fill(224,211,209);
  rect(0,24,400,43);
  //fila circulos izquierda rojos
  for( var cenX=70;cenX<=200;cenX=cenX+60){
    fill(176,0,24);
    ellipse(cenX,57,12,12);
  }
//fila circulos derecha rojos
  for( var cenX2=211;cenX2<=350;cenX2=cenX2+60){
    fill(176,0,24);
    ellipse(cenX2,57,12,12);
  }
//triangulos rojos
  for( var posX18=-28;posX18<=400;posX18=posX18+60){
    fill(221,0,0);
    triangle(posX18,21,posX18+50,0,posX18+96,21);
  }  
//rectangulo morados a los lados arrriba
  fill(147,151,185);
  rect(0,0,21,28);
  rect(379,0,21,28);
//triangulos amarillo dentro de triangulo rojo
  for( var posX19=-6;posX19<=400;posX19=posX19+60){
    fill(228,159,4);
    triangle(posX19,21,posX19+27,13,posX19+54,21);
  }
//rectangulos horizontales amarillos a los lados
  rect(0,13,21,8);
  rect(379,13,21,8)
//triangulos bajo triangulos amarillos
  for( var posX20=-6;posX20<=400;posX20=posX20+60){
    fill(233,183,125);
    triangle(posX20,21,posX20+27,40,posX20+54,21);
  }
//rectangulo fondo crema bajo triangulos morados
  fill(234,228,186);
  rect(20,143,360,12);
//mitad izq fila de rectangulos sobre fondo crema
  for(var posX23=40;posX23<=165;posX23=posX23+60){
    fill(216,142,78);
    rect(posX23,143,11,12);
  }
//mitad derecha fila de rectangulos sobre fondo crema
  for(var posX24=230;posX24<=400;posX24=posX24+60){
    fill(216,142,78);
    rect(posX24,143,11,12);
  }
//fila izq de rectangulos sobre lineas marrones
  for(var posX25=62;posX25<=200;posX25=posX25+30){
    fill(227,175,110);
    rect(posX25,225,10,11);
  }
//fila derecha de rectangulos sobre lineas marrones
  for(var posX26=210;posX26<=340;posX26=posX26+30){
    fill(227,175,110);
    rect(posX26,225,10,11);
  }
//fondo rectangulo amarillo abajo del rectangulo crema
  fill(240,165,32);
  rect(20,154,362,13);
//mitad izq fila de rectangulos sobre fondo amarillo
  for(var posX27=40;posX27<=165;posX27=posX27+60){
    fill(234,228,186);
    rect(posX27,154,10,13);
  }
//mitad derecha fila de rectangulos sobre fondo amarillo
  for(var posX28=230;posX28<=400;posX28=posX28+60){
    fill(234,228,186);
    rect(posX28,154,10,13);
  }
//rectangulos negros laterales
 fill(0,0,0);
 rect(11,21,10,145);
 rect(380,21,10,145);   
//rectangulo azul abajo
  fill(105,130,151);
  rect(0,360,400,10);
//rectangulo fondo morado arcos
  fill(48,24,69);
  rect(28,332,350,20);
//triangulos morados a los lados
  triangle(0,332,28,332,0,346);
  triangle(387,332,400,332,400,336);
//semicirculos sobre morado
  for(var cenX3=44;cenX3<=380;cenX3=cenX3+29){
    fill(240,203,173);
    ellipse(cenX3,336,28,31);
  }
//rectangulo fondo verde arcos
  fill(71,120,99);
  rect(28,314,350,18);  
//semicirculos sobre verde
  for(var cenX4=42;cenX4<=380;cenX4=cenX4+27){
    fill(240,203,173);
    ellipse(cenX4,315,26,32);
  }
//triangulos verdes de los lados
  fill(71,120,99);
  triangle(0,324,28,314,28,332);
  beginShape();
  vertex(377,313);
  vertex(400,323);
  vertex(400,330);
  vertex(377,333);
  endShape(CLOSE);
//rectangulo fondo amarillo arriba arcos en verde
  fill(194,155,28);
  rect(0,295,400,19); 
//mitad izq fila rectangulos marrones sobre amarillo
  for( var posX29=43;posX29<=170;posX29=posX29+60){
    fill(150,107,62);
    rect(posX29,305,11,9);
  }
//mitad izq fila rectangulos marrones sobre amarillo
  for( var posX30=232;posX30<=360;posX30=posX30+60){
    fill(150,107,62);
    rect(posX30,305,11,9);
  }  
//mitad izq fila rectangulos arriba marrones
  for( var posX31=43;posX31<=170;posX31=posX31+60){
    fill(186,149,83);
    rect(posX31,296,11,9);
  }
//mitad izq fila rectangulos arriba marrones
  for( var posX32=232;posX32<=360;posX32=posX32+60){
    fill(186,149,83);
    rect(posX32,296,11,9);
  }  
//fondo rectangulo rosado
  fill(196,106,152);
  rect(0,282,400,13); 
 //mitad izq fila rectangulos amarillos sobre rosado
  for( var posX33=43;posX33<=170;posX33=posX33+60){
    fill(216,143,14);
    rect(posX33,282,11,13);
  }
//mitad izq fila rectangulos amarillos sobre rosado
  for( var posX34=232;posX34<=360;posX34=posX34+60){
    fill(216,143,14);
    rect(posX34,282,11,13);
  }   
 //fondo rectangulo color crema sobre rosado
  fill(233,216,201);
  rect(0,273,400,10); 
//mitad izq fila rectangulos naranjas sobre crema
  for( var posX35=43;posX35<=170;posX35=posX35+60){
    fill(206,86,9);
    rect(posX35,273,11,10);
  }
//mitad izq fila rectangulos naranjas sobre crema
  for( var posX36=232;posX36<=360;posX36=posX36+60){
    fill(206,86,9);
    rect(posX36,273,11,10);
  }   
//rectangulo fondo gris
 fill(224,211,209);
  rect(0,246,400,27);
  //mitad izq fila rectangulos naranjas sobre crema
  for( var posX37=43;posX37<=170;posX37=posX37+60){
    fill(205,116,63);
    rect(posX37,248,11,25);
  }
//mitad izq fila rectangulos naranjas sobre crema
  for( var posX38=232;posX38<=360;posX38=posX38+60){
    fill(205,116,63);
    rect(posX38,248,11,25);
  }   
//triangulos negros a los lados
  fill(0,0,0)
  triangle(0,305,27,314,0,314);
  triangle(400,310,400,314,387,314);
//triangulos rojos a los lados
  fill(123,0,0);
  triangle(0,260,23,248,23,260);
  triangle(0,263,0,282,23,273);
  triangle(384,251,384,265,408,265);
  triangle(400,270,386,275,400,281);
/// lineas rojas al lado de rectangulos negro (izquierda)
   for( var posY2=52;posY2<=59;posY2=posY2+3){
     strokeWeight(1);
     stroke(193,36,38);
     line(0,posY2,10,posY2);
}
/// lineas rojas al lado de rectangulos negro (derecha)
   for( var posY3=52;posY3<=59;posY3=posY3+3){
     strokeWeight(1);
     stroke(193,36,38);
     line(390,posY3,400,posY3);
}
/// cuadrados rojos debajo de rectangulos negro
  
  for( var posX41=0;posX41<=400;posX41=posX41+390){
    noStroke();
    fill(193,36,38);
    rect(posX41,143,11,11);
}
/// rectangulo piel en el extremo de linea morada
  for( var posX42=0;posX42<=400;posX42=posX42+380){
    noStroke();
    fill(204,122,91);
    rect(posX42,166,22,11);
}
/// cuadrados crema al lado de cuadrados azules (izquierda)
  for( var posX43=41;posX43<=200;posX43=posX43+30){
    noStroke();
    fill(183,145,109);
    rect(posX43,200,10,15);
}
/// cuadrados crema al lado de cuadrados azules (derecha)
  for( var posX44=201;posX44<=363;posX44=posX44+30){
    noStroke();
    fill(183,145,109);
    rect(posX44,200,11,15);
}
/// cuadrados piel al lado de cuadrados rosados (izquierda)
  for( var posX45=40;posX45<=200;posX45=posX45+30){
    noStroke();
    fill(216,167,129);
    rect(posX45,215,12,10);
}
/// cuadrados piel al lado de cuadrados rosados (derecha)
  for( var posX46=200;posX46<=363;posX46=posX46+30){
    noStroke();
    fill(216,167,129);
    rect(posX46,215,12,10);
}
/// triangulo amarillo sobre linea morada (izquierda)
  noStroke();
  fill(204,100,32);
  triangle(0,283,25,294,0,294);
/// triqangulo amarillo sobre linea morada (derecha)
  noStroke();
  fill(204,100,32);
  triangle(400,283,400,294,387,294);
/// triangulos verde sobre linea amarilla (izquierda)
  noStroke();
  fill(58,98,59);
  triangle(0,294,0,303,25,294);
/// triangulos verdes sobre linea amarilla (derecha)
  noStroke();
  fill(58,98,59);
  triangle(400,294,400,302,387,294);
  
  







}