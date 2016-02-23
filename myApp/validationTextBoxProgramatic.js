define(["dojo/dom-construct", "myApp/divLabel", "dijit/form/ValidationTextBox", "dojox/validate/web", "dojo/domReady!"],
    function(domConstruct, divLabel, ValidationTextBox, validate){
       	return{
	        createValidationTextBox: function(id, parent, label, invalidMessage){

	           	var div = divLabel.createDivLabel(id, parent, label, true);

                var input = domConstruct.create("input", {innerHTML: ""}, div);

                if(id == "phone"){
                    new ValidationTextBox({
                        id: id,
                        name: id,
                        regExp: "[\\w]+",
                        invalidMessage: invalidMessage
                    }, input);
                }else{
                    new ValidationTextBox({
                        id: id,
                        name: id,
                        validator: dojox.validate.isEmailAddress,
                        invalidMessage: invalidMessage
                    }, input);
                }
		    }
        }
});