define(["dojo/query"], function (query) {
		var inputs = query("form [name]");
		var values = [];
	    var cont = 0;
	    var paymentMode = "";
	    for (var i = 0; i < inputs.length; i++) {
	        if(i > 9 && i < 13){
	            if(inputs[i].checked){
	                if(paymentMode != "")
	                    paymentMode +=", ";
	                paymentMode = paymentMode + inputs[i].value;
	            }
	            if(i==12){
	                values[cont] = paymentMode;
	                cont++;
	            }
	        }else{
	            values[cont] = inputs[i].value;
	            cont++;
	        }
	    };
	    return values;
})
								