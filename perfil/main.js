$(document).ready(function() {
    $("#button-post").click(function() {
        $("#muro").append(
          '<div class="mi-post card">'+ 
        
          '<div class="card-body">'+
    
          '<p class="card-text">'+
          $("#post-personal").val()+
          '</p>'+
          '</div>'+
          '</div>' 
        );
    });

});