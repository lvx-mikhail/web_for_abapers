function Plunt(name){
	var _name = name;
	
	this.description;
	
	this.getName = function(){
        return _name;
    }
    
    this.setName = function(name){
        _name = name;
        return this;
    }
    
    this.setDescription = function(description){
        this.description = description;
        return this;
    }
    
	this.toString = function(){
		return "Plant (super - func): " + 
		"name: " + _name;
	}
}

function Fern(name){
	Plunt.apply(this, arguments);
	
	var _application;
	
	this.getApplication = function(){
        return _application;
    }
    
    this.setApplication = function(application){
        _application = application;
        return this;
    }
	
	this.toString = function(){
		return "Fern (child - func): " + 
		"name: " + this.getName() + 
		", application: " + _application;
	}	
	
}

function Spruce(name, description){
	Plunt.apply(this, arguments);
	
	this.description = description;
	
	var _class;
	
	this.getClass = function(){
        return _class;
    }
    
    this.setClass = function(__class){
        _class = __class;
        return this;
    }
    
    this.toString = function(){
		return "Spruce (child - func): " + 
		"name: " + this.getName() + 
		", class: " + _class;
	}
    
}