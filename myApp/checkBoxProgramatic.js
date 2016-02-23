define(["dojo/dom-construct", "myApp/divLabel", "dijit/form/CheckBox", "dojo/i18n!./nls/formContent", "dojo/domReady!"],
    function(domConstruct, divLabel, CheckBox, i18n){
       	return{
	            // create store instance referencing data from states.json
	        createCheckBox: function(parent){

                var paymentDiv = divLabel.createDivLabel("payment", parent, i18n.paymentLabel);

	           	var div = domConstruct.create("div",{className: "div checkDiv", id: "cashDiv"}, paymentDiv);
                var inputCash = domConstruct.create("input", {innerHTML: ""}, div);
                domConstruct.create("label", {innerHTML: i18n.cashLabel, for: "cash"}, div);

                div = domConstruct.create("div",{className: "div checkDiv", id: "chequeDiv"}, paymentDiv);
                var inputcheque = domConstruct.create("input", {innerHTML: ""}, div);
                domConstruct.create("label", {innerHTML: i18n.chequelabel, for: "cheque"}, div);

                div = domConstruct.create("div",{className: "div checkDiv", id: "demandDiv"}, paymentDiv);
                var inputDemand = domConstruct.create("input", {innerHTML: ""}, div);
                domConstruct.create("label", {innerHTML: i18n.demandlabel, for: "demand"}, div);

	            var checkCash = new CheckBox({
                	id: "cash",
                	name: "payment", 
                    value: i18n.cashLabel,
                    onChange:  function(){
                                if(checkCash.checked){
                                    checkCheque.set("checked", false);
                                    checkDemand.set("checked", false);
                                }
                            }
                }, inputCash);

                var checkCheque = new CheckBox({
                    id: "cheque",
                    name: "payment", 
                    value: i18n.chequelabel,
                    onChange:  function(){
                                if(checkCheque.checked){
                                    checkCash.set("checked", false);
                                    checkDemand.set("checked", false);
                                }
                            }
                }, inputcheque);

                var checkDemand = new CheckBox({
                    id: "demand",
                    name: "payment", 
                    value: i18n.demandlabel,
                     onChange:  function(){
                                if(checkDemand.checked){
                                    checkCash.set("checked", false);
                                    checkCheque.set("checked", false);
                                }
                            }
                }, inputDemand);
		    }
        }
});