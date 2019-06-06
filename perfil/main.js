$(document).ready(function() {
    $("#button-post").click(function() {
        $("#muro").append(
        '<div>'+
          '<div class="mi-post card col-12 col-lg-12 offset-3 offset-lg-0">' + 
        
             '<div class="card-body">' +
    
               '<p class="card-text">'+
                $("#post-personal").val()+
              '</p>' +

            '</div>' +
          '</div>'+
            '<button id="eliminar" type="button" class="col-2 offset-10 btn btn-outline-warning">eliminar</button>' +
        '</div>'
        );
    });
  });
