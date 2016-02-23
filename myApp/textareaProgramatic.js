define(["dojo/dom-construct", "myApp/divLabel", "dijit/form/Textarea", "dojo/domReady!"],
    function(domConstruct, divLabel, Textarea){
       	return{
	            
	        createTextarea: function(id, parent, label){

	           	var div = divLabel.createDivLabel(id, parent, label, true);

                var input = domConstruct.create("input", {innerHTML: ""}, div);

	            new Textarea({
                	id: id,
                	name: id,
                    required: false, 
                }, input);
		    }
        }
});