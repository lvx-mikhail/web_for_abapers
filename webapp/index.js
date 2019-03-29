sap.ui.require([
	"sap/m/Text",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/XMLView",
	"sap/ui/model/BindingMode",
	"sap/ui/model/resource/ResourceModel"
], function (Text, JSONModel, XMLView, BindingMode, ResourceModel) {
	"use strict";

	// Attach an anonymous function to the SAPUI5 'init' event
	sap.ui.getCore().attachInit(function () {
		
		var oProductModel = new JSONModel();
		oProductModel.loadData("./model/Products.json");
		sap.ui.getCore().setModel(oProductModel, "products");
		
		// Create a JSON model from an object literal
		var oModel = new JSONModel({
			greetingText: "Hi, my name is Harry Hawk",
			firstName: "Harry",
			lastName: "Hawk",
			enabled: true,
			panelHeaderText: "Data Binding Basics",
			"priceThreshold": 20,
			address: {
				street: "Dietmar-Hopp-Allee 16",
				city: "Walldorf",
				zip: "69190",
				country: "Germany"
			},
			"salesToDate" : 12345.6789,
			"currencyCode" : "EUR"
		});
		
		//oModel.setDefaultBindingMode(BindingMode.OneWay);
		
		// Assign the model object to the SAPUI5 core
		sap.ui.getCore().setModel(oModel);		
		
		// Create a resource bundle for language specific texts
		var oResourceModel = new ResourceModel({
			bundleName: "zzz.i18n.i18n"
		});

		// Assign the model object to the SAPUI5 core using the name "i18n"
		sap.ui.getCore().setModel(oResourceModel, "i18n");		
		
		// Create a text UI element that displays a hardcoded text string
		//new Text({text: "Hi, my name is Harry Hawk"}).placeAt("content");
		
		// Display a text element whose text is derived
		// from the model object

		//new Text({text: "{/greetingText}"}).placeAt("content");
		
		// Display the XML view called "App"
		var oView = new XMLView({
			viewName: "zzz.view.App"
		});//.placeAt("content");
		
		// Register the view with the message manager
		sap.ui.getCore().getMessageManager().registerObject(oView, true);
		
		oView.placeAt("content");
		
	});
});