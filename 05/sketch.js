function setup() {
  createCanvas(700, 700);
  angleMode(DEGREES);
}

function draw() {
  background(0,0,0);

  var horas = hour();
  var minutos = minute();
  var segundos = second();
  var meses = month();
  var años = year();

  var mideMeses = map(meses, 0, 11, 0, 360);
  var mideAños = map(años, 0, 3000, 0, 360);
  var horario = map(horas % 12 , 0, 11 , 0, 360);
  var minutero = map(minutos, 0, 59, 0, 360);
  var segundero = map(segundos, 0, 59, 0, 360);
  
  if (horario>=12){
    horario=horario-12;
  }
//lineas blancas de guia
  push();
  strokeWeight(2);
  stroke(255,255,255);
  line(350,0,350,700);
  line(700,350,0,350);
  pop();

  //afecta a todos los arcos menos rojo y magenta
  push();
  translate(350, 350);
  strokeWeight(10);
  
  noStroke();
  // arco rojo fondo reloj
  push();
  stroke(255, 0, 0);
  fill(255,0,0)
  arc(0, 0, 500, 500, 0, 360);
  pop();
  
  rotate(-90);

  // arco naranja mide años

  fill(255, 125, 0);
  arc(0, 0, 450, 450, 0, mideAños,PIE);
  
  // arco amarillo mide meses
 
  fill(255, 255, 0);
  arc(0, 0, 400, 400, 0, mideMeses,PIE);
  
  // arco verde mide minutos
  fill(125, 255, 0);
  arc(0, 0, 350, 350, 0,minutero,PIE );
 
  // arco azul mide horas
  fill(125, 255, 255);
  arc(0, 0, 300, 300, 0, horario,PIE);
  
  // arco morado oscuro mide segundos
  fill(125, 125, 255);
  arc(0, 0, 250, 250, 0, segundero,PIE);
  pop();
   
  //arco morado magenta fin del arcoiris
  push();
  translate(350,350);
  fill(200, 0, 255);
  strokeWeight(12);
  stroke(200, 0, 255);
  arc(0, 0, 200, 200, 0, 360);
  pop();
  

}