var listaPratos = [];

var nomePratos = [];

var dict = {
    "Entrada1": ["Couvert","5","3"],
    "Entrada2": ["Burrata e Tomates ao Pesto","5","10"],
    "Entrada3": ["Guacamole","5","6"],
    "Entrada4": ["Creme de Legumes","10","4"],
    "Entrada5": ["Tacos de Camarão ","10","12"],
    "Entrada6": ["Tacos de Jaca","10","12"],
    "Prato1": ["Massa à Bolonhesa","15","11"],
    "Prato2": ["Francesinha","20","13"],
    "Prato3": ["Pato com Pinhões, abacate e Laranja","15","15"],
    "Prato4": ["Salmão com Legumes.","15","12"],
    "Prato5": ["Lasanha de Abóbora, Ricotta e Espinafres","15","11"],
    "Prato6": ["Caril Picante de Tofu","15","13"],
    "Sobremesa1": ["Tiramisu","5","5"],
    "Sobremesa2": ["Bavaroise de Chocolate e Framboesas","5","6"],
    "Sobremesa3": ["Brownie","5","5"],
    "Sobremesa4": ["Cheesecake","5","4"],
    "Sobremesa5": ["Torta de limão","5","4"],
    "Sobremesa6": ["Arroz doce","5","4"],
    "Bebidas1": ["Sumo de Laranja","5","2"],
    "Bebidas2": ["Sumo de Limão","5","2"],
    "Bebidas3": ["Sumo de Frutas Vermelhas","5","2"],
    "Bebidas4": ["Coca-Cola","0","2"],
    "Bebidas5": ["Água","0","2"],
    "Bebidas6": ["Água Com Gás","0","2"]

}

window.onload = getData();

function getData(){
    allKeys = Object.keys(sessionStorage);
    oneTime = false;

    for(i = 0; i < allKeys.length; i++){
        dataValue = sessionStorage.getItem(allKeys[i]);
        sepIdx =  dataValue.indexOf('/');
        newDataPlate = dataValue.split("/");
        if(sepIdx >= 0){
            listaPratos.push(newDataPlate);
            oneTime = true;
        }
    }

    if(oneTime == false){
        document.getElementById("tempo").innerHTML = "XX";
        document.getElementById("preco").innerHTML = "XX";
    }
    else {
        newPratos = [];
        for(i = 0; i < listaPratos.length; i++){
            newPratos[i] = listaPratos[i];
        }
        getDictTime(newPratos);
        getDictPrice(newPratos);
        getDictName(newPratos);
    }
}

function getDictName(Pratos){
    for(i = 0; i < Pratos.length; i++){
        dictData = dict[Pratos[i][0]];
        dictNome = dictData[0];
        Pratos[i][0] = dictNome;
    }

    Pratos.sort(function(a,b){return a[0].localeCompare(b[0]);});

    const LIST_GROUP = document.querySelectorAll('.list-group-item');
    LIST_GROUP.forEach(listG =>{listG.remove();})
    for(i = 0; i < Pratos.length; i++){
        const DIV_LIST = document.createElement("a");
        DIV_LIST.classList.add("list-group-item","w-100");
        DIV_LIST.setAttribute("id", Pratos[i][1]);
        DIV_LIST.textContent = Pratos[i][0];

        const DIV_LISTA_PRATOS = document.getElementById("list-Pratos");
        DIV_LISTA_PRATOS.appendChild(DIV_LIST);
    }
}

function getDictTime(Pratos){
    countTempo = 0;
    for(i = 0; i < Pratos.length; i++){
        dictData = dict[Pratos[i][0]];
        dictTempo = dictData[1];
        countTempo += parseInt(dictTempo);
    }
    document.getElementById("tempo").innerHTML = countTempo;
}

function getDictPrice(Pratos){
    countPreco = 0;
    for(i = 0; i < Pratos.length; i++){
        dictData = dict[Pratos[i][0]];
        dictPreco = dictData[2];
        countPreco += parseInt(dictPreco);
    }
    document.getElementById("preco").innerHTML = countPreco;
}

function getPlateValue(value){
    dictKeys = Object.keys(dict);
    for(i = 0; i < dictKeys.length; i++){
        if(dict[dictKeys[i]][0] == value){
            return dictKeys[i]
        }
    }
}

function getKeySessionStorage(value){
    allKeys = Object.keys(sessionStorage);
    for (i = 0; i < allKeys.length; i++){
        if(sessionStorage.getItem(allKeys[i]) == value){
            return allKeys[i]
        }
    }
}
