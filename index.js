
function okok(){
  var random = Math.floor(Math.random()*6)+1;

  var randomDiceImage = "dice"+random+".png";

  var randomImageSource = "images\\"+randomDiceImage;

  return randomImageSource;
}

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];
var r1 = okok();
var r2 = okok();

image1.setAttribute("src",r1);
image2.setAttribute("src",r2);

if (r1 > r2){
  document.querySelector("h1").innerHTML = "Player 1 🚩 wins"
}
else if ( r1 < r2 ) {
    document.querySelector("h1").innerHTML = "Player 2 🚩 wins"

}
else{
  document.querySelector("h1").innerHTML = "Draw 🙊"
}
