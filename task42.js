window.addEventListener ("load", main);
function main() {
    let holder = document.getElementById("holder");
    holder.style.border = "2px solid black";
    holder.style.minHeight= "250px";
    holder.innerHTML= "Ovo je <b>neki<b/> text";

    let naslov = document.createElement ("h1");
    naslov.style.color = "#001188";
    naslov.style.borderBottom = "2px solid #001188";
    naslov.innerText = "OVO JE KAO NEKI NASLOV";
    holder.appendChild(naslov);

    let paragraf = document.createElement("p");
    paragraf.style.textAlign = "center";
    paragraf.innerText= "paragraf je ovo";
    holder.appendChild(paragraf);

    let paragraf2 = document.createElement("p");
    paragraf2.style.textAlign = "center";
    paragraf2.innerText= "paragraf je ovo drugi";
    holder.appendChild(paragraf2);

    let paragraf3 = document.createElement("p");
    paragraf3.style.textAlign = "center";
    paragraf3.innerText= "paragraf je ovo treci";
    holder.appendChild(paragraf3);

    let dugme= document.createElement("button");
    dugme.innerText= ("izvrsi funkciju");
    dugme.addEventListener("click", dugmeClick);
    holder.appendChild(dugme);
    function dugmeClick() {
        let holder = document.getElementById("holder");
        let paragrafi = holder.querySelectorAll("p");
        let drugiParagraf = paragrafi[1];
        drugiParagraf.style.color = "red";
        // document.querySelectorAll ("#holder > p")[1].style.color = "red";
        
    }
    let dugme2= document.createElement("button");
    dugme2.innerText= ("remove");
    holder.appendChild(dugme2);
    dugme2.addEventListener("click", remove);
    function remove() {
        let holder = document.getElementById("holder");
        let paragrafi = holder.querySelectorAll("p");
        for (let paragraf of paragrafi){
            holder.removeChild(paragraf)
        }
        
    }
    

}