//variables mujeres
var mujeres = [];
var numMujeres = 50;
//variables hombres
var hombres = [];
var numHombres = 20;
//variables hijos
var hijos = [];
var numHijos = 10;
//variables conejos
var conejos = [];
var numConejos = 40;
//variables osos
var miDepredador1 = [];
var numDepredador1 = 3;
//variables zorros
var miDepredador2 = [];
var numDepredador2 = 5;




function setup() {
  createCanvas(600, 600);


  for (var i = 0; i < numMujeres; i = i + 1) {
    mujeres[i] = new mujer();
  }
  for (var e = 0; e < numHombres; e = e + 1) {
    hombres[e] = new hombre();
  }

  for (var m = 0; m < numConejos; m = m + 1) {
    conejos[m] = new conejito();
  }

  for (var a = 0; a < numDepredador1; a = a + 1) {
    miDepredador1[a] = new depredador1();
  }

  for (var c = 0; c < numDepredador2; c = c + 1) {
    miDepredador2[c] = new depredador2();
  }
  //for (var j = 0; j < numHijos; j = j + 1) {
  //hijos[j] = new hijo();
  // }
}

function draw() {
  background(255, 255, 255);


  for (var a = 0; a < numDepredador1; a = a + 1) {
    miDepredador1[a].dibujarse();
    miDepredador1[a].moverse();
  }
  
  push();
  for (var c = 0; c < numDepredador2; c = c + 1) {
    miDepredador2[c].dibujarse();
    miDepredador2[c].moverse();
    for (var s = 0; s < numHombres; s = s + 1) {
      var distCentro3 = dist(hombres[s].x, hombres[s].y, miDepredador2[c].x, miDepredador2[c].y);
      if (distCentro3 < miDepredador2[c].tamano / 2) {
        miDepredador2[c].morir();
      }
    }
  }
  pop();
  
  push();
  for (var e = 0; e < numHombres; e = e + 1) {
    hombres[e].dibujarse();
    hombres[e].moverse();
    for (var f = 0; f < numDepredador1; f = f + 1) {
      var distCentro = dist(miDepredador1[f].x, miDepredador1[f].y, hombres[e].x, hombres[e].y);
      if (distCentro < miDepredador1[f].tamano / 2) {
        hombres[e].morir();
      }
    }
  }
  pop();

  //for (var j = 0; e < numHijos; j = j +1) {
  // var distCentro2 = dist(mujeres[i].x,mujeres[i].y,hombres[e].x,hombres[e].y);
  // if (distCentro2< mujeres[i].tamano/2){
  // hijos[j].dibujarse();
  //hijos[j].moverse();
  //}
  //}
  
  push();
  for (var i = 0; i < numMujeres; i = i + 1) {
    mujeres[i].dibujarse();
    mujeres[i].moverse();

    for (var a = 0; a < numDepredador1; a = a + 1) {
      var distCentro1 = dist(miDepredador1[a].x, miDepredador1[a].y, mujeres[i].x, mujeres[i].y);
      if (distCentro1 < miDepredador1[a].tamano / 2) {
        mujeres[i].morir();

      }
    }
  }
  pop();
  
  push();
  for (var m = 0; m < numConejos; m = m + 1) {
    conejos[m].dibujarse();
    conejos[m].moverse();

    for (var c = 0; c < numDepredador2; c = c + 1) {
      var distCentro2 = dist(conejos[m].x, conejos[m].y, miDepredador2[c].x, miDepredador2[c].y);
      if (distCentro2 < miDepredador2[c].tamano / 2) {
        conejos[m].morir();

      }
    }
  }
  pop();
}

//funcion teclas
function keyReleased() {
  // mirar: http://keycode.info/ para codigos de otras teclas.
 
  //funcion barra espaciadora
  if (keyCode == 32) {
    numDepredador1 = numDepredador1 + 1;
    miDepredador1[miDepredador1.length] = new depredador1();

  }
  //funcion enter
  if (keyCode == 13) {
    numDepredador2 = numDepredador2 + 1;
    miDepredador2[miDepredador2.length] = new depredador2();

  }
}

// familia mujeres
function mujer() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.tamano = 13;
  this.viva = true;


  this.dibujarse = function() {
    if (this.viva == true) {
//figura mujeres
      fill(245, 103, 157)
      rect(this.x - 7, this.y - 6, this.tamano, this.tamano);
      triangle(this.x - 15, this.y - 6, this.x, this.y - 6, this.x - 7, this.y);
      triangle(this.x, this.y - 6, this.x + 13, this.y - 6, this.x + 6, this.y);
      triangle(this.x - 7, this.y, this.x, this.y + 6, this.x - 8, this.y + 14);
      triangle(this.x + 5, this.y, this.x + 8, this.y + 14, this.x, this.y + 6);
      ellipse(this.x, this.y - 10, this.tamano - 2, this.tamano - 2);
    }
  }
  this.moverse = function() {
    this.x = this.x + random(-1, 1);//movimiento
    this.y = this.y + random(-1, 1);
  }

  this.crecer = function() {
    this.tamano = this.tamano + random(0.3, 0.6);
  }

  this.morir = function() {
    this.viva = false;
  }
}

//familia hombres
function hombre() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.tamano = 13;
  this.viva = true;

  this.dibujarse = function() {
    if (this.viva == true) {
      
//figura hombres
      fill(67, 167, 216);
      rect(this.x - 7, this.y - 6, this.tamano, this.tamano);
      triangle(this.x - 15, this.y - 6, this.x, this.y - 6, this.x - 7, this.y);
      triangle(this.x, this.y - 6, this.x + 13, this.y - 6, this.x + 6, this.y);
      triangle(this.x - 7, this.y, this.x, this.y + 6, this.x - 8, this.y + 14);
      triangle(this.x + 5, this.y, this.x + 8, this.y + 14, this.x, this.y + 6);
      ellipse(this.x, this.y - 10, this.tamano - 2, this.tamano - 2);
    }
  }
  this.moverse = function() {
    this.x = this.x + random(-1, 1);//movimiento
    this.y = this.y + random(-1, 1);
  }

  this.crecer = function() {
    this.tamano = this.tamano + random(0.3, 0.6);
  }

  this.morir = function() {
    this.viva = false;
  }
}
// familia hijos

 // function hijo() {
//  this.x = random(0, width); 
   // this.y = random(0, height); 
    //this.tamano = 13;
    //this.viva = true;

    //this.dibujarse = function() {
      //if (this.viva == true) {

        //fill(0, 224, 95);
        //rect(this.x - 7, this.y - 6, this.tamano, this.tamano);
        //triangle(this.x - 15, this.y - 6, this.x, this.y - 6, this.x - 7, this.y);
        //triangle(this.x, this.y - 6, this.x + 13, this.y - 6, this.x + 6, this.y);
        //triangle(this.x - 7, this.y, this.x, this.y + 6, this.x - 8, this.y + 14);
        //triangle(this.x + 5, this.y, this.x + 8, this.y + 14, this.x, this.y + 6);
        //ellipse(this.x, this.y - 10, this.tamano - 2, this.tamano - 2);
      //}
    //}
    //this.moverse = function() {
      //this.x = this.x + random(-1, 1);
     // this.y = this.y + random(-1, 1);
   // }

    //this.crecer = function() {
      //this.tamano = this.tamano + random(0.3, 0.6);
    //}

    //this.morir = function() {
     // this.viva = false;
    //}
 // }

  //familia conejitos
  function conejito() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.tamano = 22;
    this.viva = true;

    this.dibujarse = function() {
      if (this.viva == true) {
        push();
        strokeWeight(1);
        fill(205, 205, 205);
        ellipse(this.x, this.y, this.tamano, this.tamano);
        ellipse(this.x - 7, this.y - 14, this.tamano - 16, this.tamano - 7);
        ellipse(this.x + 6, this.y - 14, this.tamano - 16, this.tamano - 7);
        noStroke();
        fill(255, 146, 166);
        triangle(this.x - 3, this.y, this.x + 2, this.y, this.x, this.y + 4);
        pop();
      }
    }
    this.moverse = function() {
      this.x = this.x + random(-1, 1);
      this.y = this.y + random(-1, 1);
    }

    this.morir = function() {
      this.viva = false;
    }
  }
  // familia depredadores

  //depredador zorro
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
        stroke(0, 0, 0);
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
  //depredador oso
  function depredador1() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.dirX = 1;
    this.dirY = 1;
    this.tamano = 24;

    this.dibujarse = function() {
      fill(149, 99, 81);
      ellipse(this.x, this.y, this.tamano, this.tamano);
      ellipse(this.x - 10, this.y - 8, this.tamano - 13, this.tamano - 13);
      ellipse(this.x + 9, this.y - 8, this.tamano - 13, this.tamano - 13);
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
  }
