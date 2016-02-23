define(["dojo/dom-construct", "myApp/divLabel", "dijit/form/DateTextBox", "dojo/domReady!"],
    function(domConstruct, divLabel, DateTextBox){
       	return{
	            // create store instance referencing data from states.json
	        createDateTextBox: function(id, parent, label){

	           	var div = divLabel.createDivLabel(id, parent, label, false);

                var input = domConstruct.create("input", {innerHTML: ""}, div);

	            new DateTextBox({
                	id: id,
                	name: id,
                    hasDownArrow: false
                }, input);
		    }
        }
});