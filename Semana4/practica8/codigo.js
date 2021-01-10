function suma() {

    var num1;
    var num2;
    var resultado;
    
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    
    resultado = parseInt(num1) + parseInt(num2);
    document.getElementById("resultado").value = resultado;
    
    }
    function resta() {
        var num1;
        var num2;
        var resultado;
        num1=document.getElementById("num1").value
        num2=document.getElementById("num2").value
        resultado=parseInt(num1)-parseInt(num2);
        document.getElementById("resultado").value=resultado;
        
    }
    function multi() {
        var num1;
        var num2;
        var resultado;
        num1=document.getElementById("num1").value
        num2=document.getElementById("num2").value
        resultado=parseInt(num1)* parseInt(num2);
        document.getElementById("resultado").value=resultado;
        
    }
    function div() {
        var num1;
        var num2;
        var resultado;
        num1=document.getElementById("num1").value
        num2=document.getElementById("num2").value
        resultado=parseInt(num1)/ parseInt(num2);
        document.getElementById("resultado").value=resultado;
        
    }
    
    function borrar() {
    
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("resultado").value = "";
    
    }
    