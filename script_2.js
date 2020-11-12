let inputNumber = prompt("Donne un nombre et nous calculerons sa factorielle");
inputNumber = Number(inputNumber)

function fact(nbr) 
{

  if (nbr === 0)
  {
     return 1;
  }

  return nbr * fact(nbr-1);
}
console.log(fact(inputNumber));