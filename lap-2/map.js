var frame = document.getElementById("iframe-map");


function getLocation() {

    navigator.geolocation.getCurrentPosition(showPosition);
  
}

// function showPosition(position) {
//     frame.src = "Latitude: " + position.coords.latitude + 
//   "<br>Longitude: " + position.coords.longitude;
// }


// var btn1 = document.getElementById("btn1");


// btn1.addEventListener("click",link)



function showPosition(position){
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    frame.src='https://maps.google.com/maps?q=' + lat +','+ long +'&t=&z=10&ie=UTF8&iwloc=&output=embed'
}

