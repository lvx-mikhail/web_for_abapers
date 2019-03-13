function Logger(){
	this._log = "Log: ";
}
Logger.prototype.addMessage = function(message){
	this._log = this._log + message + "; ";
}