define(["dojo/dom-construct", "dojo/domReady!"],
        function(domConstruct){
        	return{
	            // create store instance referencing data from states.json
	            createFieldset: function(id, parent, label){

	            	var div = domConstruct.create("div",{id: id ,className: "fieldset"}, parent);
	            	domConstruct.create("em", {id: id+"Em",innerHTML: label}, div);
	            	return div;
		        }
        	}
        });