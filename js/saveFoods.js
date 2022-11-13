var dict = new Object();
var index = 0;
var plateIndx = 0;
var contPlate = 0;
var listaPratos = [];
var tempIndx = 0;
var indexGlob = 0;

function savePlate(Prato , numIdx){
    indexGlob = sessionStorage.getItem("idxPlates");
    indexGlob++;
    sessionStorage.setItem("idxPlates", indexGlob);
    sessionStorage.setItem(Prato + "/" + index, Prato+ "/" + indexGlob);
    index++;
    tempIndx++;
    contPlate = listaPratos.length + tempIndx;
    idx = "bgMol" + numIdx;
    const BG_Modal = document.getElementById(idx);
    BG_Modal.innerHTML = contPlate;
}

function getPlateName(Prato, idx){
    allKeys = Object.keys(sessionStorage);
    listaPratos = [];
    tempIndx = 0;
    for(i = 0; i < allKeys.length; i++){
        dataValue = sessionStorage.getItem(allKeys[i]);
        dataValue = dataValue.split("").reverse().join("");
        dataValue = dataValue.slice(2);
        dataValue = dataValue.split("").reverse().join("");
        if(dataValue == Prato){
            listaPratos.push(dataValue);
        }
    }

    idx = "bgMol" + idx;
    const BG_Modal = document.getElementById(idx);
    BG_Modal.innerHTML = listaPratos.length;
}