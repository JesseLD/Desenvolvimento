var materials={
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
    name:"Piackaxe",
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
  inventory:[tools.sword.name,tools.axe],
  skin:"default"
}
for(i=0;i<2;i++){

}