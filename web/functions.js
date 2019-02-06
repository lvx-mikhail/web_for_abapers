function index_onload(){
	var txt = "";
	for(var i = 0; i < 1000; i++) {
		txt = txt + i.toString() + " ";
	}
	document.getElementById("txt").innerHTML = txt;	
}