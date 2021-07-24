function preload(){
   img = loadImage('card.png');
}
function setup()
{
    canvas = createCanvas(650,475);
    canvas.center();
}
function draw()
{
    image(img,225,150,200,200);
    fill(255, 0, 0); 
    stroke(255, 0, 0); 
    circle(50, 50, 80); 
    circle(50, 430, 80); 
    circle(585, 50, 80); 
    circle(585, 430, 80); 
    fill(0, 128, 0); 
    stroke(0, 128, 0);
    rect(90, 40, 460, 20); 
    rect(90, 420, 460, 20); 
    rect(40, 80, 20, 320); 
    rect(580, 80, 20, 320);
}
function take_snapshot()
{
    save('student_name.png'); 
}

