yourSentence = prompt('Wesh, tu veux quoi ?'); //teste avec plusieurs valeurs


switch (true) {

  case yourSentence[yourSentence.length-1] === "?":
    console.log("Ouais Ouais...");
    break;
  case yourSentence == yourSentence.toUpperCase() && yourSentence.length > 0:
    console.log("Tu te calmes");
    break;
  case yourSentence.includes("fortnite"):
    console.log("On s'fait une partie soum-soum ?");
    break;
  case !yourSentence:
    console.log("T'es en PLS ?");
    break;

  default:
    console.log("Balec en fait");
  break;


}