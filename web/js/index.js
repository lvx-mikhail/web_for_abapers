$(document).ready(function(){

	function create(name){
		
		plunt = new Plunt(`MyPlant: ${name}`);
		plunt.description = '__Descr__';
			
		fern = new Fern(`MyFern: ${name}`);
			
		spruce = new Spruce(`MySpruce: ${name}`);
		
		[plunt,fern,spruce].forEach(element => 
			console.log(element.toString() + ", json: " + JSON.stringify(element)));
		
	}
	
	$("#nameForm").on("submit", function(oEvent) {
		oEvent.preventDefault();
		create(JSON.stringify($(this).serializeJSON()));
	});

});