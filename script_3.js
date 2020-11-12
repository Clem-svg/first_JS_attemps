yourNumber = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")

function pyramid(n) {

  for(let i=1; i<= n; i++){

    let space = ' '.repeat(n-i);

    let floor = '#'. repeat(i)


    console.log(space + floor);

  }

}

console.log(pyramid(yourNumber))

