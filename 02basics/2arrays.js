const marvel_Heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

// marvel_Heros.push(dc_heros)//it push whole array as a single element

// console.log(marvel_Heros);
// console.log(marvel_Heros[3][2]);

const allHeros= marvel_Heros.concat(dc_heros) //gives same output
console.log(allHeros);

const all_heros=[...marvel_Heros,...dc_heros]
console.log(all_heros);

console.log(Array.isArray("syed"));
console.log(Array.from("syed"));
console.log(Array.from({name:"syed"}));//interesting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
