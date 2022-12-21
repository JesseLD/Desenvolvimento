let alunos = [
  criarAluno("Pedro",27),
  criarAluno("Joao",30),
  criarAluno("Maria",24),
  criarAluno("Lucas",22),
  criarAluno("Jose",34)

]

let veiculos = [

  criarCarro(1.4)

]
console.log(veiculos.motor);


function map(){

}

function criarCarro(motor){

  return{
    motor
  }
}

function criarAluno(nome,idade){
  return{
    nome,idade
  }
}

function ageSum(total,aluno){
  return total + aluno.idade;
}


function reduce1(value1,value2){
  
  return console.log(value1 + value2);
}

function reduce1(value,func,startingValue){
  func()
  console.log(func());
  
}





// console.log(reduce1(alunos.idade,ageSum,0));

console.log(alunos.reduce(ageSum,0));