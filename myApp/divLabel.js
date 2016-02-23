define(["dojo/dom-construct", "dojo/domReady!"],
        function(domConstruct){

        	return{
        		
	            createDivLabel: function(id, parent, label, required){
	            	
	            	var div = domConstruct.create("div",{className: "div", id: id+"Div"}, parent);
	            	var more = domConstruct.create("div",{className: "label"}, div);
	            	var label = domConstruct.create("label", {innerHTML: label, for: id}, more);
	            	if(required){
	            		domConstruct.create("p", {innerHTML: "*"}, label);
	            	}
	            	div = domConstruct.create("div",{className: "labelDiv"}, div);
	            		
	            	return div;
		        }
        	}
        });