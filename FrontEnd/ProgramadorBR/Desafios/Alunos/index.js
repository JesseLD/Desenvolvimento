var students = ["Pedro","Jose","Paulo"];
var first_grade = [5,7,10];
var second_grade = [6,8,9];
var average =[]

function average_calc(g1,g2){
  return (g1+g2)/2;
}
function passed_on(average_pass){

  
  result = "Not Approved!, :-("

  if(average_pass > 6.9){
    result = "Appoved! :-)"
  }
  return result;
}

console.log("ALUNO - NOTA 1 - NOTA 2 - MEDIA - APROVADO?");
for(i=0;i<students.length;i++){
  average[i]=average_calc(first_grade[i],second_grade[i])

  console.log(students[i] + "   - " +
   first_grade[i] + "      - " + 
   second_grade[i] + "    -  " + 
   average[i] + "  - " +
   passed_on(average[i]) );
}
