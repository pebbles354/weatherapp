
const determineLocation = function() {

    let location;

    const showPosition = function(position) {
    location = position.coords;
    }

    const error = function() {
        location = undefined;
    }

    if(!navigator.geolocation) {
        error();
      } else {
        status.textContent = 'Locating…';
        navigator.geolocation.getCurrentPosition(showPosition, error);
      }

    const pullSavedLocation = function() {
        const storedLocation = localStorage.getItem('city');
        if (storedLocation === null) {
            location = 'San Francisco';
        } else {
            location = storedLocation;
        }
    }

    if (location === undefined){
        pullSavedLocation();
    }

    return {location}
}();

export default determineLocation;


// const determineLocation = function() {
//     let location;

//     const showPosition = function() {
//     location = position
//     }

//     function getLocation() {
//         if (navigator.geolocation) {
//             currentLocation = navigator.geolocation.getCurrentPosition(showPosition);
//         } else {
//             location = localStorage.getItem('city')
//             if (location === null) {
//                 location = 'San Francisco';
//             }
//         }
//     }
    
//     getLocation();

//     if (location)

//     let value = 

//     if (value === null) {
//     value = 'San Francisco'
//     finalObject.executeWeather(value);
//     } else {
//     finalObject.executeWeather(value);
//     }

//     return {location}
// }();

// export default determineLocation;