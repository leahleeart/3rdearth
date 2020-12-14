let button = [];

function preload() {
  // backgroundimage = loadImage('background2.png');

}

function setup(){
  createCanvas (windowWidth,windowHeight);

  button4 = createImg ('images/article4.png');
  button4.position(20, 100)
  button4.mousePressed(gotolink4)

  button3 = createImg('images/article3.png');
  button3.position(100, 600)
  button3.mousePressed(gotolink3)

  button2 = createImg('images/article2.png');
  button2.position(500, 30)
  button2.mousePressed(gotolink2)

  button1 = createImg('images/article1.png');
  button1.position(900, 100)
  button1.mousePressed(gotolink1)

  button5 = createImg ('images/article5.png');
  button5.position(800, 500)
  button5.mousePressed(gotolink5)
 }


 function gotolink1() {
     window.open('https://blogs.ei.columbia.edu/2019/05/29/co2-utilization-profits/');
   }

function gotolink2() {
  window.open('https://www.technologyreview.com/2020/11/02/1011500/amazon-forestry-offsets-net-zero-carbon-climate-change/');
}

function gotolink3() {
  window.open('https://medium.com/s/story/it-was-raining-in-the-data-center-9e1525c37cc3');
}

function gotolink4() {
  window.open('https://www.nationalgeographic.com/science/2018/07/news-internet-underwater-sea-level-rise/');
}

function gotolink5() {
  window.open('https://www.nature.org/en-us/about-us/who-we-are/our-science/three-ways-to-save-our-planet/');
}
