function create(){
	var name = document.getElementById("name").value
	
	plunt = new Plunt(`MyPlant: ${name}`)
		.setDescription("PlantDescr"); 
		
	fern = new Fern(`MyFern: ${name}`)
		.setDescription("FernDescr")
		.setApplication("MyApplication");
		
	spruce = new Spruce(`MySpruce: ${name}`, "SpruceDescr")
		.setClass("MyClass");
	
	[plunt,fern,spruce].forEach(element => 
		console.log(element.toString() + ", json: " + JSON.stringify(element)));
	
}

document.getElementById("submitId").addEventListener('click', function(oEvent){
    oEvent.preventDefault();
    create();
});