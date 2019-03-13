

function do_create(){
	alert("create");
}

function do_read(){
	alert("read");
}

function do_update(){
	alert("update");
}

function do_delete(){
	alert("delete");
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
		});
		
	});
	
)();