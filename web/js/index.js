$(document).ready(function(){
	
	function App(){
		this.oDataEndPoint = 'https://services.odata.org/V4/TripPinServiceRW';
	}
	
	App.prototype.loadPhotos = function(entity, callback){
		var self = this;
		
		$.ajax({
			url: self.oDataEndPoint + entity,
			success: function(response){
				callback(response.value);
			}
		});
		
		return self;
	};
	
	App.prototype.renderPhotos = function(photoList){
        var table = $('#photosTable tbody');
        table.empty();
        photoList.forEach(item => {
            table.append(`<tr><td>${item.Id}</td><td>${item.Name}</td><td></td></tr>`);
        });	
        
        return self;
	};	
	
	var app = new App();
	
	app.loadPhotos("/Photos", photoList => app.renderPhotos(photoList));
	
	$("#withQuery").click(function(){
		app.loadPhotos("/Photos?$top=20&$filter=(Id eq 1L or Id eq 11L) and contains(Name,'Pho')&$orderby=Name&$select=Id,Name",
		photoList => app.renderPhotos(photoList));			
	});
	
});