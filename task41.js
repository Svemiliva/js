let niz = [3, 15, 25, "23", 13, 1.125, "ok"];
niz.push ("novi element");
niz.pop ();
let izbacenaVrednost = niz.pop ();

niz.unshift("x");
niz.shift();

let pronadjeniInex = niz.indexOf("23");
niz.splice (3, 3);
niz.splice (2, 0, "a", "b", "c");

let noviNiz = ["m", "n", 34];

niz = niz.concat(noviNiz);

niz = niz.slice(2, 5);
niz = niz.toString();

console.log(niz)
let nizNovi = [1,2,3];
let nizJoin = nizNovi.join("*");
console.log(nizJoin);
