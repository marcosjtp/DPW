function sumar() {
    var v1;
    var v2;
    var v3;
    var v4;
    var v5;
    var v6;
    var v7;
    var v8;
    document.getElementsByClassName("res").disabled = true;

    v1 = (document.getElementById("b1").value) * 1;
    v2 = (document.getElementById("b5").value) * 5;
    v3 = (document.getElementById("b10").value) * 10;
    v4 = (document.getElementById("b20").value) * 20;
    v5 = (document.getElementById("b25").value) * 25;
    v6 = (document.getElementById("b50").value) * 50;
    v7 = (document.getElementById("b100").value) * 100;
    v8 = (document.getElementById("b200").value) * 200;
    v9 = (document.getElementById("b500").value) * 500;
    v10 = (document.getElementById("b1000").value) * 1000;
    v11 = (document.getElementById("b2000").value) * 2000;


    document.getElementById("resulb1").value = v1;
    document.getElementById("resulb5").value = v2;
    document.getElementById("resulb10").value = v3;
    document.getElementById("resulb20").value = v4;
    document.getElementById("resulb25").value = v5;
    document.getElementById("resulb50").value = v6;
    document.getElementById("resulb100").value = v7;
    document.getElementById("resulb200").value = v8;
    document.getElementById("resulb500").value = v9;
    document.getElementById("resulb1000").value = v10;
    document.getElementById("resulb2000").value = v11;

    document.getElementById("result").value = v1 + v2 + v3 + v4 + v5 + v6 + v7 + v8 + v9 + v10 + v11;

}

function borrar() {
    document.getElementById("b1").value;
    document.getElementById("b5").value;
    document.getElementById("b10").value;
    document.getElementById("b20").value;
    document.getElementById("b25").value;
    document.getElementById("b50").value;
    document.getElementById("b100").value;
    document.getElementById("b200").value;
    document.getElementById("b500").value;
    document.getElementById("b1000").value;
    document.getElementById("b2000").value;
    document.getElementById("resulb1").value = "";
    document.getElementById("resulb5").value = "";
    document.getElementById("resulb10").value = "";
    document.getElementById("resulb20").value = "";
    document.getElementById("resulb25").value = "";
    document.getElementById("resulb50").value = "";
    document.getElementById("resulb100").value = "";
    document.getElementById("resulb200").value = "";
    document.getElementById("resulb500").value = "";
    document.getElementById("resulb1000").value = "";
    document.getElementById("resulb2000").value = "";
    document.getElementById("result").value = "";


}