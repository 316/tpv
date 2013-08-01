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
			    var punit=$("tr#"+q+" .punit").text(); 
			    cant=++cant;
			    $("tr#"+q+" .cant").text(cant);
			    $("tr#"+q+" .subtotal").text((punit*cant).toFixed(2)); // this updates subtotal column
			}
			else // when an item is inserted for first time creates a new row
			{
			    var cant=1;
			    var tr=$('<tr id="'+data.listado[i].id+'"></tr>');
			    $('<td class="cant">'+cant+'</td>').appendTo(tr);
			    $('<td>'+data.listado[i].nombre+'</td>').appendTo(tr);
			    $('<td class="punit">'+data.listado[i].precio+'</td>').appendTo(tr);
			    $('<td class="subtotal">'+(cant*data.listado[i].precio).toFixed(2)+'</td>').appendTo(tr); //this creates first value to subtotal colum
		            tr.appendTo('.table');
			    
			}
		    }
		}
		//Here we set total, by summing all subtotal columns
		var sum = 0;
		// iterate through each td based on class and add the values
		$(".subtotal").each(function() {
		    
		    var value = $(this).text();
		    // add only if the value is number
		    if(!isNaN(value) && value.length != 0) {
			sum += parseFloat(value);
		    }
		    $(".total").text((sum).toFixed(2));
		});
	    }
	});
	$(".q").val("");
	$(".q").focus();
	return false; // keeps the page from not refreshing 
	
    });
});

