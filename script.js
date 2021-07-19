var img;
var grayimg;

function upload(){
  var imgcanvas=document.getElementById("can1");
var fileinput=document.getElementById("finput");
 img=new SimpleImage(fileinput);
 img.drawTo(imgcanvas);
}
function grayimg(){
  var imgcanvas=document.getElementById("can2");
  for (var pixel of img.values()){
    var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3.0;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
   img.drawTo(imgcanvas);
}

/*function upload(){
  var fileinput=document.getElementById("fileinput");
  var filename=fileinput.value;
  alert("You choose "+filename);
}*/
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  })
  var textWrapper = document.querySelector('.ml2');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  anime.timeline({loop: true})
    .add({
      targets: '.ml2 .letter',
      scale: [4,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 950,
      delay: (el, i) => 70*i
    }).add({
      targets: '.ml2',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
//slideshow functioning
var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 4){
        counter = 1;
      }
    }, 5000);