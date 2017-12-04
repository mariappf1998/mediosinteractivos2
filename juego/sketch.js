var boton1x = 200;
var boton1x = 200;
var boton1tam = 100;

var colorselect = 0;

var estado = 0;

var INTRO = 1;
var NIVEL1 = 2;
var NIVEL2 = 3;
var NIVEL3 = 4;
var GANAR = 5;
var PERDER = 6;

var elHombre;

//variables misiles
var misiles = [];
var numMisiles = 0;

//variables osos
var miDepredador1 = [];
var numDepredador1 = 10;
//variables zorros
var miDepredador2 = [];
var numDepredador2 = 10;

var puntaje = 0;


//cargar la imagen de fondo en intro

function preload() {
  miFondo = loadImage("assets/osos.jpg");
}

function setup() {

  estado = INTRO;
  createCanvas(windowWidth, windowHeight);

  //hombre
  elHombre = new hombre();

  //osos
  for (var a = 0; a < numDepredador1; a = a + 1) {
    miDepredador1[a] = new depredador1();
  }

  //zorros
  for (var c = 0; c < numDepredador2; c = c + 1) {
    miDepredador2[c] = new depredador2();
  }

}

function draw() {

  print(elHombre.viva);

  if (estado == INTRO) { //INTRO

    background(miFondo);


  } else if (estado == NIVEL1) { //NIVEL 1

    push();

    var tiempoActual = millis();
    //print(tiempoActual);

    //millis() - tiempoActual;

    //     //tiempo limite para pasar a nivel 2

    if (millis() > 20000) {
      estado = NIVEL2;
      elHombre.viva = true;
      puntaje = 0;

      tiempoActual = 0;
    }

    background(0);
    fill(255);
    textAlign(CENTER);
    textSize(60);
    text("NIVEL 1", width / 2, height / 2);

    //     //instrucciones
    fill(255);
    textAlign(CENTER);
    textSize(20);
    text("Rota el iPad para huir de los osos y no dejes que te atrapen", width / 2, height / 2 + 20);

    //     //muestra rotación

    fill(255);
    textSize(20);
    noStroke();
    text("X: " + floor(rotationY), 60, 40);
    text("Y: " + floor(rotationX), 60, 20);

    //funciones para osos
    for (var a = 0; a < numDepredador1; a = a + 1) {
      miDepredador1[a].dibujarse();
      miDepredador1[a].moverse();

      //determina muerte de Hombre
      for (var f = 0; f < numDepredador1; f = f + 1) {
        var distCentro = dist(miDepredador1[f].x, miDepredador1[f].y, elHombre.x, elHombre.y);
        if (distCentro < miDepredador1[f].tamano / 2) {
          elHombre.morir();
        }
      }
    }

    if (elHombre.viva == true) {
      elHombre.mostrar();
      elHombre.mover();
    }
    if (elHombre.viva == false && tiempoActual > 1000) {
      estado = PERDER;
    }



    pop();

  } else if (estado == NIVEL2) { //NIVEL 2

    push();

    var tiempoActual = 0;


    background(255);
    fill(0);
    textAlign(CENTER);
    textSize(60);
    text("NIVEL 2", width / 2, height / 2);

    textAlign(LEFT);
    textSize(40);
    text("P " + puntaje, 40, 40);


    //determina muerte de Hombre
    for (var f = 0; f < numDepredador1; f = f + 1) {
      var distCentro = dist(miDepredador1[f].x, miDepredador1[f].y, elHombre.x, elHombre.y);
      if (distCentro < miDepredador1[f].tamano / 2) {
        elHombre.morir();
      }
    }
    //funciones para osos
    for (var a = 0; a < numDepredador1; a = a + 1) {
      miDepredador1[a].dibujarse();
      miDepredador1[a].moverse();
      for (var s = 0; s < numMisiles; s = s + 1) {
        var distCentro3 = dist(misiles[s].x, misiles[s].y, miDepredador1[a].x, miDepredador1[a].y);
        if (estado == NIVEL2) {
          //matar osos con misiles
          if (distCentro3 < miDepredador1[a].tamano / 2 && miDepredador1[a].viva) {
            miDepredador1[a].morir();
            puntaje = puntaje + 1;
            //console.log("puntaje=" + puntaje);
            if (puntaje >= 10) {
              estado = NIVEL3;
              miDepredador1[a].revivir();
              puntaje = 0;
              miDepredador1[a].viva = true;
            }
          }
        }
      }
    }
    //determina muerte de misiles
    for (var m = 0; m < numMisiles; m++) {
      misiles[m].mostrar();
      misiles[m].mover();

    }
    //instruccion
    textSize(20);
    textAlign(CENTER);
    fill(0);
    text("Arrastre el humano para lanzar misiles", width / 2, height / 2 + 50);


    if (elHombre.viva == true) {
      elHombre.mostrar();
      elHombre.arrastrar();
    }
    if (elHombre.viva == false) {
      estado = PERDER;
    }


    pop();

  } else if (estado == NIVEL3) { //NIVEL 3

    background(0);
    fill(255);
    textAlign(CENTER);
    textSize(60);
    text("NIVEL 3", width / 2, height / 2);

    textAlign(LEFT);
    textSize(40);
    text("P " + puntaje, 40, 40);

    for (var c = 0; c < numDepredador2; c = c + 1) {
      miDepredador2[c].dibujarse();
      miDepredador2[c].moverse();
      for (var s = 0; s < numMisiles; s = s + 1) {
        var distCentro3 = dist(misiles[s].x, misiles[s].y, miDepredador2[c].x, miDepredador2[c].y);
        if (distCentro3 < miDepredador2[c].tamano / 2) {
          miDepredador2[c].morir();

          puntaje = puntaje + 1;
          if (puntaje >= 30) {
            estado = GANAR;
            puntaje = 0;
          }
        }
      }
    }

    //determina muerte de Hombre
    for (var f = 0; f < numDepredador2; f = f + 1) {
      var distCentro = dist(miDepredador2[f].x, miDepredador2[f].y, elHombre.x, elHombre.y);
      if (distCentro < miDepredador2[f].tamano / 2) {
        elHombre.morir();
        miDepredador[f].x = random;
         miDepredador[f].y = random;
      }
    }
    //funciones para osos
    for (var a = 0; a < numDepredador1; a = a + 1) {
      miDepredador1[a].dibujarse();
      miDepredador1[a].moverse();
      for (var s = 0; s < numMisiles; s = s + 1) {
        var distCentro3 = dist(misiles[s].x, misiles[s].y, miDepredador1[a].x, miDepredador1[a].y);

        //matar osos con misiles
        if (distCentro3 < miDepredador1[a].tamano / 2) {

          miDepredador1[a].morir();

          puntaje = puntaje + 1;
          if (puntaje >= 10) {
            estado = GANAR;
            puntaje = 0;
          }
        }
      }
    }
    //funciones misiles
    for (var m = 0; m < numMisiles; m++) {
      misiles[m].mostrar();
      misiles[m].mover();

    }
    //instruccion
    textSize(20);
    textAlign(CENTER);
    fill(255);
    text("Llegó una especie invasora ¡Son muchos! ¡Contra todos!", width / 2, height / 2 + 50);


    if (elHombre.viva == true) {
      elHombre.mostrar();
      elHombre.arrastrar();
    }
    if (elHombre.viva == false) {
      estado = PERDER;
    }



  } else if (estado == GANAR) { //GANAR
    background(255);
    fill(0);
    textAlign(CENTER);
    textSize(60);
    text("GANASTEEE", width / 2, height / 2);
    
    fill(0);
    textAlign(CENTER);
    textSize(20);
    text("Espera 40 segundos para volver a empezar", width / 2, height / 2+60);
    
    
    

  } else { //PERDER

    var boton1x = windowWidth / 2 - 30;
    var boton1y = windowHeight / 2 + 60;
    var boton1tam = 200;

    background(0);
    fill(255);
    textAlign(CENTER);
    textSize(60);
    text("PERDISTEE :(", width / 2, height / 2);
    
    fill(255);
    textAlign(CENTER);
    textSize(20);
    text("Espera 40 segundos para volver a empezar", width / 2, height / 2 + 60);
    

  }
}




//funcion TOQUES EN LA PANTALLA

function mousePressed() {
  if (estado == INTRO) {
    elHombre.viva = true;
    estado = NIVEL1;
  // } else if (estado == PERDER) {
  //   estado = INTRO;
  //   puntaje = 0;
  //   elHombre.viva = true;
  //   for (var a = 0; a < numDepredador1; a = a + 1) {
  //     miDepredador1[a].viva = true;
  //   }
  // } else if (estado == GANAR) {
  //   estado = INTRO;
  //   puntaje = 0;
  //   elHombre.viva = true;
  //   for (var a = 0; a < numDepredador1; a = a + 1) {
  //     miDepredador1[a].viva = true;
  //     tiempoActual=0;
  //   }
  // }
  //elHombre.viva = true;
  }
 return false;
}


//funcion mouse sostenido ARRASTRAR

function mouseDragged() {
  if (estado == NIVEL2) {
    elHombre.arrastrar();

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
  } else if (estado == NIVEL3) {
    elHombre.arrastrar();

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

  return false;
}







// familia misil
function misil(px, py) {
  this.x = mouseX;
  this.y = mouseY;
  this.velx = px;
  this.vely = py;
  this.tam = 15;

  this.mostrar = function() {
    fill(255, 0, 0);
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
  this.x = 0 //width / 2;
  this.y = 0 //height / 2;
  this.velx = 5;
  this.vely = 5;
  this.viva = true;
  this.tam = 28;

  this.mostrar = function() {
    if (this.viva == true) {

      //figura hombres
      fill(67, 167, 216);
      rect(this.x - 18, this.y - 18, this.tam + 7, this.tam + 7);
      triangle(this.x - 51, this.y - 18, this.x, this.y - 18, this.x - 18, this.y + 3);
      triangle(this.x, this.y - 18, this.x + 50, this.y - 18, this.x + 17, this.y + 3);
      triangle(this.x - 18, this.y + 3, this.x, this.y + 17, this.x - 18, this.y + 51);
      triangle(this.x + 17, this.y + 3, this.x, this.y + 17, this.x + 17, this.y + 51);
      ellipse(this.x, this.y - 32, this.tam, this.tam);
    }
  }
  this.mover = function() {
    //el movimiento se asigna por la posicion + la velocidad
    this.x = this.x + this.velx;
    this.y = this.y + this.vely;

    //rotationX contola Y
    this.vely = map(rotationX, -90, 90, -3, 3);

    //rotation Y controla X
    this.velx = map(rotationY, -90, 50, -3, 3);

    this.x = constrain(this.x, this.tam / 2, width - this.tam / 2);
    this.y = constrain(this.y, this.tam / 2, height - this.tam / 2);
  }

  this.arrastrar = function() {
    this.x = mouseX; //this.x + random(-1, 1);//movimiento
    this.y = mouseY; //this.y + random(-1, 1);
  }

  this.morir = function() {
    this.viva = false;
  }
}


//familia osos
function depredador1() {
  this.x = random(0, width);
  this.y = random(0, height)
  this.dirX = 1;
  this.dirY = 1;
  this.viva = true;
  this.tamano = 31;

  this.dibujarse = function() {
    if (this.viva == true) {
      fill(149, 99, 81);
      ellipse(this.x - 21, this.y - 21, this.tamano, this.tamano);
      ellipse(this.x + 21, this.y - 21, this.tamano, this.tamano);
      ellipse(this.x, this.y, this.tamano + 26, this.tamano + 26);
    }
  }

  this.revivir = function() {
    this.x = 0;
    this.y = 0;
  }
  this.moverse = function() {
    if (this.x >= width || this.x <= 0) {
      this.dirX = -this.dirX;
      this.x = this.x + (this.dirX * 4);
    }
    if (this.y >= height || this.y <= 0) {
      this.dirY = -this.dirY;
      this.y = this.y + (this.dirY * 4);
    }

    this.x = this.x + (this.dirX * random(0, 4));
    this.y = this.y + (this.dirY * random(0, 4));

  }


  this.morir = function() {
    this.viva = false;
    //puntaje = puntaje + 1;
    this.x = -200;
    this.y = -200;
  }
}

//familia zorros
function depredador2() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.dirX = 1;
  this.dirY = 1;
  this.tamano = 29;
  this.viva = true;

  this.dibujarse = function() {
    if (this.viva == true) {
      push();
      noStroke();
      fill(232, 100, 28);
      rect(this.x - 15, this.y - 8, this.tamano, this.tamano - 15);
      triangle(this.x - 15, this.y - 7, this.x - 10, this.y - 21, this.x - 5, this.y - 7);
      triangle(this.x + 4, this.y - 7, this.x + 10, this.y - 21, this.x + 14, this.y - 7);
      fill(255, 255, 255);
      triangle(this.x - 14, this.y + 5, this.x + 14, this.y + 5, this.x, this.y + 16);
      pop();
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

    this.morir = function() {
      this.viva = false;
    }
  }
}
