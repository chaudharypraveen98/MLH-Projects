let map;
let directionsService;
let directionsDisplay;
let currentLatitude;
let currentLongitude;


function initMap() {
    let mapLayer = document.getElementById("map");
    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;
    const centerCoordinates = new google.maps.LatLng( 28.449349, 77.315725);
    let defaultOptions = {center: centerCoordinates, zoom: 14};
    map = new google.maps.Map(mapLayer, defaultOptions);
    directionsDisplay.setMap(map);
    function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        let element=document.getElementById('end').value.split(",");
        let lat=parseFloat(element[0]);
        let long=parseFloat(element[1]);
        directionsService.route({
                origin: new google.maps.LatLng(currentLatitude, currentLongitude),
                destination: new google.maps.LatLng(lat,long ),
                travelMode: 'DRIVING'
            },
            function(response, status) {
                if (status === 'OK') {
                    directionsDisplay.setDirections(response);
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
            });
    }

    let onChangeHandler = function () {
        calculateAndDisplayRoute(directionsService, directionsDisplay);
    };
    document.getElementById('end').addEventListener('change', onChangeHandler);
}

function addMarker(coords) {
    let marker = new google.maps.Marker({
        position: coords,
        map: map,
    });
}

function personMarker(coords) {
    console.log("new person marker")
    let marker = new google.maps.Marker({
        position: coords,
        map: map,
});
}
function locate(){
    document.getElementById("btnAction").disabled = true;
    document.getElementById("btnAction").innerHTML = "Processing...";
    if ("geolocation" in navigator){
        navigator.geolocation.getCurrentPosition(function(position){
            //currentLatitude = position.coords.latitude;
            //currentLongitude = position.coords.longitude;
            currentLatitude= 28.449261;
            currentLongitude= 77.315584;
            addMarker({lat:  28.445323, lng: 77.315779});
            addMarker({lat:  28.444657, lng: 77.319635});
            addMarker({lat:  28.448644, lng: 77.308221});
            personMarker({lat: currentLatitude, lng: currentLongitude});
            document.getElementById("btnAction").style.display = 'none';
        });
    }
}