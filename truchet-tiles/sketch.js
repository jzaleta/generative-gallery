let rez = 0.02;
let size = 50;

function setup() {
  createCanvas(600,600);
  let saveButton = createButton("save jpg");
  saveButton.position(10, height+10);
  saveButton.mousePressed(saveArt);
  colorMode(HSB,360,100,100,100);
  colorStart = random(260);
  noLoop();
}

function draw() {
  background(255);
  for (i = 0; i < width; i += size) {
    for (j = 0; j < height; j += size) {
      n1 = noise(i * rez, j * rez);
      n2 = noise(i * rez+10000, j * rez+10000);
      if (n1 < 0.5) {
        fill(floor(n1*100)+colorStart,100,100,100);
        triangle(i, j, i + size, j + size, i,j+size);
        fill(floor(100-(n1*100))+colorStart,100,100,100);
        triangle(i, j, i + size, j + size, i+size,j);
      } else {
        fill(floor(n2*100)+colorStart,100,100,100);
        triangle(i + size, j, i, j + size,i,j);
        fill(floor(100-(n2*100))+colorStart,100,100,100);
        triangle(i + size, j, i, j + size,i+size,j+size);
      }
    }
  }
}

function saveArt() {
  save("myCanvas.jpg");
}