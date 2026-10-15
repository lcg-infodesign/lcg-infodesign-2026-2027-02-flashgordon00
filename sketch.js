function setup() {
  createCanvas(windowWidth, windowHeight);
  background(8, 18, 60);

  let numeroglifi = 70;
  let colonne = 10;
  let righe = 7;

  let distanzaX = width / colonne;
  let distanzaY = height / righe;

  let x = 0;
  let y = 0;

  for (let g = 0; g < numeroglifi; g++) {

    glifo(
      x + distanzaX / 2,
      y + distanzaY / 2,
      min(distanzaX, distanzaY) * 0.65
    );

    x = x + distanzaX;

    if (x >= width) {
      x = 0;
      y = y + distanzaY;
    }
  }
}

function draw() {
}


function glifo(_x, _y, _size) {

  push();
  translate(_x, _y);

  let tipo = floor(random(3));

  if (tipo == 0) {
    saturno(_size);
  }

  if (tipo == 1) {
    stella(_size);
  }

  if (tipo == 2) {
    razzo(_size);
  }

  pop();
}


function saturno(s) {

  stroke(255);
  strokeWeight(2);

  // anello
  noFill();
  ellipse(0, 0, s, s * 0.35);

  // pianeta
  fill(255, 180, 70);
  circle(0, 0, s * 0.6);
}


function stella(s) {

  fill(255, 220, 70);
  stroke(255);
  strokeWeight(2);

  beginShape();

  for (let i = 0; i < 10; i++) {

    let angolo = i * 36 - 90;
    let raggio;

    if (i % 2 == 0) {
      raggio = s * 0.4;
    } else {
      raggio = s * 0.18;
    }

    let x = cos(radians(angolo)) * raggio;
    let y = sin(radians(angolo)) * raggio;

    vertex(x, y);
  }

  endShape(CLOSE);
}


function razzo(s) {

  stroke(255);
  strokeWeight(2);

  // corpo
  fill(230);
  ellipse(0, 0, s * 0.4, s * 0.75);

  // punta
  fill(255, 80, 80);
  triangle(
    -s * 0.18, -s * 0.2,
    s * 0.18, -s * 0.2,
    0, -s * 0.48
  );

  // oblò
  fill(80, 190, 255);
  circle(0, -s * 0.05, s * 0.15);

  // fiamma
  fill(255, 180, 50);
  triangle(
    -s * 0.1, s * 0.3,
    s * 0.1, s * 0.3,
    0, s * 0.5
  );
}