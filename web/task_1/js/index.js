function main(){
	
	//Ask user his username
	let userName = prompt("Username request", "defaultUserName")
	
	if(userName){
		
		let userNameConverted = "";
		let converted = false;
		
		for(let i = 0; i < userName.length; i++){
			
			switch (userName.charAt(i)) {
				case "0": case "1": case "2": case "3": case "4": case "5": case "6": case "7": case "8": case "9":
					userNameConverted += userName.charAt(i);	
					converted = true;
					break;
				default:
					userNameConverted += userName.charAt(i).toUpperCase();
			}
			
		}
		
		if(converted){
			document.body.innerHTML = userNameConverted;
		}else{
			document.body.innerHTML = userName;
		}
	
	}
}

main();