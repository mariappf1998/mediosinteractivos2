function setup() { 
  createCanvas(400, 400);
  
  background(230,217,219);
  
   //backgroun2 amarillo
  noStroke();
  beginShape();
  fill(240,242,204);
  vertex(230.2,0);
  vertex(400,0);
  vertex(400,400);
  vertex(343.7,400); 
endShape(CLOSE);
  
  //backgroun3 azul
  noStroke();
  beginShape();
  fill(185,193,201,120);
  vertex(0,188.1);
  vertex(239.5,400);
  vertex(0,400);
endShape(CLOSE);
  
 noStroke();
  beginShape();
  fill(255,255,255);
  vertex(400,20.6);
  vertex(400,49.9);
  vertex(395.4,52.9);
  vertex(382.7,31.8);
endShape(CLOSE); 
  
  stroke(0,0,0);
  strokeWeight(2);
  point(386.5,33.6);
  point(398.5,26.7);
  point(395.2,33.6);
  point(392.4,40.9);
  point(398.3,34.7);
  point(392.6,28.3);
  point(397.1,47.5);
  point(397.1,42.4);
  
  stroke(185,193,201,60);
  strokeWeight(5);
  line(136.3,311.7,237.2,400);
  
  stroke(185,193,201,50);
  line(140,311.7,241,400);
   
 noStroke();
  fill(236,203,206);
  beginShape();
  vertex(368,8.6);
  vertex(382.5,0);
  vertex(390.1,0);
  vertex(400,16.3);
  vertex(400,20.9);
  vertex(382,31.8);
  endShape(CLOSE); 
  
  fill(255,255,255);
  triangle(389.7,91.8,400,83.5,400,113.3);
  
  stroke(0,0,0);
  strokeWeight(3);
   line(380.9,0,344.7,24.8);
   line(344.7,24.8,400,112);
  
  
  strokeWeight(3);
  beginShape();
  fill(255,255,255)
  vertex(359.7,47.4);
  vertex(382.7,31.8);
  vertex(395.2,52.6);
  vertex(372.3,66); 
endShape(CLOSE);
  
  
  beginShape();
  vertex(345.2,25.5);
  vertex(369.2,9.4);
  vertex(382.7,31.8);
  vertex(359.2,47.4); 
endShape(CLOSE);
  
  strokeWeight(2);
  line(349.3,22.8,363.8,44.4);
  line(352.3,20.7,366.8,42.3);
  line(354.4,17.9,369.6,40.5);
  line(358.4,15.4,373.6,38);
  line(361.4,13.7,376.5,36.1);
  line(379.1,34,364.2,11.8);
  
  strokeWeight(3);
  
  line(382.7,31.8,400,20.5);
  line(390.6,0,400,16.6);
  
  
  noStroke();
  fill(0,0,0);
  beginShape();
  vertex(182.5,0);
  vertex(194.9,0);
  vertex(373.9,104.8);
  vertex(368.9,104.8);
  endShape(CLOSE);
  
  //linea verde derecha
  fill(82,107,79);
  beginShape();
  vertex(170.7,0);
  vertex(182.5,0);
  vertex(382.7,112);
  vertex(381.6,114.1);
  endShape(CLOSE);

  
  //linea negra derecha
  fill(0,0,0);
  beginShape();
  vertex(311.4,78.4);
  vertex(318.7,84.1);
  vertex(350.6,49.5);
  vertex(341.9,38.7);
  endShape(CLOSE);
  
  stroke(0,0,0);
  strokeWeight(2);
  fill(0,0,0);
  beginShape();
  vertex(372.3,68);
  vertex(395.2,52.6);
  vertex(400,60.3);
  vertex(400,84.1);
  vertex(387.3,92.3);
  endShape(CLOSE);
  
  stroke(223,107,103);
  strokeWeight(5);
  ellipse(120.2,124,98.7,98.7);
  
  stroke(0,0,0);
  fill(230,217,219);
  strokeWeight(2);
  ellipse(120.2,124,93.5,93.5);
  

  stroke(179,25,56);
  strokeWeight(4);
  ellipse(192.8,67.8,92.3,88.7);
  
  stroke(0,0,0);
  strokeWeight(3);
  ellipse(193.4,68.1,85.8,81.8);
  
  //ultimo semicirculo
   stroke(179,25,56,200);
  strokeWeight(5);
  noFill();
  ellipse(260.3,14.1,92.4,88.8);
  
  //figura 1 cubre ultimo semicirculo
  noStroke();
  fill(240,242,204);
  beginShape();
  vertex(234.4,53.5);
  vertex(242,46.2);
  vertex(246.4,63.3);
  vertex(238.2,67.8);
  endShape(CLOSE);
 
  //figura 3 cubre ultimo semicirculo
  noStroke();
  fill(240,242,204);
  beginShape();
  vertex(254.5,33.6);
  vertex(299.4,0);
  vertex(314.2,0);
  vertex(299.4,59.1);
  endShape(CLOSE);
  
  
  noStroke();
  fill(240,242,204);
  beginShape();
  vertex(244.1,47.5);
  vertex(281.4,47.5);
  vertex(293.6,54.7);
  vertex(250,69.6);
  endShape(CLOSE);
  
  //pieza faltante negra
   noStroke();
  fill(0,0,0);
  beginShape();
  vertex(262.4,44.8);
  vertex(270.8,44.3);
  vertex(292.3,57);
  vertex(286.5,59.3);
  endShape(CLOSE);
  
 //pieza faltante verde
  noStroke();
  fill(82,107,79);
  beginShape();
  vertex(257,46.7);
  vertex(265.4,46.4);
  vertex(287.1,58.5);
  vertex(280.7,60);
  endShape(CLOSE);
  
 
  stroke(0,0,0);
  strokeWeight(2);
  line(237.4,0,72.5,154.4);
  
  
  fill(230,217,219);
  noStroke();
  beginShape();
  vertex(81.4,159.2);
  vertex(228,32.5);
  vertex(267,98.9);
  vertex(110.8,189.4);
  endShape(CLOSE);
  
   stroke(0,0,0);
  strokeWeight(3);
  line(294.9,0,171.5,92.4);
  
  
  //semicirculo contorno amarillo derecha
  stroke(201,193,60);
  strokeWeight(4);
  ellipse(328.9,161.1,81.8,81.4);
  
  //semicirculo azul claro derecha
  stroke(0,0,0);
  strokeWeight(1);
  fill(210,211,229);
  ellipse(330.1,160.9,75,75);
  
  
  //contorno rojo semicirculo derecho
  noFill();
  stroke(198,85,71);
  strokeWeight(5);
  ellipse(330.3,161,123.1,123.1);

  
  //contorno negro semicirculo derecho
  stroke(0,0,0);
  strokeWeight(1);
  noFill();
  ellipse(330.1,160.9,116.5,116.5);

  //poligono verde 
  noStroke();
  fill(5,52,32);
  beginShape();
  vertex(254.5,87.7);
  vertex(274.7,73.4);
  vertex(390.8,253.5);
  vertex(300.1,253.3); 
endShape(CLOSE);
  
   //triangulo marron
  noStroke();
  fill(159,127,63);
  triangle(254.2,86.9,299.4,254.3,9.3,252.7);
  
 
  //semicirculo rojo abajo
  fill(239,230,231);
  stroke(182,28,29);
  strokeWeight(5);
  ellipse(195.4,400,125.8,117.1);
  
  //semicirculo izq
  stroke(0,0,0);
  strokeWeight(1);
  fill(239,230,231);
  ellipse(48,391.4,125.8,117.1);
  
   //semicirculo izq
  stroke(207,177,50);
  strokeWeight(3);
  fill(239,230,231);
  ellipse(47,393.4,125.8,117.1);
  
  
  //Semicirculo der
  stroke(0,0,0);
  strokeWeight(1);
  fill(239,230,231);
  ellipse(341.3,395.6,125.8,117.1);
  
  
  stroke(0,0,0);
  strokeWeight(1);
  line(0,40.2,82.5,0)
  
  noStroke();
  fill(82,107,79);
  beginShape();
  vertex(88,0);
  vertex(95.8,0);
  vertex(0,115.4);
  endShape(CLOSE);
  
  stroke(226,112,96);
  strokeWeight(3);
  line(0,78.1,146.4,0);
  
  stroke(0,0,0);
  strokeWeight(2);
  line(23,0,0,82);
  
  noStroke();
  fill(0,0,0);
  beginShape();
  vertex(80.8,0);
  vertex(88,0);
  vertex(0,114.1);
  vertex(0,106.3);
  endShape(CLOSE);
  
  stroke(0,0,0);
  strokeWeight(2);
  line(0,46.2,94.1,0);
  
  //circulo centro fondo negro
  noStroke();
  fill(0,0,0);
  ellipse(242.2,164.9,98.3,98.3);
  
  //Rectangulo amarillo1 circulo centro
  noStroke();
  fill(226,218,126);
  beginShape();
  vertex(191.8,157.4);
  vertex(201,158.1);
  vertex(201.7,175.9);
  vertex(192.4,175.4);
  endShape(CLOSE);
  
  //Rectangulo azul1 circulo centro
  noStroke();
  fill(52,53,154);
  beginShape();
  vertex(200,193.4);
  vertex(207.4,187.7);
  vertex(222.6,200.9);
  vertex(219.5,210.1);
  endShape(CLOSE);
  
  //rectangulo blanco1 circulo centro
  noStroke();
  fill(255,255,255);
  beginShape();
  vertex(224.3,202);
  vertex(227,203.2);
  vertex(224.6,211.4);
  vertex(221.4,210.1);
  endShape(CLOSE);
  
  //rectangulo blanco2 circulo centro
  noStroke();
  fill(255,255,255);
  beginShape();
  vertex(228.2,204.1);
  vertex(231.6,204.7);
  vertex(229.4,213.3);
  vertex(226.1,212.2);
  endShape(CLOSE);
  
  //rectangulo blanco3 circulo centro
  noStroke();
  fill(255,255,255);
  beginShape();
  vertex(232.6,205.2);
  vertex(235.6,205.2);
  vertex(235.6,214.1);
  vertex(231.6,213.3);
  endShape(CLOSE);
  
  //rectangulo blanco4 circulo centro
  noStroke();
  fill(255,255,255);
  beginShape();
  vertex(236.9,205.9);
  vertex(240.1,205.9);
  vertex(240.1,215);
  vertex(236.9,214.6);
  endShape(CLOSE);
  
  //Rectangulo azul2 circulo centro
  noStroke();
  fill(52,53,154);
  beginShape();
  vertex(241.5,205.2);
  vertex(241.5,215.7);
  vertex(269.2,208.1);
  vertex(264,198.9);
  endShape(CLOSE);
  
  //Rectangulo azul claro circulo centro
  noStroke();
  fill(114,118,184);
  beginShape();
  vertex(281,174.2);
  vertex(291.3,177.8);
  vertex(291.3,154.5);
  vertex(282.4,154.5);
  endShape(CLOSE);
  
  //Rectangulo amarillo1 circulo centro
  noStroke();
  fill(226,218,126);
  beginShape();
  vertex(276.5,142.8);
  vertex(284.9,137.8);
  vertex(288.5,145.9);
  vertex(279.3,149.1);
  endShape(CLOSE);
  
  //Rectangulo azul3 circulo centro
  noStroke();
  fill(52,53,154);
  beginShape();
  vertex(232.7,114.7);
  vertex(256.4,115.7);
  vertex(256.4,125.7);
  vertex(233.6,124.9);
  endShape(CLOSE);
  
  //rectangulo blanco5 circulo centro
  noStroke();
  fill(255,255,255);
  beginShape();
  vertex(228.1,115.7);
  vertex(230.4,115.7);
  vertex(232.3,125.7);
  vertex(230.4,125.7);
  endShape(CLOSE);
  
  //rectangulo blanco6 circulo centro
  noStroke();
  fill(255,255,255);
  beginShape();
  vertex(223.8,116.8);
  vertex(227,116.8);
  vertex(229,126.2);
  vertex(227,127);
  endShape(CLOSE);
  
  //Rectangulo azul4 circulo centro
  noStroke();
  fill(52,53,154);
  beginShape();
  vertex(212.4,123.5);
  vertex(223,118);
  vertex(225.8,127);
  vertex(218.2,132.2);
  endShape(CLOSE);
  
  //circulo centro con contorno
  stroke(0,0,0);
  stroke(4);
  noFill();
  ellipse(242.2,164.9,100,100);
  
  
   //circulo centro con contorno
  stroke(0,0,0);
  stroke(2);
  fill(230,218,218);
  ellipse(242.2,164.9,82.8,82.8);
  
  //triangulo rojo1
  noStroke();
  fill(189,16,7);
  beginShape();
  vertex(196.2,143.9);
  vertex(200.1,135.5);
  vertex(233.5,153.4);
  endShape(CLOSE);
  
  //triangulo rojo2
  noStroke();
  fill(189,16,7);
  beginShape();
  vertex(273,124.6);
  vertex(276.5,127.8);
  vertex(259.1,143.5);
  vertex(257.3,141.7);
  endShape(CLOSE);
  
  //rectangulo blanco con triangulo rojo2
  noStroke();
  fill(255,255,255);
  beginShape();
  vertex(273.5,123.2);
  vertex(284.8,108.1);
  vertex(290,112.6);
  vertex(277.2,126.3);
  endShape(CLOSE);
  
  //rectangulo rojo con triangulo rojo2
  noStroke();
  fill(226,7,4);
  beginShape();
  vertex(285.5,107.7);
  vertex(304.6,85);
  vertex(312.6,91.4);
  vertex(290.8,112.2);
  endShape(CLOSE);
  
  //triangulo rojo3
  noStroke();
  fill(189,16,7);
  beginShape();
  vertex(262.3,176.1);
  vertex(265.1,175.3);
  vertex(284.1,194.8);
  vertex(280.6,199.2);
  endShape(CLOSE);
  
  
  
  //poligono verde con triangulo rojo3
  noStroke();
  fill(187,193,97);
  beginShape();
  vertex(314.2,242.5);
  vertex(321.2,236.5);
  vertex(400,317.8);
  vertex(400,351.1);
  endShape(CLOSE);
  
  noStroke();
  fill(224,228,230);
  beginShape();
  vertex(139.8,108.9);
  vertex(199.1,136.6);
  vertex(195.3,143.5);
  vertex(133.5,128.2);
  endShape(CLOSE);
  
  //circulo centro con contorno
  stroke(0,0,0)
  stroke(4);
  noFill();
  ellipse(242.2,164.9,100,100);
  
  //circulo negro pequeño
  noStroke();
  fill(0,0,0);
  ellipse(248.9,162.4,14.8,14.8);
  
  stroke(0,0,0);
  strokeWeight(2);
  line(0,80.9,151.4,0);
  
  //linea amarilla que va con la negra
  stroke(232,217,89);
  strokeWeight(4);
  line(302.9,0,258,33.2);
  
  //linea amarilla2
  stroke(232,217,89,150);
  line(249.7,38.7,174,95.1);
 
  stroke(0,0,0);
  strokeWeight(3);
  line(229.5,0,263.3,118.7);
  
  //tres lineas negras en cono blanco
  strokeWeight(2);
  line(190.6,133.2,189.3,142);
  line(187.2,131.3,185.8,141.1);
  line(184.2,129.8,182.1,140.2);
  
  //cuadrado rojo en cono blanco
  noStroke();
  fill(189,16,7);
  beginShape();
  vertex(174.4,125.1);
  vertex(181.2,128.2);
  vertex(178.3,139.3);
  vertex(171.5,137.6);
  endShape(CLOSE); 
 
  //media circunferencia blanca
  noStroke();
  fill(255,255,255);
  ellipse(329.6,161.4,33.9,33.9);
  
  // media circuferencia negra
  noStroke();
  fill(0,0,0);
  beginShape();
  vertex(321.3,146.4);
  vertex(323.7,145.5);
  vertex(326.2,144.8);
  vertex(328.6,144.4);
  vertex(330.9,144.4);
  vertex(334.1,145);
  vertex(336.1,145.7);
  vertex(339,147.3);
  vertex(341.6,149.1);
  vertex(342.7,150.7);
  vertex(344.1,152.6);
  vertex(345.7,155.9);
  vertex(346.6,159.7);
  vertex(346.6,162.9);
  vertex(345.9,166.2);
  vertex(344.6,169.3);
  vertex(342.8,172.1);
  vertex(340.5,174.4);
  vertex(338,176.1);
  endShape(CLOSE);
  
  //contorno circulo blanco y negro
  stroke(0,0,0);
  strokeWeight(1);
  noFill();
  ellipse(329.6,161.4,33.9,33.9);
  
  //poligono gris abajo
  noStroke();
  fill(129,122,102);
  beginShape();
  vertex(126.6,400);
  vertex(208.1,337.2);
  vertex(224.2,339.8);
  vertex(141.6,400);
  endShape(CLOSE);
  
  //poligono negro en linea con gris
  noStroke();
  fill(0,0,0);
  beginShape();
  vertex(208.1,337.2);
  vertex(263.7,295.7);
  vertex(265.7,301.7);
  vertex(273.3,303.5);
  vertex(224.2,339.8);
  endShape(CLOSE);
  
  //poligono rojo en linea con gris
  noStroke();
  fill(192,0,4);
  beginShape();
  vertex(263.7,295.7);
  vertex(265.5,301.7);
  vertex(273.3,303.5);
  vertex(400,205.2);
  vertex(400,191.7);
  endShape(CLOSE);
  
  //contorno linea gris-negro-rojo
  stroke(0,0,0);
  strokeWeight(3);
  line(126.6,400,400,191.7);
  
  //contorno linea gris-negro-rojo
  stroke(0,0,0);
  strokeWeight(3);
  line(143.9,400,400,205.2);
  
  stroke(0,0,0);
  strokeWeight(1);
  noFill();
  ellipse(48,391.4,125.8,117.1);
  
  stroke(0,0,0);
  strokeWeight(1);
  noFill();
  ellipse(341.3,395.6,125.8,117.1);
  
  stroke(0,0,0);
  strokeWeight(1);
  line(0,191,148.4,322.5);
  
  //poligono negro izq abajo
  noStroke();
  fill(0,0,0);
  beginShape();
  vertex(0,277.9);
  vertex(0,267.4);
  vertex(150.8,239.5);
  vertex(150.8,247.7);
  endShape(CLOSE);
  
  stroke(0,0,0);
  strokeWeight(3);
  line(285.2,205,344.9,400);
  
  //rectangulo blanco con triangulo rojo3
  noStroke();
  fill(255,255,255);
  beginShape();
  vertex(280.6,199.2);
  vertex(284.1,194.8);
  vertex(321.2,236.5);
  vertex(314.2,242.5);
  endShape(CLOSE);
  
  //linea negra1 en retangulo blanco
  stroke(0,0,0);
  strokeWeight(3);
  line(302,226.8,308.1,221.8);
   //linea negra2 en retangulo blanco
  stroke(0,0,0);
  strokeWeight(4);
  line(307.2,233.4,314,228.3);
   //linea negra3 en retangulo blanco
  stroke(0,0,0);
  strokeWeight(4);
  line(313.3,241.3,320.3,235.4);
  
  //poligono negro derecha abajo
  noStroke();
  fill(0,0,0);
  beginShape();
  vertex(260.7,268.7);
  vertex(263.7,265.2);
  vertex(392.6,400);
  vertex(385.4,400);
  endShape(CLOSE);
  
  //linea negra atraviesa circulo amarillo
  stroke(0,0,0);
  strokeWeight(2);
  line(107,354.9,106,400);
  
 //linea division cuadricula
  stroke(0,0,0);
  strokeWeight(3);
  line(372.3,68,400,49.9);
  
  //linea negra1 abajo semicirculo rojo
  stroke(0,0,0);
  strokeWeight(2);
  line(157.4,400,193.6,362.2);
  //linea negra2 abajo semicirculo rojo
  stroke(0,0,0);
  strokeWeight(3);
  line(166.6,400,221,342.1);
  //linea negra2 sombra abajo semicirculo rojo
  stroke(0,0,0,120);
  strokeWeight(4);
  line(166.6,400,221,342.1);
  //linea negra3 abajo semicirculo rojo
  stroke(0,0,0);
  strokeWeight(2);
  line(176.5,400,249.7,321);
  
  //poligono rojo borde negro izq abajo
  stroke(0,0,0);
  strokeWeight(1);
  fill(141,6,8);
  beginShape();
  vertex(0,295.8);
  vertex(90.1,269.2);
  vertex(92.3,275.3);
  vertex(0,305);
  endShape(CLOSE);
  
  //poligono contorno cuadricula
  stroke(0,0,0);
  strokeWeight(1);
  noFill();
  beginShape();
  vertex(133.5,128.2);
  vertex(139.8,108.9);
  vertex(168.7,122.4);
  vertex(165,136);
  endShape(CLOSE);
  
  //lineas horizontales cuadricula
  line(138.8,112.2,168.1,124.6);
  line(167.4,127,137.8,115.1);
  line(136.7,118.4,166.9,128.9);
  line(135.8,121.3,166.5,130.6);
  line(134.5,125.1,165.8,133.3);
  
  //lineas verticales cuadricula
  line(142.2,110,137.3,129.2);
  line(145.2,111.4,139.8,129.8);
  line(147.6,112.5,143.2,130.6);
  line(150.1,113.7,146.1,131.3);
  line(152.6,114.9,148.7,132);
  line(155,116,151.8,132.7);
  line(157.6,117.2,154.9,133.5);
  line(160.1,118.4,157.6,134.2);
  line(162.7,119.6,160.4,134.9);
  line(165.8,121,162.9,135.5);
} 



 
