var paisaje;
var x=0;
var y=0;

//variables botones filtros
var boton1x = 20;
var boton1y = 20;
var boton1tam = 30;

var boton2x = 20;
var boton2y = 70;
var boton2tam = 30;

var boton3x = 20;
var boton3y = 120;
var boton3tam = 30;

var borradorx = 20;
var borradory = 200;
var borradortam = 40;

var miFiltro = 0;

function preload(){
  paisaje = loadImage("assets/foto.jpg");
  miFiltro = loadImage("assets/mascara.png"); 
}


function setup() { 
  createCanvas(450, 282);
  
  

}

function draw() { 
  background(220);

  image(paisaje,0,0);
  
  

   //botones de filtro

  //boton filtro de tinta
  fill(206, 104, 0);
  rect(boton1x, boton1y, boton1tam, boton1tam);

  //boton filtro de mascara
  fill(165, 111, 9);
  rect(boton2x, boton2y, boton2tam, boton2tam);

  //boton filtro invertido
  fill(13, 145, 97);
  rect(boton3x, boton3y, boton3tam, boton3tam);
  
  //boton borrador
  fill(255, 255, 255);
  rect(borradorx,borradory,borradortam,borradortam);
  


  
 
// Programación de los botones
  
 if (mouseIsPressed) {
   
       //filtro de color
  
   if (mouseX > boton1x && mouseX < boton1x + boton1tam &&
      mouseY > boton1y && mouseY < boton1y + boton1tam) {
      tint(200, 60, 150);
    } 
  
   /// filtro de mascara arbol
    
   if (mouseX > boton2x && mouseX < boton2x + boton2tam &&
      mouseY > boton2y && mouseY < boton2y + boton2tam) {
     paisaje.mask(miFiltro);
     }
   
   // filtro negativo 
  if (mouseX > boton3x && mouseX < boton3x + boton3tam &&
      mouseY > boton3y && mouseY < boton3y + boton3tam) {
    //herramienta = 1;
    filter(INVERT);
  }
    
 
   /// borrador
 

   if (mouseX > borradorx && mouseX < borradorx + borradortam &&
      mouseY > borradory && mouseY < borradory + borradortam) {
    
     noTint();
     paisaje = loadImage("assets/foto.jpg");
     image(paisaje,0,0); 

   }
  
 }    

  
  

} 
