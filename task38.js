let ime = "Bit skola"
ime = ime.toUpperCase();
ime = ime.replace("BIT", "neka");
ime = ime.substring (5, 10);


let drugoSlovo = "O";
let indexSlovaO = ime.indexOf(drugoSlovo);
console.log(ime);
console.log(indexSlovaO);

console.log(ime.length);

if (ime.length<3) {
    console.log("lozinka nije ok");
} else {
    console.log("lozinka je ok");
}
