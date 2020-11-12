
  let nbr = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

  function createStage(nbr) {
    for (let index = 1; index <= nbr; index++) {
      console.log(" ".repeat(nbr-index) + "#".repeat(index));
    }
  }
  
  createStage(nbr);