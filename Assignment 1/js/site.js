// JavaScript source code

/* Locations Page - Google Maps API*/ 
// Declare a variable for map
var map;
// Get lattitude and longitude of Canberra Centre
var canberraCentre = new google.maps.LatLng(-35.2792284, 149.1321033);
// Initialise the map
function initMap() {
    // Define the properties for Canberra Centre map
    var canberraMap = {
        center: canberraCentre,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    // Create a map object for Canberra Centre 
    // using canberraMap and the <div> element with id="googleMap"
    map = new google.maps.Map(
        document.getElementById("googleMap"), canberraMap);

    // Add markers below this line
    addBelluciItalianMarker(map);
    addItalianSonsMarker(map);
    addBluGingerMarker(map);
    addJewelIndiaMarker(map);
    addChairmanYipMarker(map);
    addDicksonNoodlesMarker(map);
}

// Add other functions below this line
// Add a DOM listener that will execute the initMap function 
// on window load (when the page is loaded)
google.maps.event.addDomListener(window, 'load', initMap);        

/* Belluci’s Italian Marker */
function addBelluciItalianMarker(map) {
    // Bellucis Italian
    var belluciItalian =
        new google.maps.LatLng(-35.339874, 149.084190);
    var markerBellucisItalian = new google.maps.Marker({
        position: belluciItalian,
    });

    markerBellucisItalian.setMap(map);

    var contentBellucisItalian =
        ' <h1>Belluci’s Italian</h1>' +
        ' <img src="../images/location/bellucis_logo.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        ' <p><b>Bellucis Italian:</b> is an art gallery ' +
        'and museum in Canberra, the capital of Australia. ' +
        'It is located on London Circuit, in Civic in ' +
        'the centre of the city. The gallery was opened ' +
        'on 13 February, 1998.<br>' +
        '<a href="https://en.wikipedia.org/wiki/Canberra_' +
        'Museum_and_Gallery">Wikipedia</a>' +
        ' </p>';

    var infoBellucisItalian = new google.maps.InfoWindow({
        content: contentBellucisItalian
    });

    google.maps.event.addListener(markerBellucisItalian, 'click',
        function () {
            infoBellucisItalian.open(map, markerBellucisItalian);
        });
}

/* Italian and Sons Marker */
function addItalianSonsMarker(map) {
    // Italian and Sons
    var italianSons =
        new google.maps.LatLng(-35.274877, 149.132349);
    var markerItalianSons = new google.maps.Marker({
        position: italianSons,
    });

    markerItalianSons.setMap(map);

    var contentItalianSons =
        ' <h1>Italian and Sons</h1>' +
        ' <img src="../images/location/is_logo.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        ' <p><b>Italian and Sons</b> is an art gallery ' +
        'and museum in Canberra, the capital of Australia. ' +
        'It is located on London Circuit, in Civic in ' +
        'the centre of the city. The gallery was opened ' +
        'on 13 February, 1998.<br>' +
        '<a href="https://en.wikipedia.org/wiki/Canberra_' +
        'Museum_and_Gallery">Wikipedia</a>' +
        ' </p>';

    var infoItalianSons = new google.maps.InfoWindow({
        content: contentItalianSons
    });

    google.maps.event.addListener(markerItalianSons, 'click',
        function () {
            infoItalianSons.open(map, markerItalianSons);
        });
}

/* Blu Ginger Marker */
function addBluGingerMarker(map) {
    // Blu Ginger
    var bluGinger =
        new google.maps.LatLng(-35.277005, 149.131981);
    var markerBluGinger = new google.maps.Marker({
        position: bluGinger,
    });

    markerBluGinger.setMap(map);

    var contentBluGinger =
        ' <h1>Blu Ginger</h1>' +
        ' <img src="../images/location/bluginger_logo.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        ' <p><b>Blu Ginger</b> is an art gallery ' +
        'and museum in Canberra, the capital of Australia. ' +
        'It is located on London Circuit, in Civic in ' +
        'the centre of the city. The gallery was opened ' +
        'on 13 February, 1998.<br>' +
        '<a href="https://en.wikipedia.org/wiki/Canberra_' +
        'Museum_and_Gallery">Wikipedia</a>' +
        ' </p>';

    var infoBluGinger = new google.maps.InfoWindow({
        content: contentBluGinger
    });

    google.maps.event.addListener(markerBluGinger, 'click',
        function () {
            infoBluGinger.open(map, markerBluGinger);
        });
}

/* Jewel of India Marker */
function addJewelIndiaMarker(map) {
    // Jewel of India
    var jewelOfIndia =
        new google.maps.LatLng(-35.320541, 149.132825);
    var markerJewelOfIndia = new google.maps.Marker({
        position: jewelOfIndia,
    });

    markerJewelOfIndia.setMap(map);

    var contentJewelOfIndia =
        ' <h1>Jewel of India</h1>' +
        ' <img src="../images/location/jewel_logo.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        ' <p><b>Jewel of India</b> is an art gallery ' +
        'and museum in Canberra, the capital of Australia. ' +
        'It is located on London Circuit, in Civic in ' +
        'the centre of the city. The gallery was opened ' +
        'on 13 February, 1998.<br>' +
        '<a href="https://en.wikipedia.org/wiki/Canberra_' +
        'Museum_and_Gallery">Wikipedia</a>' +
        ' </p>';

    var infoJewelOfIndia = new google.maps.InfoWindow({
        content: contentJewelOfIndia
    });

    google.maps.event.addListener(markerJewelOfIndia, 'click',
        function () {
            infoJewelOfIndia.open(map, markerJewelOfIndia);
        });
}

/* Chairman & Yip Marker */
function addChairmanYipMarker(map) {
    // Chairman & Yip
    var chairmanYip =
        new google.maps.LatLng(-35.311613, 149.133954);
    var markerChairmanYip = new google.maps.Marker({
        position: chairmanYip,
    });

    markerChairmanYip.setMap(map);

    var contentChairmanYip =
        ' <h1>Chairman & Yip</h1>' +
        ' <img src="../images/location/chairman_logo.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        ' <p><b>Chairman & Yip</b> is an art gallery ' +
        'and museum in Canberra, the capital of Australia. ' +
        'It is located on London Circuit, in Civic in ' +
        'the centre of the city. The gallery was opened ' +
        'on 13 February, 1998.<br>' +
        '<a href="https://en.wikipedia.org/wiki/Canberra_' +
        'Museum_and_Gallery">Wikipedia</a>' +
        ' </p>';

    var infoChairmanYip = new google.maps.InfoWindow({
        content: contentChairmanYip
    });

    google.maps.event.addListener(markerChairmanYip, 'click',
        function () {
            infoChairmanYip.open(map, markerChairmanYip);
        });
}

/* Dickson Asian Noodle House Marker */
function addDicksonNoodlesMarker(map) {
    // Dickson Asian Noodle House
    var  dicksonNoodles= 
        new google.maps.LatLng(-35.250265, 149.136426);
    var markerDicksonNoodles = new google.maps.Marker({
        position: dicksonNoodles,
    });

    markerDicksonNoodles.setMap(map);

    var contentDicksonNoodles =
        ' <h1>Dickson Asian Noodle House</h1>' +
        ' <img src="../images/location/noodle_logo.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        ' <p><b>Dickson Asian Noodle House</b> is an art gallery ' +
        'and museum in Canberra, the capital of Australia. ' +
        'It is located on London Circuit, in Civic in ' +
        'the centre of the city. The gallery was opened ' +
        'on 13 February, 1998.<br>' +
        '<a href="https://en.wikipedia.org/wiki/Canberra_' +
        'Museum_and_Gallery">Wikipedia</a>' +
        ' </p>';

    var infoDicksonNoodles = new google.maps.InfoWindow({
        content: contentDicksonNoodles
    });

    google.maps.event.addListener(markerDicksonNoodles, 'click',
        function () {
            infoDicksonNoodles.open(map, markerDicksonNoodles);
        });
}


/* End - Locations Page - Google Maps API*/




/* Active State for homebutton 
 * (Sets 'Canberra Restaurants' text to white when Index.html open) 
 * Color set in site.css "Home Button"
 * NOTE: Need to come up with better solution
 */
if (window.location.pathname == "/Index.html") {
    document.getElementById("homebutton").style.color = "rgba(255,255,255, 1)";
}


/* Restaurant Page Image Grid */
function makeImageBlur(obj) {
    obj.style.opacity = 0.5;
}

function makeImageUnblur(obj) {
    obj.style.opacity = 1;
    document.getElementById("bgimage").style.background = "lightgrey";
}

function displayBigImage(obj) {
    document.getElementById("bgimage").style.backgroundImage = obj.style.backgroundImage;
    document.getElementById("bgimage").style.backgroundSize = "100%";
    document.getElementById("bgimage").style.backgroundRepeat = no - repeat;
    document.getElementById("bgimage").style.opacity = 1; //unnecessary code?

}
/* End - Restaurant Page Image Grid */