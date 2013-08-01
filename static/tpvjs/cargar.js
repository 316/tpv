$(document).ready(function(){
    $(".q").focus();
    $(".q").change(function() {
	var q = $(".q").val();
	$.ajax({ // ajax call starts
	    url: '/tpv/operaciones/listado.json', // JQuery loads query generated json
	    data: 'q=' + $(".q").val(), // Send value of the clicked button
	    dataType: 'json', // Choosing a JSON datatype
	    success: function(data) // Variable data contains the data we get from serverside
	    {
		for (var i in data.listado) { // this must be a while loop instead with a flag
		    if (data.listado[i].codigo == q)
		    {
			//Auto count quantity of sold elements
			var cuenta=$("tr#"+q).length;
			if (cuenta) //if the item already exist adds one to cant colum, so is no need for manual amount input
			{
			    var cant=$("tr#"+q+" .cant").text();
			    var punit=$("tr#"+q+" .punit").text(); 
			    cant=++cant;
			    $("tr#"+q+" .cant").text(cant);
			    $("tr#"+q+" .subtotal").text((punit*cant).toFixed(2)); // this updates subtotal column
			}
			else // when an item is inserted for first time creates a new row
			{
			    var cant=1;
			    var tr=$('<tr id="'+data.listado[i].codigo+'"></tr>');
			    $('<td class="cant" style="text-align:center;">'+cant+'</td>').appendTo(tr);
			    $('<td>'+data.listado[i].nombre+'</td>').appendTo(tr);
			    $('<td class="punit" style="text-align:right;">'+(data.listado[i].precio*1).toFixed(2)+'</td>').appendTo(tr);
			    $('<td class="opciones" style="text-align:center;"><a class="btn btn-primary">Actualizar datos</a></td>').appendTo(tr); //this creates first value to subtotal colum
		            tr.appendTo('.table');
			    
			}
			
		    }
		}
	    }
	});
	$(".q").val("");
	$(".q").focus();
	return false; // keeps the page from not refreshing 
	
    });
});

