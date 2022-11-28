 let div = document.querySelector("div.res") 
 document.querySelector("button.btn").addEventListener("click",barbecue);

  // function barbecueCalculator(adults,children,time){
  //  let totalOfMeat = (adults*items.meat)*time + ((children*items.meat)/2)*time;

  //  let totalOfBeer = (adults*items.beer)*time;
   
  //  let totalOfDrinks = (adults*items.drinks)*time + ((children*items.drinks)/2)*time;

  //   return finalBarbecue = {
  //     t_meat:totalOfMeat,
  //     t_beer:totalOfBeer,
  //     t_drinks:totalOfDrinks
  //   }

  // }

  function barbecueCalculator(adults,children){
    let totalOfMeat = (adults*items.meat) + ((children*items.meat)/2);
 
    let totalOfBeer = (adults*items.beer);
    
    let totalOfDrinks = (adults*items.drinks)+ ((children*items.drinks)/2);
 
     return finalBarbecue = {
       t_meat:totalOfMeat,
       t_beer:totalOfBeer,
       t_drinks:totalOfDrinks
     }
 
   }

  let items = {
    meat:0.400, //g
    beer:1200, //ml
    drinks:1000 //ml
  }


  function barbecue(){
    let variables = [
      adults = Number(document.querySelector("input.adults").value),
      children = Number(document.querySelector("input.children").value),
      time = Number(document.querySelector("input.time").value)

    ]
    // console.log(barbecueCalculator(variables[0],variables[1],variables[2]));
    // let result = barbecueCalculator(variables[0],variables[1],variables[2]);
    console.log(barbecueCalculator(variables[0],variables[1]));
    let result = barbecueCalculator(variables[0],variables[1]);
   
  console.log(result)

    div.innerText=`${(result.t_meat.toFixed(3))} KG de carne
    ${(Math.floor((result.t_beer)/1000))} Latas de Cerveja
    ${(result.t_meat.toFixed(3))} KG de carne
    `
  }
  




/*function createHTML(){
  let div = document.body.innerHTML='<div class="container"><h1>Churrascômetro</h1><input type="number" class="adults input-std" placeholder="Adultos"><input type="number" class="children input-std" placeholder="Crianças"><input type="number" class="time input-std" placeholder="Duração"><input type="button" class="bbc-btn input-std" value="Calcular"></div>'
}*/

