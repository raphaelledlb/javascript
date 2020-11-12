
const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];


//Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;

console.log("Voici les entrepreneurs qui sont nés dans les années 70 :");
entrepreneurs.forEach((entrepreneur) => {
    if (entrepreneur.year > 1969 && entrepreneur.year < 1980){
        console.log(entrepreneur.first + " " + entrepreneur.last);
    }
  });


//Sors une array qui contient le prénom et le nom des entrepreneurs ;
console.log("Voici les noms et prénoms des entrepreneurs :");
let name = []

entrepreneurs.forEach((entrepreneur) => {
    let names = entrepreneur.first + " " + entrepreneur.last;  
    name.push(names);
     });
console.log(name);

//Quel âge aurait chaque inventeur aujourd'hui ?
console.log("Quel âge aurait chaque inventeur aujourd'hui ?");
entrepreneurs.forEach((entrepreneur) => {
    let âgeOjd = 2020 - entrepreneur.year;
    console.log(`${entrepreneur.first + " " + entrepreneur.last} aurait ${âgeOjd} ans aujourd'hui.`);
  });


// Trie les entrepreneurs par ordre alphabétique du nom de famille.
console.log("Voici les entrepreneurs par ordre alphabétique du nom de famille :");
console.log(entrepreneurs.sort((a, b) => a.last.toLowerCase().localeCompare(b.last.toLowerCase())));



