let play = document.querySelector("span.play");
let pause = document.querySelector("span.pause");
let video = document.querySelector("video.video");
let cts = document.querySelector("div.buttons");
var second_container = document.querySelector("div.second-container");
let btn = document.querySelectorAll("span.btn")[0];
let span = document.getElementsByTagName("span");

arr=["1","2","3"]



play.addEventListener("click",start);
play.addEventListener("click",pause);


video.addEventListener("mousemover",ct);

function start(){
  video.play();
  this.style.opacity= "0"

}

function pause(){
  video.pause();
}

function ct(){
  cts.style.display="inline";
}
function m_hover(){
  second_container.style.backgroundColor="yellow";
  
}
  
  


