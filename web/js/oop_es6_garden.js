'use strict';

class Plunt {
	
	constructor(name) {
    	this._name = name;
    	this._description;
	}
	
	set description(description) {
    	this._description = description;
	}
	
	toString() {
		return "Plant (super): name: " + JSON.stringify(this);
	}
	
}

class Fern extends Plunt {
	
	constructor(name) {
		super(name);
	}
	
	toString() {
		return super.toString() + " p <-> c "
			+ "Fern (child): name: " + JSON.stringify(this);
	}
	
}

class Spruce extends Plunt {
	
	constructor(name) {
		super(name);
	}
	
}