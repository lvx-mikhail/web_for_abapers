$(document).ready(function(){
	
	const ID_B_FETCH = '#bFetch';
	const ID_B_JQ_AJAX = '#bJQAjax';
	const ID_B_PROMISE = '#bPromise';
	
	class Controller {
		
		[ID_B_FETCH]() {
			
			fetch('https://37z2yzk81qva9xfj-js-server-server.cfapps.eu10.hana.ondemand.com/xsjs/restService.xsjs?cmd=create', {
    			method: 'post',
				headers: {
				  "Content-type": "application/json"
				},
				body: JSON.stringify({"name": "Jora"})
			}).then(data => console.log("myOK: " + JSON.stringify(data)))
			  .catch(error => console.log("myError: " + error));
			  
		}
		
		[ID_B_JQ_AJAX]() {
			
			
			
		}
		
		[ID_B_PROMISE]() {
			
			new Promise((resolve, reject) => setTimeout(() => resolve({"n":5}), 5 * 1000))
			.then(input => console.log(input));
			
		}
		
	}
	
	function eventHandler(oEvent){
		oEvent.preventDefault();
		
		let controller = new Controller();
		controller[oEvent.data.id]();
	
	}
	
	[ID_B_FETCH, ID_B_JQ_AJAX, ID_B_PROMISE].forEach(
		id => $(id).on("click", {"id": id}, oEvent => eventHandler(oEvent))
	);
		
});