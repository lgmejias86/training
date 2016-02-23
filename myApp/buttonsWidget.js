define(["dojo/_base/declare","dijit/_WidgetBase", "dijit/_TemplatedMixin", "dojo/i18n!./nls/formContent", "dojo/text!./templates/buttonsWidget.html", 
        "dijit/form/Button", "dojo/domReady!"],
		function(declare, WidgetBase, TemplatedMixin, i18n, template){
	        return declare([WidgetBase, TemplatedMixin], {
	            templateString: template,

	            submit: i18n.buttonSubmitLabel,

	            reset: i18n.buttonResetLabel,
	            
	            postCreate : function(){

	        	}
	        });
	});