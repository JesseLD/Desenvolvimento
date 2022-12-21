

//Arrow Functions

// let dobro = x => console.log(2*x);

//Callbacks


// let users =[
//   "Joao",
//   "Maria",
//   "Pedro",
//   "Jose"
// ]

// function insertUser(newUser,callback){

//   setTimeout(() => {
//     users.push(newUser)
//     callback();
//   },1000)
// }


// function printUsers(){
//   console.log(users);
// }

// insertUser("Jessé",printUsers);

//Promisses

// let users =[
//   "Joao",
//   "Maria",
//   "Pedro",
//   "Jose"
// ]

// function insertUser(newUser){


//   let promise = new Promise(function(resolve,reject){

//     setTimeout(() => {
//       users.push(newUser)

//       let error = true;

//       if(!error){
//         resolve()
//       }else{
//         reject({msg:"msg de erro skskskskks"})
//       }

//     },1000)

//   });

//   return promise;
// }

// function printUsers(){
//   console.log(users);
// }

// insertUser("Jessé").then(printUsers).catch((error)=>{
//   console.log(error)
// });


//exercicio callback e promise

/*
  a pessoa adiciona um contato
   e depois de 2s o contato e salvo no celular

*/

// let agenda = [
//   "pessoa1",
//   "pessoa2",
//   "pessoa3"
// ]


// function criarContato(nome){

//   let promise = new Promise(function(resolve,reject){

//     setTimeout(() => {
//       agenda.push(nome)

//       const error = false

//       if(!error){
//         resolve()
//       }else{
//         reject()
//       }

//     }, 2000);

//   });

  
//   return promise

// }
// function mostrarContatos(){
//   return console.log(agenda);
// }

// async function exec(){
//   await criarContato("Jesse");
//   mostrarContatos()

// }

// exec();

//map

// function criarPessoa(nome,idade){
//   return {nome, idade}
// }

// let pessoas = [
//   criarPessoa("José",25),
//   criarPessoa("Marcos",30),
//   criarPessoa("Pedro",29),
//   criarPessoa("Maria",32)

// ]

// function map(funct,v2){  
//   let temp=[]
//   for(v2 of v2){
//     // console.log(funct(v2))
//     temp.push(funct(v2))
//   }
//   console.log(temp)
// }

// function nomeEIdade(pessoas){
    
//     return `${pessoas.nome} tem ${pessoas.idade} anos`
    
// }

// map(nomeEIdade,pessoas);
// console.log(map.temp);
