define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/dom",
    "dojo/text! myApp/templates/dialogWidget.html",
    "dijit/Dialog",
    "dijit/form/Button"
], function(declare, _WidgetBase, _TemplatedMixin,
            _WidgetsInTemplateMixin, dom, template) {

    return declare("dialogWidget", [_WidgetBase,
        _TemplatedMixin, _WidgetsInTemplateMixin
    ], {
        firstName:"",
        lastName:"",
        company:"",
        address:"",
        city:"",
        state:"",
        country:"",
        email:"",
        phone:"",
        meal:"",
        payementDetails:"",
        noCheque:"",
        draw:"",
        payable:"",

        templateString: template,

        constructor: function(array){
            for (var i = 0; i < array.length; i++) {
                var attr = array[i].attr;
                if(i > 9 && i < 13){
                    if(array[i].value != ""){
                        this.setPayementDetails(array[i].value);
                    }
                }else{
                    this._set(attr, array[i].value);
                }
            };
        },

        setPayementDetails: function(payementDetails){
            var payement = this._get("payementDetails");
            if(payement != ""){
                payementDetails = payement+", "+payementDetails;
            }
            this._set("payementDetails", payementDetails);
        },

        ok: function(){
            this.myConfirmDialog.hide();
            var form = dom.byId("myForm");
            form.submit();
        },

        cancel: function(){
            this.myConfirmDialog.hide();
        },

        show: function(){
            this.myConfirmDialog.show();
        }
    });

});