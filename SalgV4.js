const Salgslog  = [];
const shoppingBag = [0,0,0,0,0,0,0];
const itemPrices = [6,6,6,16,16,16];
const Salg = [];

var csvFileData = [Salgslog];

//define the heading for each row of the data  
//var csv= 'Vare,Antal,Dato\n';

var csv="";

function saveData(brand,number,serial,Pris) {
    if(number>0){
        shoppingBag[serial] += number;
        shoppingBag[6] += Pris;
        }   
    else{
        if(shoppingBag[serial]>0){
            shoppingBag[serial] += number;
            shoppingBag[6] += Pris;
        }  
    }

    console.log(shoppingBag)
    UpdateText();
    }


function UpdateText() {
    //Visning af Vare selection
    document.getElementById("Cola-Counter").innerText = shoppingBag[0];
    document.getElementById("ColaZ-Counter").innerText = shoppingBag[1];
    document.getElementById("Faxe-Counter").innerText = shoppingBag[2];
    document.getElementById("SCOC-Counter").innerText = shoppingBag[3];
    document.getElementById("AGC-Counter").innerText = shoppingBag[4];
    document.getElementById("BBQ-Counter").innerText = shoppingBag[5];


    //Visning af shoppingbag
    document.getElementById("ColaBagAmount").innerHTML = "x"+shoppingBag[0];
    document.getElementById("ColaZBagAmount").innerHTML = "x"+shoppingBag[1];
    document.getElementById("FaxeBagAmount").innerHTML = "x"+shoppingBag[2];
    document.getElementById("SCOCBagAmount").innerHTML = "x"+shoppingBag[3];
    document.getElementById("AGCBagAmount").innerHTML = "x"+shoppingBag[4];
    document.getElementById("BBQBagAmount").innerHTML = "x"+shoppingBag[5];

    //Visning af shoppingbag priser
    document.getElementById("ColaBagPrice").innerHTML = shoppingBag[0] * itemPrices[0]+" kr.";
    document.getElementById("ColaZBagPrice").innerHTML = shoppingBag[1] * itemPrices[1]+" kr.";
    document.getElementById("FaxeBagPrice").innerHTML = shoppingBag[2] * itemPrices[2]+" kr.";
    document.getElementById("SCOCBagPrice").innerHTML = shoppingBag[3] * itemPrices[3]+" kr.";
    document.getElementById("AGCBagPrice").innerHTML = shoppingBag[4] * itemPrices[4]+" kr.";
    document.getElementById("BBQBagPrice").innerHTML = shoppingBag[5] * itemPrices[5]+" kr.";

    document.getElementById("totalPrice").innerText = shoppingBag[6]+" kr.";

    //Checks if buttons should be disabled

    //Save/clear buttons
    if (shoppingBag[6] >= 1) {
        document.getElementById("clearBTN").classList.remove("deactive");
        document.getElementById("saveBTN").classList.remove("deactive");
    }
    else if (shoppingBag[6] == 0) {
        document.getElementById("clearBTN").classList.add("deactive");
        document.getElementById("saveBTN").classList.add("deactive");
    }

    //Minus button & shopping bag

    if (shoppingBag[0] >= 1) {
        document.getElementById("cola-minus").classList.remove("deactive");
        document.getElementById("cola-bag").classList.remove("deactive");
    } else { 
        document.getElementById("cola-minus").classList.add("deactive");
        document.getElementById("cola-bag").classList.add("deactive");
    }
    
    if (shoppingBag[1] >= 1) {
        document.getElementById("colaZ-minus").classList.remove("deactive");
        document.getElementById("colaZ-bag").classList.remove("deactive");
    } else {
        document.getElementById("colaZ-minus").classList.add("deactive");
        document.getElementById("colaZ-bag").classList.add("deactive");
    }

    if (shoppingBag[2] >= 1) {
        document.getElementById("faxe-minus").classList.remove("deactive");
        document.getElementById("faxe-bag").classList.remove("deactive");
    } else {
        document.getElementById("faxe-minus").classList.add("deactive");
        document.getElementById("faxe-bag").classList.add("deactive");
    }

    if (shoppingBag[3] >= 1) {
        document.getElementById("SCOC-minus").classList.remove("deactive");
        document.getElementById("SCOC-bag").classList.remove("deactive");
    } else { 
        document.getElementById("SCOC-minus").classList.add("deactive");
        document.getElementById("SCOC-bag").classList.add("deactive");
    }

    if (shoppingBag[4] >= 1) {
        document.getElementById("AGC-minus").classList.remove("deactive");
        document.getElementById("AGC-bag").classList.remove("deactive");
    } else {
        document.getElementById("AGC-minus").classList.add("deactive");
        document.getElementById("AGC-bag").classList.add("deactive");
    }

    if (shoppingBag[5] >= 1) {
        document.getElementById("BBQ-minus").classList.remove("deactive");
        document.getElementById("BBQ-bag").classList.remove("deactive");
    } else {
        document.getElementById("BBQ-minus").classList.add("deactive");
        document.getElementById("BBQ-bag").classList.add("deactive");
    }


}



//Logging af ShoppinBag data til Salgslog
function SaveOrder() {
    const d = new Date();
    if(shoppingBag[6] <= 0) { return; }
    

    //Drikkevarer
    if(shoppingBag[0]>0){
        Salgslog.push("CocaCola" + "," + shoppingBag[0] + "," + d.getHours()+":"+d.getMinutes());
    }

    if(shoppingBag[1]>0){
        Salgslog.push("CocaZero" + "," + shoppingBag[1] + "," + d.getHours()+":"+d.getMinutes());
    }

    if(shoppingBag[2]>0){
        Salgslog.push("FaxeKondi" + "," + shoppingBag[2] + "," + d.getHours()+":"+d.getMinutes());
    }

    //Snacks

    if(shoppingBag[3]>0){
        Salgslog.push("SCAO" + "," + shoppingBag[3] + "," + d.getHours()+":"+d.getMinutes());
    }

    if(shoppingBag[4]>0){
        Salgslog.push("AmericanGrill" + "," + shoppingBag[4] + "," + d.getHours()+":"+d.getMinutes());
    }

    if(shoppingBag[5]>0){
        Salgslog.push("Barbecue" + "," + shoppingBag[5] + "," + d.getHours()+":"+d.getMinutes());
    }

    console.log(Salgslog);

    alert("Ordrer gemt!")

    download_csv_file();
    ClearOrder();
}

//Reset ShoppingBag
function ClearOrder() {
    for (let i = 0; i < shoppingBag.length; i++) {
        shoppingBag[i] = 0;
    }
    UpdateText();
      
}



//create a user-defined function to download csvfile   
function download_csv_file() {    

    //merge the data with csv 
    csvFileData.forEach(function(row) {  
        csv += row.join(",\n");  
        csv += ",\n"; 
    });  
    //Getting Ready for server-side saving with php
        let date = new Date();

        let file_name = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+".csv";

    jsonString = JSON.stringify(csv);
    $.ajax({
        url: 'php/save.php',
        type: 'POST',
        dataType: 'json',
        data : {'jsonString':csv, 'file_name': file_name}
    });

    UpdateCSVDownload(file_name);

    csv="";
    Salgslog.splice(0,Salgslog.length);
    
}


function UpdateCSVDownload(file_name) {
    document.getElementById("downloadBTN").href="/logs/"+file_name;
    console.log(file_name);
}