let usc = new google.maps.LatLng(34.043514,-118.266210);

let map = new google.maps.Map(document.getElementById('map'), {
	center: usc,
	zoom: 14


});

// let uscMarker = new google.maps.Marker(
// 	{
// 		map: map,
// 		position: usc,
// 		animation: google.maps.Animation.DROP

// 	});


// let infoWindow = new google.maps.InfoWindow(
// {
// 	position: usc,
// 	content: '<strong>usc</strong>'
// });

if (navigator.geolocation) {
	let successHandler = function(position) 
	{
	  console.log(position.coords.latitude, position.coords.longitude);
	};
	let errorHandler = function(error) {};
	let options = {};
	navigator.geolocation.getCurrentPosition(function(position)
	{
		let currentLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);


		let geocoder = new google.maps.Geocoder();
		geocoder.geocode(
		{
			location: currentLocation
		}, function(geocoderResults)

		{
			console.log(geocoderResults);
			// let position = geocoderResults[0].geometry.location;
			map.setCenter(currentLocation);

			let currentmarker = new google.maps.Marker(
			{
				map: map,
				position: currentLocation,
				animation: google.maps.Animation.DROP
		
			});

			let contentCurr = geocoderResults[0].formatted_address;

			let infoWindow = new google.maps.InfoWindow
			({
					position: currentLocation,
					content: contentCurr
				
			});

			google.maps.event.addListener(currentmarker, 'click', function() 
			{
  				infoWindow.open(map);
			});
		});

	});

	
};












// $('form').on('submit',function(event){

// 	event.preventDefault();

// 	let currentLocation = document.getElementById('search-term').value;
// 	let geocoder = new google.maps.Geocoder();
// 	geocoder.geocode({
// 		address:searchTerm
// }, function(geocoderResults){
// 	console.log(geocoderResults);
// 	let position = geocoderResults[0].geometry.location;
// 	map.setCenter(position);

// 	new google.maps.Marker(
// 	{
// 		map: map,
// 	position: position,
// 	animation: google.maps.Animation.DROP
// });





// 		});

	
// });