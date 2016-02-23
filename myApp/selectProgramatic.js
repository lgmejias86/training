define(["dijit/form/Select","dijit/form/ComboBox", "dojo/store/Memory",
            "dojo/json", "dojo/dom-construct", "dojo/dom-attr", "myApp/divLabel", "dojo/domReady!"],
        function(Select, ComboBox, Memory, json, domConstruct, domAttr, divLabel){
        	return{
	            createSelect: function(id, Parent, label, dataStore){

	            	var div = divLabel.createDivLabel(id ,Parent, label);
	            	div = domConstruct.create("div",{}, div);

	            	var idParent = domAttr.get(Parent, "id");

		            var stateStore = null;
		            var select = null;
		            if(idParent != "lunch"){
			            stateStore = new Memory({
			                data: json.parse(dataStore)
			            });

			            select = new ComboBox({
			                name: id,
			                store: stateStore,
			                placeHolder: "-Select-",
			                id: id
			            }, div);
			        }else{
			        	select = new Select({
			                name: id,
			                id: id,
			                options: dataStore
			            }, div);
			        }
		            select.startup();
		        }
        	}
        });