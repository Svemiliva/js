window.addEventListener('load', main);
function main() {
    
}
//http://zadatak.singidunum.ac.rs/predmeti/osnove-html-css-js/fake-api.php
//e5ad1ee36f0d002a7aada935c62937d866dcad8764841b4ad4fa65dc624caef4
function ucitavanjeStatistike() {
    let form = new FormData();
        form.append ('key', 'e5ad1ee36f0d002a7aada935c62937d866dcad8764841b4ad4fa65dc624caef4');
        form.append ('action', 'getSaleStatistics');
        fetch ('http://zadatak.singidunum.ac.rs/predmeti/osnove-html-css-js/fake-api.php', 
        {
    method: 'POST',
    body: form
        } 
)
.then(res=> res.json())
.then (res=> {
     let app= document.getElementById('app');
     app.innerHTML= '';
    if(res.type !== 'success') {
        app.innerHTML('greska: '+ res.code);
        return;
        }
        
   app.innerHTML= 'Ukupno prodaja: ' + res.data.total_sales + '<br>'
                + 'Najmanje prodaja: ' + res.data.minimum_sold_quantity + '<br>'
                + 'Najvise prodaja: ' + res.data.maximum_sold_quantity + '<br>'
                + 'Najmanja cena: ' + res.data.minimum_sale_price + '<br>'
                + 'Najveca cena: ' + res.data.maximum_sale_price + '<br>'
                + 'Najprodavaniji artikal: ' + res.data.most_sold_article_name;
});
}
function ucitajTop10() {
    let form = new FormData();
        form.append ('key', 'e5ad1ee36f0d002a7aada935c62937d866dcad8764841b4ad4fa65dc624caef4');
        form.append ('action', 'getTopTenSales');
        fetch ('http://zadatak.singidunum.ac.rs/predmeti/osnove-html-css-js/fake-api.php', 
        {
    method: 'POST',
    body: form
        } 
)
.then(res=> res.json())
.then (res=> {
     let app= document.getElementById('app');
     app.innerHTML= '';
    if(res.type !== 'success') {
        app.innerHTML('greska: '+ res.code);
        return;
        }
        let htmlTabele = `<table>
                            <thead>
                                 <tr>
                                     <th> # 
                                     <th> Datum
                                     <th> Naziv
                                     <th> Cena
                                     <th> Kolicina
                            <tbody>
                                    `;
        for (let artikal of res.data) {
            htmlTabele += `<tr>
                                <td> ${ artikal.sale_id }
                                <td> ${ artikal.sold_at }
                                <td> ${ artikal.article }
                                <td> ${ artikal.price }
                                <td> ${ artikal.quantity }
            `; 
           
        }
   
   app.innerHTML= htmlTabele;
   
});
}
function evidentirajProdaju() {
    let datumProdaje= document.getElementById('datum_prodaje').value;
    let nazivArtikla= document.getElementById('naziv_artikla').value;
    let cenaArtikla= document.getElementById('cena_artikla').value;
    let kolicina= document.getElementById('prodata_kolicina').value;

    let form = new FormData();
        form.append ('key', 'e5ad1ee36f0d002a7aada935c62937d866dcad8764841b4ad4fa65dc624caef4');
        form.append ('action', 'storeSale');
        form.append ('sale_date', datumProdaje);
        form.append ('article_name', nazivArtikla);
        form.append ('article_price', cenaArtikla);
        form.append ('quantity', kolicina); 
     
        fetch ('http://zadatak.singidunum.ac.rs/predmeti/osnove-html-css-js/fake-api.php', 
        {
    method: 'POST',
    body: form
        } 
)
.then(res=> res.json())
.then (res=> {
     let app= document.getElementById('app');
     app.innerHTML= '';
    if(res.type !== 'success') {
        app.innerHTML('greska: '+ res.code);
        return;
        }
   
   app.innerHTML= res.data;
   
});
    
  
}