//variables fondo
var miBosque;

function preload() {
  miBosque = loadImage("assets/bosque.jpg");
}
//variables hombres
var hombres = [];
var numHombres = 1;

//variables misiles
var misiles = [];
var numMisiles = 0;

//variables osos
var miDepredador1 = [];
var numDepredador1 = 10;


function setup() {
  createCanvas(800, 500);


  for (var e = 0; e < numHombres; e ++) {
    hombres[e] = new hombre();
    
    for (var a = 0; a < numDepredador1; a = a + 1) {
    miDepredador1[a] = new depredador1();
  }
  }
}

function draw() {
  background(220);
  
  image(miBosque,0,0);
  
  
  for (var a = 0; a < numDepredador1; a = a + 1) {
    miDepredador1[a].dibujarse();
    miDepredador1[a].moverse();
  for (var s = 0; s < numMisiles; s = s + 1) {
      var distCentro3 = dist(misiles[s].x, misiles[s].y, miDepredador1[a].x, miDepredador1[a].y);
      if (distCentro3 < miDepredador1[a].tamano / 2) {
        miDepredador1[a].morir();
      }
    }
  
  }
  
  for (var m = 0; m < numMisiles; m++) {
    misiles[m].mostrar();
    misiles[m].mover();
    misiles[m].morir();
  }
   //texto
  fill(255);
  text("Arrastre el ratón para lanzar misiles", 50, 50);


   push();
  for (var e = 0; e < numHombres; e = e + 1) {
    hombres[e].mostrar();
    hombres[e].mover();
    for (var f = 0; f < numDepredador1; f = f + 1) {
      var distCentro = dist(miDepredador1[f].x, miDepredador1[f].y, hombres[e].x, hombres[e].y);
      if (distCentro < miDepredador1[f].tamano / 2) {
        hombres[e].morir();
      }
    }
  }
  pop();
fill(255);
text("Arrastrar el humano por la pantalla" , 30, 30);
}
// familia misil
function misil(px, py) {
  this.x = mouseX;
  this.y = mouseY;
  
  this.velx = px;
  this.vely = py;
  
  this.tam = 15;
  
  this.mostrar = function() {
    fill(255,0,0);
   ellipse(this.x, this.y, this.tam, this.tam);
  }
  
  this.mover = function() {
     this.x = this.x + this.velx;
    this.y = this.y + this.vely;
    
     this.vely += 0.5
  }
this.morir = function() {
    if (this.tam >= 0) {
      this.tam -= 0.1;
    }
  }
}


//familia hombre
function hombre() {
  this.x = random(width)//random(0, width);
  this.y = random(height)//random(0, height);
  this.viva = true;
  this.tam = 13;

  this.mostrar = function() {
    if (this.viva == true) {
      
//figura hombres
       fill(67, 167, 216);
      rect(this.x - 7, this.y - 6, this.tam, this.tam);
      triangle(this.x - 15, this.y - 6, this.x, this.y - 6, this.x - 7, this.y);
      triangle(this.x, this.y - 6, this.x + 13, this.y - 6, this.x + 6, this.y);
      triangle(this.x - 7, this.y, this.x, this.y + 6, this.x - 8, this.y + 14);
      triangle(this.x + 5, this.y, this.x + 8, this.y + 14, this.x, this.y + 6);
      ellipse(this.x, this.y - 10, this.tam - 2, this.tam- 2);
}

this.mover = function() {
}

  this.arrastrar = function() {
    this.x = mouseX;//this.x + random(-1, 1);//movimiento
    this.y = mouseY;//this.y + random(-1, 1);
  
  }
}

  this.morir = function() {
    this.viva = false;
  }
}

function mouseDragged() {

  //recorre la lista de bolas
  for (var e = 0; e < numHombres; e++) {

    //revisa si el mouse esta encima de alguna bola
    if (dist(mouseX, mouseY, hombres[e].x, hombres[e].y) < hombres[e].tam + 10) {

      //llama a la funcion arrastrar
      hombres[e].arrastrar();
    }
  }

//function mouseDragged() {

  if (frameCount % 10 != 0) {
    return;
  }

  var x1 = mouseX;
  var y1 = mouseY;
  
  var x2 = pmouseX;
  var y2 = pmouseY;
  
  var velx = x1 - x2;
  var vely = y1 - y2;
 
  misiles[numMisiles] = new misil(velx, vely);
  
  numMisiles++;
}

function keyReleased() {
  
  //funcion barra espaciadora
  if (keyCode == 32) {
    numDepredador1 = numDepredador1 + 1;
    miDepredador1[miDepredador1.length] = new depredador1();

  }
}
//depredador oso
  function depredador1() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.dirX = 1;
    this.dirY = 1;
    this.viva = true;
    this.tamano = 24;

    this.dibujarse = function() {
      if (this.viva == true) {
      fill(149, 99, 81);
      ellipse(this.x, this.y, this.tamano, this.tamano);
      ellipse(this.x - 10, this.y - 8, this.tamano - 13, this.tamano - 13);
      ellipse(this.x + 9, this.y - 8, this.tamano - 13, this.tamano - 13);
    }
    }
    this.moverse = function() {
      if (this.x >= width || this.x <= 0) {
        this.dirX = -this.dirX;
        this.x = this.x + (this.dirX * 4);
      }
      if (this.y >= width || this.y <= 0) {
        this.dirY = -this.dirY;
        this.y = this.y + (this.dirY * 4);
      }

      this.x = this.x + (this.dirX * random(0, 4));
      this.y = this.y + (this.dirY * random(0, 4));
    }
  
   this.morir = function() {
    this.viva = false;
  }
  
  }









