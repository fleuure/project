const OPT_PEDIDO = document.getElementById("opcaoPedido");

pageList = [];

optionsList = [];

pageLine = [];

window.onload = getOptions();

function getOptions(){
    pageLine = sessionStorage.getItem("pageLine");
    for(i = 0; i < 3; i++){
        optionsList[i] = false;
    }
    if(pageLine == null){
        pageLine = [];
        for(i = 0; i < 3; i++){
            pageLine[i] = null;
        }        
    }
    else{
        pageLine = toList(pageLine);
    }

    hasFinishedPedido = sessionStorage.getItem("hasFinishedPedido");
    hasFinishReservar = sessionStorage.getItem("hasFinishReservar");
    hasFinishPagar = sessionStorage.getItem("hasFinishPagar");

    if(hasFinishedPedido == null){
        hasFinishedPedido = 'false';
    }
    if(hasFinishReservar == null){
        hasFinishReservar = 'false';
    }
    if(hasFinishPagar == null){
        hasFinishPagar = 'false';
    }

    if (hasFinishedPedido == 'true' && hasFinishReservar == 'false' &&  hasFinishPagar == 'false'){
        document.getElementById("opcaoPedido").style.visibility = "hidden";
        document.getElementById("pedidoYes 1").style.visibility = "hidden";
        document.getElementById("pedidoNo 1").style.visibility = "hidden";
    }
    else if(hasFinishReservar == 'true' && hasFinishedPedido == 'true' &&  hasFinishPagar == 'false'){
        document.getElementById("opcaoPedido").style.visibility = "hidden";
        document.getElementById("pedidoYes 1").style.visibility = "hidden";
        document.getElementById("pedidoNo 1").style.visibility = "hidden";

        document.getElementById("opcaoReservar").style.visibility = "hidden";
        document.getElementById("reservarYes 2").style.visibility = "hidden";
        document.getElementById("reservarNo 2").style.visibility = "hidden";
    }
    else if(hasFinishReservar == 'true' &&  hasFinishPagar == 'false' && hasFinishedPedido == 'false'){
        document.getElementById("opcaoReservar").style.visibility = "hidden";
        document.getElementById("reservarYes 2").style.visibility = "hidden";
        document.getElementById("reservarNo 2").style.visibility = "hidden";

        document.getElementById("opcaoPagar").style.visibility = "hidden";
        document.getElementById("pagamentoYes 3").style.visibility = "hidden";
        document.getElementById("pagamentoNo 3").style.visibility = "hidden";
    }
}

function yes(id){
    newId = id.split(" ");
    newId = parseInt(newId[1]);
    newId--;
    optionsList[newId] = true;

    if(verifyOtpions() == true){
        const MD_FINALIZAR = document.getElementsByTagName("button")[3];
        MD_FINALIZAR.removeAttribute("data-bs-toggle");
    }

    console.log(newId);
    if(newId == 0){
        pageLine[0] = 'menuPratos.html';
    }
    else if(newId == 1){
        pageLine[1] = 'reservarMesa.html';
    }
    else{
        pageLine[2] = 'formaDePagamento.html';
    }
    sessionStorage.setItem("pageLine",pageLine);
}

function no(id){
    newId = id.split(" ");
    newId = parseInt(newId[1]);
    newId--;
    optionsList[newId] = false;
    
    if(verifyOtpions() == false){
        const MD_FINALIZAR = document.getElementsByTagName("button")[3];
        MD_FINALIZAR.setAttribute("data-bs-toggle","modal");
    }

    if(newId == 0){
        pageLine[0] = null;
    }
    else if(newId == 1){
        pageLine[1] = null;
    }
    else{
        pageLine[2] = null;
    }
    sessionStorage.setItem("pageLine",pageLine);
}

function verifyOtpions(){
    for(i = 0; i < optionsList.length; i++){
        if (optionsList[i] == true){
            return true;
        }
    }
    return false;
}

function toList(string){
    newList = [];
    newList = string.split(",");
    for (i = 0; i < newList.length; i++){
        if(newList[i] == ''){
            newList[i] = null;
        }
    }
    return newList;
}