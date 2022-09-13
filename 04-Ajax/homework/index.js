$('#boton').click(function(){
    $.get('http://localhost:5000/amigos', function(data){
        $("#lista").empty()
        data.forEach(element => {
            $(`<li id="${element.id}">${element.name}</li>`).appendTo('#lista')
        });
    })
})

$('#search').click(function(){
    let input = document.getElementById('input').value
    $.get(`http://localhost:5000/amigos/${input}`, function(data){
        $("#amigo").empty()
            $(`<p id=${data.id}>${data.name}</p>`).appendTo('#amigo');
            input=""
    })
})

$('#delete').click(function(){
    let del = document.getElementById('inputDelete').value
    let nombre
    $.get(`http://localhost:5000/amigos/${del}`, function(data){
           nombre = data.name 
    })

    $.ajax({
        url: `http://localhost:5000/amigos/${del}`,
        type: 'DELETE',
        success : function ( ) {
            $( "#success" ).append( `<p><strong>${nombre}</strong> Fue eliminado correctamente</p>` );
            
        },
    })
    del = "" 
});
