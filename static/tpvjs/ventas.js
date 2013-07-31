$(document).ready(function(){
    $(".q").focus()
    $(".agregar").click(function() {
	var q = $(".q").val();
	$.ajax({ // ajax call starts
	    url: '/tpv/operaciones/listado.json', // JQuery loads serverside.php
	    data: 'q=' + $(".q").val(), // Send value of the clicked button
	    dataType: 'json', // Choosing a JSON datatype
	    success: function(data) // Variable data contains the data we get from serverside
	    {
		for (var i in data.listado) {
		 
		    if (data.listado[i].id == q)
		    {
			
			var tr=$('<tr></tr>');
		        $('<td>'+data.listado[i].codigo+'</td>').appendTo(tr);
			$('<td>'+data.listado[i].nombre+'</td>').appendTo(tr);
			$('<td>'+data.listado[i].categoria+'</td>').appendTo(tr);
			$('<td>'+data.listado[i].precio+'</td>').appendTo(tr);
		        tr.appendTo('.table');
			tr.addClass(data.listado[i].id)
			//$('.articulos').append('articulo:  ' + data.listado[i].nombre + '<br/>');
		    }
		}
	    }
	});
	$(".q").val("");
	$(".q").focus()
	return false; // keeps the page from not refreshing 
	
    });
});
