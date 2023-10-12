var image=null;
function clearcanvas(){
  if(image!=null){
  var canvas=document.getElementById("can");
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  image=null;
  location.reload()
  alert('Image cleared ! Now you can upload new image')
}}
function upload(){
  var canvas=document.getElementById("can");
  var fileinput=document.getElementById("finput");
  image=new SimpleImage(fileinput);
  image.drawTo(canvas);
}
function resetimage(){
  if(image!=null){
var canvas=document.getElementById("can");
  var fileinput=document.getElementById("finput");
  image=new SimpleImage(fileinput);
  image.drawTo(canvas);}}

//BLACK N WHITE FILTER//
function makegrayscale(){
  if (image == null ) {
    alert("Image not uploaded, Please upload an image");
  }
  else if(!image.complete()){
    alert("Grayscale filter has been applied already!");
  }
  else{
  for(var pixel of image.values()){
    var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  var imgcanvas=document.getElementById("can");
  image.drawTo(imgcanvas);
var fileinput=document.getElementById("finput");
  image=new SimpleImage(fileinput);}
}
//DULL FILTER
function makedull(){
  if (image == null ) {
    alert("Image not uploaded, Please upload an image");
  }
  else if(!image.complete()){
    alert("Dull filter has been applied already!");
  }

  else{
  for(var pixel of image.values()){
  
    pixel.setRed(pixel.getRed()/2);
    pixel.setGreen(pixel.getGreen()/2);
    pixel.setBlue(pixel.getBlue()/2);
  }
  var imgcanvas=document.getElementById("can");
  image.drawTo(imgcanvas);
var fileinput=document.getElementById("finput");
  image=new SimpleImage(fileinput);}
}
//RED FILTER//
function makered(){
  if (image == null ) {
    alert("Image not uploaded, Please upload an image");
  }
  else if(!image.complete()){
    alert("Red filter has been applied already!");
  }
  else{
  for(var pixel of image.values()){
    var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
if(avg<128){
    pixel.setRed(2*avg);
    pixel.setGreen(0);
    pixel.setBlue(0);
}
 else{  pixel.setRed(255);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(2*avg-255);}
  }
  var imgcanvas=document.getElementById("can");
  image.drawTo(imgcanvas);
var fileinput=document.getElementById("finput");
  image=new SimpleImage(fileinput);}}

//GREEN FILTER//
function makegreen(){
  if (image == null ) {
    alert("Image not uploaded, Please upload an image");
  }
  else if(!image.complete()){
    alert("Green filter has been applied already!");
  }
  else{
  for(var pixel of image.values()){
    var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
if(avg<128){
    pixel.setGreen(2*avg);
    pixel.setRed(0);
    pixel.setBlue(0);
}
 else{  pixel.setGreen(255);
        pixel.setRed(2*avg-255);
        pixel.setBlue(2*avg-255);}
  }
  var imgcanvas=document.getElementById("can");
  image.drawTo(imgcanvas);
var fileinput=document.getElementById("finput");
  image=new SimpleImage(fileinput);}}


//BLUE FILTER//
function makeblue(){
  if (image == null ) {
    alert("Image not uploaded, Please upload an image");
  }
  else if(!image.complete()){
    alert("Blue filter has been applied already!");
  }
  else{
  for(var pixel of image.values()){
    var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
if(avg<128){
    pixel.setBlue(2*avg);
    pixel.setRed(0);
    pixel.setGreen(0);
}
 else{  pixel.setBlue(255);
        pixel.setRed(2*avg-255);
        pixel.setGreen(2*avg-255);}
  }
  var imgcanvas=document.getElementById("can");
  image.drawTo(imgcanvas);
  var fileinput=document.getElementById("finput");
  image=new SimpleImage(fileinput);
}
}



// Adjust brightness using slider
function makebright() {
  if (image == null ) {
    alert("Image not uploaded, Please upload an image");
  }
  else if(!image.complete()){
    alert("Green filter has been applied already!");
  }
 else{
  for(var pixel of image.values()){

    pixel.setBlue(pixel.getBlue()+60);
    pixel.setRed(pixel.getRed()+60);
    pixel.setGreen(pixel.getGreen()+60);
}

  var imgcanvas=document.getElementById("can");
  image.drawTo(imgcanvas);
var fileinput=document.getElementById("finput");
  image=new SimpleImage(fileinput);
}}



//Download Option
function download(){
var canvas = document.getElementById("can");
var anchor = document.createElement("a");
anchor.href = canvas.toDataURL("image/png");
anchor.download = "IMAGE.PNG";
anchor.click();
}