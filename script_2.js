let yourNumber = prompt("De quel nombre veux-tu calculter la factorielle ?");


function factorial(n){

  if(n == 0 || n == 1){
      return 1;

  } else{
      return n * factorial(n-1);
  }
}
console.log('Le resultat est ' + factorial(yourNumber));
