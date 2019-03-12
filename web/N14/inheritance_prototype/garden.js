function Plunt(name){
	this._name = name;
	
	this.description;
}

Plunt.prototype.getName = function(){
    return this._name;
}

Plunt.prototype.setName = function(name){
    this._name = name;
    return this;
}

Plunt.prototype.setDescription = function(description){
    this.description = description;
    return this;
}

Plunt.prototype.toString = function(){
	return "Plant (super - proto): " + 
	"name: " + this._name;
}

function Fern(name){
	Plunt.apply(this, arguments);
	
	this._application;
}

Fern.prototype = Object.create(Plunt.prototype);
Fern.prototype.constructor = Fern;

Fern.prototype.getApplication = function(){
    return _application;
}

Fern.prototype.setApplication = function(application){
    _application = application;
    return this;
}

Fern.prototype.toString = function(){
	return "Fern (child - proto): " + 
	"name: " + this.getName() + 
	", application: " + _application;
}	

function Spruce(name, description){
	Plunt.apply(this, arguments);
	
	this.description = description;
	
	this._class;
}

Spruce.prototype = Object.create(Plunt.prototype);
Spruce.prototype.constructor = Fern;

Spruce.prototype.getClass = function(){
    return this._class;
}

Spruce.prototype.setClass = function(__class){
    this._class = __class;
    return this;
}

Spruce.prototype.toString = function(){
	return "Spruce (child - proto): " + 
	"name: " + this.getName() + 
	", class: " + this._class;
}