/*eslint no-console: 0, no-unused-vars: 0, no-shadow: 0, new-cap: 0*/
/*eslint-env node, es6 */
$.import("xsjs", "service");
var service = $.xsjs.service;

var logger = new service.Logger();

try{

	var aCmd = $.request.parameters.get('cmd');

	switch (aCmd) {
		case "create":
			
			if ($.request.method === $.net.http.POST) {
				
				var body = $.request.body.asString();
				var payload = JSON.parse(body);
				
				console.log("payload: " + payload);
				
				logger.addMessage(`do create body: ${body}`);
				
				$.response.contentType = "application/json";
				$.response.setBody(JSON.stringify(logger));
				$.response.status = $.net.http.OK;
								
			}else{
				
				throw "create is only in POST";
				
			}
			break; 
		
		case "read":
			var name = $.request.parameters.get('name');
			$.response.contentType = "application/json";
			logger.addMessage(`do get for ${name}`);
			$.response.setBody(JSON.stringify(logger));
			$.response.status = $.net.http.OK;
			break;
		
		default:
			throw "unknown command";
	}
	
} catch (e){
    $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
    logger.addMessage(e)
    $.response.setBody(JSON.stringify(logger));
}
$.response.headers.set("Access-Control-Allow-Origin", "*");