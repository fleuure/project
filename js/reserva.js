function saveReserva() {
    newData = [];
    dataReserva = [];
    const FORM_NAME = document.getElementById("fname").value;
    dataReserva[0] = FORM_NAME;
    const FORM_DATA = document.getElementById("calendario").value;
    newData = FORM_DATA.split("-");
    newData = toString(newData[2]) + "/" + toString(newData[1]) + "/" + toString(newData[0]);
    dataReserva[1] = FORM_DATA;
    console.log(newData);
    const FORM_HORA = document.getElementById("hora").value;
    dataReserva[2] = FORM_HORA;
    const FORM_QUAN = document.getElementById("quantity").value;
    dataReserva[3] = FORM_QUAN;
    table = sessionStorage.getItem("table");
    if(table == null){
        table = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    }
    dataReserva[4] = table;
    sessionStorage.setItem("infoMesa",dataReserva);
    sessionStorage.setItem("hasFinishReservar",true);
}