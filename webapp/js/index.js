sap.ui.define([
	"sap/m/Text",
	"sap/ui/core/mvc/XMLView"
], function (Text, XMLView) {
	"use strict";
	
	XMLView.create({
		viewName: "my.nn.view.App"
	}).then(function (oView) {
		oView.placeAt("content");
	});
	
	//new Text({
	//	text: "Hello World"
	//}).placeAt("content");
	
});