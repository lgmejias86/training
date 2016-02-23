define(["dojo/_base/declare",
        "dojo/parser",
        "dijit/_WidgetBase", 
        "dijit/_TemplatedMixin",
        "dijit/_WidgetsInTemplateMixin", 
        "dijit/registry", 
        "dojo/dom", 
        "dojo/dom-construct",
        "dojo/on",
        "dojo/query", 
        "dojo/i18n!./nls/formContent",
        "dojo/text!./templates/formWidget.html",
        "dojo/text!./json/states.json",
        "dojo/text!./json/countries.json",
        "myApp/divLabel",
        "myApp/fieldsetProgramatic",
        "myApp/textBoxProgramatic",
        "myApp/CheckBoxProgramatic",
        "myApp/selectProgramatic",
        "myApp/textareaProgramatic",
        "myApp/validationTextBoxProgramatic",
        "myApp/dateTextBoxProgramatic", 
        "myApp/buttonsWidget",
        "dojo/date/locale",
        "dojo/_base/lang",
        "dojox/validate", "dojox/validate/check", "dojox/validate/web",
        "dijit/form/Form",
        "dojo/domReady!"

            ], function(declare, parser, _WidgetBase, _TemplatedMixin,
            _WidgetsInTemplateMixin, registry, dom, domConstruct, on, query, i18n, template, states, countries, divLabel, Fieldset, TextBox,
            CheckBox, Select, Textarea, ValidationTextBox, DateTextBox, ButtonsWidget, locale, lang, validate){

                return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], { 
                    templateString: template,

                    postCreate: function(){

                            var fieldsetRegister = Fieldset.createFieldset("register", this.myContentFieldset, i18n.registerLegend);

                            var fieldsetLunch = Fieldset.createFieldset("lunch", this.myContentFieldset, i18n.lunchLegend);

                            var fieldsetPayment = Fieldset.createFieldset("payment", this.myContentFieldset, i18n.paymentLegend);

                            TextBox.createTextBox("firstName", fieldsetRegister, i18n.fNameLabel, true);

                            TextBox.createTextBox("lastName", fieldsetRegister, i18n.lNameLabel, true);

                            TextBox.createTextBox("company", fieldsetRegister, i18n.companyLabel, true);

                            Textarea.createTextarea("address", fieldsetRegister, i18n.addressLabel);

                            TextBox.createTextBox("city", fieldsetRegister, i18n.cityLabel);

                            Select.createSelect("state" ,fieldsetRegister, i18n.stateLabel, states);

                            Select.createSelect("country" ,fieldsetRegister, i18n.countryLabel, countries);

                            ValidationTextBox.createValidationTextBox("email", fieldsetRegister, i18n.emailLabel, i18n.invalidMessageEmail);

                            ValidationTextBox.createValidationTextBox("phone", fieldsetRegister, i18n.phoneLabel, i18n.invalidMessagePhone);

                            var data = [
                                                {label: i18n.mealVegetarian, value: i18n.mealVegetarian, selected: true},
                                                {label: i18n.mealMuslim, value: i18n.mealMuslim},
                                                {label: i18n.mealKosher, value: i18n.mealKosher},
                                                {label: i18n.mealJapanese, value: i18n.mealJapanese}
                                            ];
                            Select.createSelect("meal" ,fieldsetLunch, i18n.mealLabel, data);

                            CheckBox.createCheckBox(fieldsetPayment);

                            TextBox.createTextBox("chequeno", fieldsetPayment, i18n.chequenoLabel);

                            TextBox.createTextBox("drawn", fieldsetPayment, i18n.drawnLabel);

                            DateTextBox.createDateTextBox("payable", fieldsetPayment, i18n.payableLabel);

                            var myButtons = new ButtonsWidget();
                            myButtons.placeAt(this.myContentFieldset);

                            var confirm = false;

                            this.form.on("submit", function(event){
                                obj = dijit.byId('myForm').get('value');
                                if(!confirm){
                                    event.preventDefault();
                                    event.stopPropagation();

                                    
                                    
                                    var arrayLabel = ["firstName", "lastName", "company", "address", "city", "state", "country", "email", "phone", "meal", "payment", "chequeno", "drawn", "payable"];

                                    var email = dijit.byId("email");
                                    var phone = dijit.byId("phone");

                                    var profile = {
                                        trim: ["firstName", "lastName", "company", "address", "email"],
                                        required: ["firstName", "lastName", "company", "address", "email", "phone"]
                                    };

                                    var f = query("form")[0];
                                    var results = validate.check(f, profile);
                                    if(results.isSuccessful()){
                                        if((email.isValid())&&(phone.isValid())){
                                            var address = query(".labelDiv");
                                            address.style("display", "none");
                                            var allDiv = query(".div:not(.checkDiv):not(.button)");
                                            for (var i = 0; i < allDiv.length; i++) {
                                                var div = allDiv[i];
                                                var value = arrayLabel[i];
                                                if((i!=13)||(obj[value]==null)){
                                                    domConstruct.create("div", {innerHTML: obj[value], className: "inputDiv"}, div);
                                                }else{
                                                    var yy = locale.format(obj[value], {selector: 'date' ,formatLength: "short"});
                                                    domConstruct.create("div", {innerHTML: yy, className: "inputDiv"}, div);
                                                }
                                            };

                                            dom.byId("submit").innerHTML = i18n.okButton;
                                            dom.byId("reset").innerHTML = i18n.cancelButton;
                                            query("#actionsDiv").style("display", "none");
                                            query("#paymentDiv").style("margin-top", "20px");
                                            dom.byId("registerEm").innerHTML = i18n.registerConfirmLegend;

                                            confirm = true;
                                        }else{
                                            alert(i18n.invalidConfirmMessage);
                                        }
                                    }else{
                                        alert(i18n.requereMessage);
                                    }

                                }else{
                                    console.log(dojo.toJson(obj, true));
                                }

                            });

                            this.form.on("reset", function(event){
                                if(confirm){
                                    event.preventDefault();
                                    event.stopPropagation();

                                    var address = query(".labelDiv");
                                    address.style("display", "block");

                                    var inputDiv = query(".inputDiv");
                                    for (var i = 0; i < inputDiv.length; i++) {
                                        domConstruct.destroy(inputDiv[i]);
                                    };

                                    dom.byId("submit").innerHTML = i18n.buttonSubmitLabel;
                                    dom.byId("reset").innerHTML = i18n.buttonResetLabel;
                                    query("#actionsDiv").style("display", "inline-block");
                                    query("#paymentDiv").style("margin-top", "5px")
                                    dom.byId("registerEm").innerHTML = i18n.registerLegend;

                                    confirm = false;
                                }
                            });
                        
                    }

                    
                    
                });
            });