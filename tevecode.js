function jatek() {
    //Eredmény törlése
    document.getElementById("eredmeny").innerText = "";
    //input_teve beviteli mező kiolvasása //
    //ParseInt függvény szöveget számmá alakít//
    var teve_db=parseInt(document.getElementById('input_teve').value);
    //input_strucc beviteli mező kiolvasása //
    var strucc_db=parseInt(document.getElementById('input_strucc').value);
    //Ellenőrzéshez alábbi kódrészlet:
    //console.log( typeof teve_db);
    //console.log(teve_db);
    //console.log(strucc_db);

    //üres érték ellenörzése:
    if (isNaN(teve_db) || isNaN(strucc_db)) {
        alert("Hibás adat!")
    }

    if(teve_db < 5){
        alert("Ettől több teve van!")
    }

    if(teve_db > 5){
        alert("Ettől kevesebb teve van!")
    }
    if(teve_db = 5 && strucc_db == 19){
        document.getElementById("eredmeny").innerText = "Helyes! 5 teve és 19 strucc";
    }
    
}