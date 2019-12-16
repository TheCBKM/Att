  

var attractors = [];
var particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
//   background(51);

  // for (var i = 0; i < 10; i++) {
  //   attractors.push(createVector(random(width), random(height)));
  // }
}

function mousePressed() {
  attractors.push(createVector(mouseX, mouseY));
}

function draw() {
  background(51);
  stroke(255);
  strokeWeight(4);
  particles.push(new Particle(random(width), random(height)));

  if (particles.length > 1000) {
    particles.splice(0, 1);
  }

  for (var i = 0; i < attractors.length; i++) {
    stroke(0, 255, 0);
    point(attractors[i].x, attractors[i].y);
  }
  for (var i = 0; i < particles.length; i++) {
    var particle = particles[i];
    for (var j = 0; j < attractors.length; j++) {
      particle.attracted(attractors[j]);
    }
    particle.update();
    particle.show();
  }
}