$(document).ready(function() {

    $(".btn-login").click(function() {
        
        
        var inputUsuario = $("#usuario").val();
        var inputPassword = $("#password").val();

    if (inputUsuario==="paula" &&
    inputPassword==="php2019") {
        alert ("login correcto");}
        else {
            alert ("login incorrecto");
        }
  

    });
});