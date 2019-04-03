sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller,MessageToast,MessageBox) {
	"use strict";

	return Controller.extend("zzz.controller.App", {

		onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		},
		
	});

});