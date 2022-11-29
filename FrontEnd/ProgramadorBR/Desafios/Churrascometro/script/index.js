 let div = document.querySelector("div.res") 
 document.querySelector("button.btn").addEventListener("click",barbecue);

 let items = {
  meat:400, //g
  beer:1200, //ml
  drinks:1000 //ml
}

  function barbecueCalculator(adults,children,time){
    console.log("Calulando...")
    if(time >=6 ){
      items.meat = 650;
      items.beer = 2000;
      items.drinks = 1500;

      var totalOfMeat = ((items.meat * adults) + ((items.meat/2) * children));
      var totalOfBeer = (items.beer * adults);
      var totalOfDrinks = ((items.drinks * adults) + ((items.drinks/2) * children));
     }

      var totalOfMeat = ((items.meat * adults) + ((items.meat/2) * children));
      var totalOfBeer = (items.beer * adults);
      var totalOfDrinks = ((items.drinks * adults) + ((items.drinks/2) * children));
     
    div.innerText=`${totalOfMeat/1000} KG de Carne
    ${Math.ceil(totalOfBeer/355)} Latas de Cerveja
    ${Math.ceil(totalOfDrinks/2000)} Garrafas de 2L de Bebida
    `

  }
  function barbecue(){
    let variables = [
      adults = Number(document.querySelector("input.adults").value),
      children = Number(document.querySelector("input.children").value),
      time = Number(document.querySelector("input.time").value)

    ]
   barbecueCalculator(variables[0],variables[1],variables[2]);
  }
  
/*function createHTML(){
  let div = document.body.innerHTML='<div class="container"><h1>Churrascômetro</h1><input type="number" class="adults input-std" placeholder="Adultos"><input type="number" class="children input-std" placeholder="Crianças"><input type="number" class="time input-std" placeholder="Duração"><input type="button" class="bbc-btn input-std" value="Calcular"></div>'
}*/

