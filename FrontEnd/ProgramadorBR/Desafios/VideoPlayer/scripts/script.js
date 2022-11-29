let play = document.querySelector("span.play");
let pause = document.querySelector("span.pause");
let video = document.querySelector("div.container");
let cts = document.querySelector("div.buttons");


play.addEventListener("click",start);

video.addEventListener("mousemover",ct);

function start(){
  this.innerText="pause"
  video.play();
}
function stop(){
  video.pause();
}
function ct(){
  cts.style.display="inline";
}

