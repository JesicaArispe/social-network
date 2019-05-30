$(document).ready(function() {
    $("#button-post").click(function() {
        $("#muro").append(
          '<div class="mi-post card col-12 col-lg-12 offset-3 offset-lg-0">'+ 
        
          '<div class="card-body">'+
    
          '<p class="card-text">'+
          
          $("#post-personal").val()+
          '</p>'+
          '</div>'+
          '</div>' 
        );
    });

});