var arrayDataPage = [];

//=============================================================page management=====================================================================
function savePage(Page){
    sessionStorage.setItem("Page", Page);
}

function paginaDestino(){
    destination = sessionStorage.getItem("Page");
    savePage(pathCut(window.location.href));
    return location.href = destination
}

function destinoHome(){
    x = pathCut(window.location.href);
    savePage(x);
    if (x == "pedidoFinal.html"){
        sessionStorage.clear();
    }
    return location.href = "home.html"
}

//-------------------------------------------------menus
function destinoPedirPratos(){
    savePage(pathCut(window.location.href));
    return location.href = "menuPratos.html"
}

function destinoPedirEntradas(){
    savePage(pathCut(window.location.href));
    return location.href = "menuEntradas.html"
}

function destinoPedirSobremesas(){
    savePage(pathCut(window.location.href));
    return location.href = "menuSobremesas.html"
}

function destinoPedirBebidas(){
    savePage(pathCut(window.location.href));
    return location.href = "menuBebidas.html"
}

function destinoPedirOutros(){
    savePage(pathCut(window.location.href));
    return location.href = "menuOutros.html"
}

//------------------------------------------------------

function destinoOptions(){
    sessionStorage.setItem("hasFinishedPedido", true);
    savePage(pathCut(window.location.href));
    return location.href = "options.html"
}

function destinoPedir(){
    savePage(pathCut(window.location.href));
    return location.href = "finalizarPedido.html"
}

function destinoFinal(){
    savePage(pathCut(window.location.href));
    return location.href = "pedidoFinal.html"
}

function destinoPessoas(){
    savePage(pathCut(window.location.href));
    return location.href = "divisaoDePagamentos.html"
}

function destinoReservar(){
    savePage(pathCut(window.location.href));
    return location.href = "reservarMesa.html"
}

function destinoEspaco(){
    savePage(pathCut(window.location.href));
    return location.href = "consultaEspaco.html"
}

function destinoFinalizarReserva(){
    savePage(pathCut(window.location.href));
    sessionStorage.setItem("hasFinishPagar", true);
    return location.href = "finalizarReservaPedido.html"
}

function destinoVerifyPag(){
    const RB_PAGAMENTO_MB = document.getElementById("MBWay")
    const RB_PAGAMENTO_MULTI = document.getElementById("multibanco")
    if(RB_PAGAMENTO_MB.checked){
        destinoPessoas();
    }
    else if(RB_PAGAMENTO_MULTI.checked){
        console.log("MULTI");
    }
    else{
        console.log("PayPal");
    }
}

function pathCut(path){
    var splitPath = path.split("");
    var pos = 0;
    var newPath = []
    splitPath = splitPath.reverse();
    while(splitPath[pos] != "/"){
        newPath[pos] = splitPath[pos];
        pos++;
    }
    newPath.reverse();
    newPath = newPath.join("");
    return newPath
}

function verifyPageInfo(){
    isNull = 0;
    pageLine = sessionStorage.getItem("pageLine");
    if(pageLine == null){
        savePage(pathCut(window.location.href));
        return location.href = "options.html";
        //goNextPage(pathCut(window.location.href));
    }
    else{
        pageLine = pageLine.split(",");
        for (i = 0; i < pageLine.length; i++){
            if(pageLine[i] == ''){
                pageLine[i] = null;
                isNull++;
            }
        }
    }

    if(isNull == 3){
        savePage(pathCut(window.location.href));
        return location.href = "finalizarReservaPedido.html";
    }
    else{
        for(i = 0; i < pageLine.length; i++){
            if(pageLine[i] != null){
                nextPage = pageLine[i];
                pageLine[i] = null;
                sessionStorage.setItem("pageLine",pageLine);
                return location.href = nextPage;
            }
        }
    }
}
//=================================================================================================================================================