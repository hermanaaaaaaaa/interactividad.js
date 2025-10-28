function setup() {
    createCanvas(windowWidth, windowHeight);
    background(178, 218,250);
}
function draw() {
   // background(178, 218,250);

}
function mouseMoved() {
    const red =Math.floor(Math.random() * 256);
    const green =Math.floor(Math.random() * 256);
    const blue =Math.floor(Math.random() * 256);
    stroke(red, green, blue);
    fill(red, green, blue, 100);
    const size = Math.sin(frameCount * 0.1) * 50 + 50;
    ellipse(mouseX, mouseY, size, size);
}
function mouseDragged() {
    stroke(random);
    fill(0, 150, 255, 100);
    ellipse(mouseX, mouseY, 100, 100);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}