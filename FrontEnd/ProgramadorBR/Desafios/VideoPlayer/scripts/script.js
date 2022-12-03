let play = document.querySelector("span.play");
let rewind = document.querySelector("span.rewind");
let forward = document.querySelector("span.forward");
let pause = document.querySelector("span.pause");
let video = document.querySelector("video.video");
let cts = document.querySelector("div.buttons");
var second_container = document.querySelector("div.second-container");
let btn = document.querySelectorAll("span.btn")[0];
let span = document.getElementsByTagName("span");



// play.addEventListener("click",pause);


play.addEventListener("click",start);

forward.addEventListener("click",advance);
rewind.addEventListener("click",f_rewind);


function advance(){
 video.currentTime += 5;
}
function f_rewind(){
  video.currentTime -= 5;
 }



function start(){
  video.play();
  this.innerText="pause";
  
  setTimeout((event) => {
    event = play.innerText="play_arrow";
    event = console.log("isRunning");
  }, 2000);
   
}


  


