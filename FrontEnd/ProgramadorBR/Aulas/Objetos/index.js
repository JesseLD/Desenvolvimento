/*var materials={
  wood:{
    name:"Wood"
  },
  stone:{
    name:"Stone"
  },
  iron:{
    name:"Iron"
  },
  gold:{
    name:"Gold"
  },
  diamond:{
    name:"Diamond"
  },
}

var tools ={
  sword:{
    name:"Sword",
    damage:7,
    cooldown:0.5,
    material:materials.diamond
  },
  axe:{
    name:"Axe",
    damage:7,
    cooldown:1.0,
    material:materials.diamond

  },
  pickaxe:{
    name:"Pickaxe",
    damage:7,
    cooldown:0.7,
    material:materials.diamond

  },
  shovel:{
    name:"Shovel",
    damage:7,
    cooldown:0.7,
    material:materials.diamond

  },
  hoe:{
    name:"Hoe",
    damage:7,
    cooldown:0.6,
    material:materials.diamond

  }

}


var player ={
  life: 20,
  damage:0.5,
  inventory:[tools.sword.name,tools.pickaxe.name,tools.axe.name,tools.shovel.name,tools.hoe.name],
  skin:"default"
}
for(i=0;i<player.inventory.length;i++){
  console.log(player.inventory[i])
}
console.log("Sword",tools.sword.material) 



var aluno = {
  nome:"Pedro",
  notas:[10,9],
  media: function(n1,n2){
    return ((this.notas[0]+this.notas[1])/2)
  }
  
}

console.log(aluno.media()); */

function criar_armas(nome,dano,raridade){

  return{
    nome: nome,
    dano:dano,
    raridade:raridade
  }

}


var armas=[
  criar_armas("espada",15,"Incomum"),
  criar_armas("faca",7,"Comum"),
  criar_armas("soco_inglês",5,"Incomum"),
  criar_armas("marreta",9,"Comum"),
  criar_armas("culé de pedreiro",999,"Lendário"),
  criar_armas("machete",17,"Incomun"),
  criar_armas("desenpeno",670,"Epico"),
  criar_armas("Bojão de Gáis",17,"Raro"),
  criar_armas("Nivel","∞","IMORTAL")



]

armas.forEach(function(i){
  console.log(i);
})


let hora = new Date();
console.log(hora);