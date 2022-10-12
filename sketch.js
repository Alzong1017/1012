function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  stroke(255)//框線顏色
  noFill();//不要充滿顏色
  rectMode(CENTER)
  
  // ellipse(25+(1*50),25,50)//在座標(25,25)畫一個直徑50的圓
  // rect(25+(1*50,)25,50)//方框座標
  // ellipse(50+(1*50),50,25)

  // ellipse(25+(2*50),25,50)//在座標(25,25)畫一個直徑50的圓
  // rect(25+(2*50,)25,50)//方框座標
  // ellipse(50+(2*50),50,25)

  // ellipse(25+(3*50),25,50)//在座標(25,25)畫一個直徑50的圓
  // rect(25+(3*50,)25,50)//方框座標
  // ellipse(50+(3*50),50,25)

  // ellipse(25+(4*50),25,50)//在座標(25,25)畫一個直徑50的圓
  // rect(25+(4*50,)25,50)//方框座標
  // ellipse(50+(4*50),50,25)

  // ellipse(25+(5*50),25,50)//在座標(25,25)畫一個直徑50的圓
  // rect(25+(5*50,)25,50)//方框座標
  // ellipse(50+(5*50),50,25)

  for(var j=0;j<(height/50);j++){
  for(var i=0;i<(width/50);i=i+1)//i++ ==>i=i+1
  {
    ellipse(25+(i*50),25+(j*50),50+mouseX/10) //在座標(25,25)畫一個直徑50的圓
    stroke("#e9edc9")
    rect(25+(i*50),25+(j*50),50) //方框座標
    stroke("#ade8f4")
    ellipse(50+(i*50),50+(j*50),25+mouseY/5)
    stroke(255)
  }

}
}
