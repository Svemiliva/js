

function sumaDvaBroja(prviBroj=0, drugiBroj=0) {
    let suma = prviBroj + drugiBroj;
    return suma;
}
    console.log(sumaDvaBroja(13, 11));

    function sumaBrojeva() {
        let suma = 0;
        for (let broj of arguments) {
            suma += broj;
            
        }
        return suma
    }

    console.log(sumaBrojeva(3,9,11,21,6));

    var sumaBroj = function () {
    let suma= 0;
    for(let b of arguments){
        suma += b
    }
    return suma;
    };


    console.log(sumaBroj (2,3,4));

    var sumaNecega = (br1=0, br2=0) => br1 + br2;
    

    console.log(sumaNecega(1,2));

    var minDvaBroja = (a,b)=> {
        if (a<b){
            return a
        }return b
    }
    console.log(minDvaBroja(20,3));