# Workshop_9

Function setup
PixelDensity(1);
CreateCapture(VIDEO);

Click go live 

——————
Let webcam;

Setup
Webcam = createCapture(VIDEO);
Webcam.size(xxx,xxx);

To have the live view on canvas:
Function draw
Image(webcam,0,0);

If don’t want the second live video:
Setup
Webcam.hide();

———————
Function draw
Filter(GRAY);
————————-

Let ballSystem = [];

Setup
For (x = 0; x<80; x++){
Rx = random (15, width -15);
Ry = random (15, height - 15);
Rr = random (10,50);
BallSystem [x] = new Ball (rx, ry, rr);
}

Function draw
For (x=0, x< ballSystem.length; x++){
BallSystem [x]. Move();
BallSystem [x]. Show();
BallSystem [x]. CheckEdges();

Class Ball{

Constructor (x,y,r){
This.x = x;
This.y =y;
This.r =r;

Move(){
This.x= this.x + random (-8, 8);
This.y= this.y + random (-8, 8);

Show(){
Let pixelColour= webcam.get(this.x, this,y):
Fill(pixelColour [0], pixelCOlour[1], pixelColour [2];
NoStroke();
Ellipse(this.x, this.y, this.r);

CheckEdges(){
 If(this.x <15){
This.x =15;
}else if (this.x > width - 15){
This.x = width-15;
}
If (this,y <15){
This.y = 15;
}else if (this.y > height - 15){
This.y = height - 15;
}

——————-
If laggy
-> change webcam.size

Let scale= 18; (changeable)
Webcam.size(width/ scale, height/ scale);

Show
// let pixelColour………
Let pX= this.x / scale;
Let pY= this.y / scale;
Let pixelColour = webcam.get (pX,pY);

——————————
If want more details:

Setup
Increase ball no. (Was 80)
Rr= random (smaller no, bigger no.);

—————————
Transparency
Show
Fill(………, 0,1,2, xxx);


URL: https://taropie3sui.github.io/Workshop_9/
