$(document).ready(function(){
    $(".q").focus()
    $(".agregar").click(function() {
	var q = $(".q").val();
	$.ajax({ // ajax call starts
	    url: '/tpv/operaciones/listado.json', // JQuery loads query generated json
	    data: 'q=' + $(".q").val(), // Send value of the clicked button
	    dataType: 'json', // Choosing a JSON datatype
	    success: function(data) // Variable data contains the data we get from serverside
	    {
		for (var i in data.listado) { // this must be a while loop instead with a flag
		    if (data.listado[i].id == q)
		    {
			var tr=$('<tr></tr>');
			$('<td></td>').appendTo(tr);
			$('<td>'+data.listado[i].nombre+'</td>').appendTo(tr);
			$('<td>'+data.listado[i].precio+'</td>').appendTo(tr);
			$('<td></td>').appendTo(tr);
		        tr.appendTo('.table');
			tr.addClass(data.listado[i].id)
		    }
		}
	    }
	});
	$(".q").val("");
	$(".q").focus();
	$(".total").text('3434,34');
	return false; // keeps the page from not refreshing 
	
    });
});
