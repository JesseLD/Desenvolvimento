/*document.body.style.backgroundColor="#202020";

document.body.innerHTML = "<h1 style=font-family:verdana,sans-serif;text-transform:uppercase;font-weight:bold;color:#fff;text-align:center;>Esse Titulo foi injetado via JavaScript</h1>";*/

function color_change(){
  this.backgroundColor="#0f0"
}

function create_person(p_name,address){

  this.p_name = p_name;
  this.address = address;

}

let card = document.body.querySelector("div.card");
let card2 = document.body.querySelector("div.card2");
var text = document.body.querySelector("input.text");


function txt(text){

  card2.innerText =
  `
  valor do input ${text}
  `
}


let person = new create_person("pedro","joao");

card.innerHTML = `
<p>Nome: ${person.p_name} </p>
<p>Cidade: ${person.address} </p>

`
txt();

