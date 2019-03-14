function Entity(){
	this.name;
}
Entity.prototype.setName = function(name) {
	this.name = name;
	return this;
}
Entity.prototype.getName = function() {
	return this.name;
}

function xhttpToString(xhttp){
	var log = "";
	['readyState','responseText','responseXML','status','statusText'].forEach(e => {
		log += e + ": " + xhttp[e] + "; ";
	});
	return log + xhttp.getAllResponseHeaders();
}

function do_create(){
	var entity = new Entity()
		.setName(document.getElementById("name").value);
	console.log("client create: " +  JSON.stringify(entity));
	
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		console.log("onreadystatechange: " + xhttpToString(this));
	};
	
	xhttp.open("POST", "https://5vujzflxoqsehff1or-abapers-server.cfapps.eu10.hana.ondemand.com/xsjs/restService.xsjs?cmd=create", true);
	xhttp.send(JSON.stringify(entity));
	
}

function do_read(){
	var entity = new Entity()
		.setName(document.getElementById("name").value);
	console.log("client read: " +  JSON.stringify(entity));
	
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		console.log("onreadystatechange: " + xhttpToString(this));
	};
	
	xhttp.onload = function() {
		console.log("onload: " + xhttpToString(this));
	}

	xhttp.onerror = function() {
		console.log("onerror: " + xhttpToString(this));
	}
	
	xhttp.open("GET", "https://5vujzflxoqsehff1or-abapers-server.cfapps.eu10.hana.ondemand.com/xsjs/restService.xsjs?cmd=read&name=" + entity.getName(), true);
	xhttp.send();
	
}

function do_update(){
	var entity = new Entity()
		.setName(document.getElementById("name").value);
	console.log("client update: " +  JSON.stringify(entity));
}

function do_delete(){
	var entity = new Entity()
		.setName(document.getElementById("name").value);
	console.log("client delete: " +  JSON.stringify(entity));
	
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		console.log("onreadystatechange: " + xhttpToString(this));
	};
	
	xhttp.open("DELETE", "https://5vujzflxoqsehff1or-abapers-server.cfapps.eu10.hana.ondemand.com/xsjs/restService.xsjs", true);
	xhttp.send();
}

(function init(){
	
	["cId", "rId", "uId", "dId"].forEach(eId => {
		
		document.getElementById(eId).addEventListener('click', function(oEvent){
	    	oEvent.preventDefault();
	    	
	    	switch (eId) {
				case "cId":
					do_create();
					break;
	    		
	    		case "rId":
					do_read();
					break;
				
				case "uId":
					do_update();
					break;
				
				case "dId":
					do_delete();
					break;
					
				default:
					throw "unknown command";
	    	}
		});
		
	});
	
})();