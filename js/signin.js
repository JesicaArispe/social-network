$(document).ready(function (){

    $("#btn-signin").click(function(){
        var nya="jesica";
        var email="jess@php";
        var contraseña="comit";
        var confContraseña="comit";
        var inputNya=$("#login-nombre").val();
        var inputEmail=$("#login-email").val();
        var inputContraseña=$("#login-contraseña").val();
        var inputConfContraseña=$("#confirmar-contraseña").val();
        
        if (inputNya === "" && inputEmail ===""&& inputContraseña ==="" && inputConfContraseña ===""){
            alert("Por favor complete todos los campos ");
        }
        else {
            alert("Te registraste con exito")
        }

    });
});
