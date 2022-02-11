window.addEventListener( "load", main)
function main() {
    let text= document.getElementById("text")
    let lista = [];
    let broj = 4;
    for (let i = 0; i < 10; i++) {
        broj += broj - 3;
        lista.push(broj)
    }
    let jsonLista = JSON.stringify(lista);
    text.innerText = jsonLista
}