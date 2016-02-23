define(["dojo/dom-construct", "myApp/divLabel", "dijit/form/TextBox", "dojo/domReady!"],
    function(domConstruct, divLabel, TextBox){
       	return{
	        createTextBox: function(id, parent, label, required){

	           	var div = divLabel.createDivLabel(id, parent, label, required);

                var input = domConstruct.create("input", {innerHTML: ""}, div);
                
	            var t = new TextBox({
                	id: id,
                	name: id
                }, input);
		    }
        }
});