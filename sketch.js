function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  s1 = createSlider(1, 10, 5, 1).position(20, 200);
  p1 = createP("elements").position(20, 160);
  s2 = createSlider(2, 20, 5, 1).position(20, 300);
  p2 = createP("parts").position(20, 260);
  s3 = createSlider(3, 30, 3, 1).position(20, 400);
  p3 = createP("fragments").position(20, 360);
  s4 = createSlider(50, 300, 100, 10).position(20, 500);
  p4 = createP("minimum radius").position(20, 460);
  s5 = createSlider(50, 600, 400, 10).position(20, 600);
  p5 = createP("maximum radius").position(20, 560);
  s6 = createSlider(0.1, 1, 0.1, 0.05).position(20, 700);
  p6 = createP("speed").position(20, 660);
  p7 = createP("press S to save your masterpiece!").position(
    windowWidth / 2 - 125,
    windowHeight - 65
  );
}

function draw() {
  background(20, 20, 20);

  translate(width / 2, height / 2);

  noFill();

  strokeWeight(2);

  for (var n = 0; n < s1.value(); n++) {
    stroke(255, 255, 255);
    beginShape();
    for (var i = 0; i < 360; i += s3.value()) {
      var rad = map(
        sin(i * s2.value() + frameCount),
        -1,
        1,
        s4.value(),
        s5.value()
      );
      var x = rad * cos(i);
      var y = rad * sin(i);
      vertex(x, y);
    }
    endShape(CLOSE);
    rotate(frameCount * s6.value());
  }
}
function keyPressed() {
  if (key == "s") {
    save("mySketch.png");
  }
}
