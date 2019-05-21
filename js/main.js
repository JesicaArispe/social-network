$(document).ready(function () {

    $("#button-post").click(function () {
        $("#post").append(
            '<div class="post-estado">' +
            // '<input class="form-control" id="postear" type="text" placeholder="Post Estado">' +
            '</div>' +
            $("#postear").val() +
            '<ul class="nav nav-pills nav-justified">' +
            '<li class="nav-item">' +
            '<a class="nav-link" href="#!">Me gusta</a>' +
            '</li>' +
            '<li class="nav-item">' +
            '<a class="nav-link" href="#!">Comentar</a>' +
            '</li>' +
            '<li class="nav-item">' +
            '<a class="nav-link" href="#!">Compartir</a>' +
            '</li>' +
            '</ul>' +
            '<br></br>'

        )
    })

})
