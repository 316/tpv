$(document).ready(function(){
    $(".q").focus();
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
			//Auto count quantity of sold elements
			var cuenta=$("tr#"+q).length;
			if (cuenta) //if the item already exist adds one to cant colum, so is no need for manual amount input
			{
			    var cant=$("tr#"+q+" .cant").text();
			    cant=++cant;
			    $("tr#"+q+" .cant").text(cant);
			    alert(cant);
			}
			else // when an item is inserted for first time creates a new row
			{
			    var cant=1;
			    var tr=$('<tr id="'+data.listado[i].id+'"></tr>');
			    $('<td class="cant">'+cant+'</td>').appendTo(tr);
			    $('<td>'+data.listado[i].nombre+'</td>').appendTo(tr);
			    $('<td>'+data.listado[i].precio+'</td>').appendTo(tr);
			    $('<td></td>').appendTo(tr);
		            tr.appendTo('.table');
			    
			    alert('es el primero!');
			}
			//invoice body
			// var tr=$('<tr id="'+data.listado[i].id+'"></tr>');
			// $('<td class="cant">'+cant+'</td>').appendTo(tr);
			// $('<td>'+data.listado[i].nombre+'</td>').appendTo(tr);
			// $('<td>'+data.listado[i].precio+'</td>').appendTo(tr);
			// $('<td></td>').appendTo(tr);
		        // tr.appendTo('.table');
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

