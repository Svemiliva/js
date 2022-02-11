window.addEventListener('load', main);
function main() {
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
//http://zadatak.singidunum.ac.rs/predmeti/osnove-html-css-js/fake-api.php
//e5ad1ee36f0d002a7aada935c62937d866dcad8764841b4ad4fa65dc624caef4
