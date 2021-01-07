import createWeatherObject from './createWeatherObject';
import generateWeatherDescriptors from './generateWeatherDescriptors';
import updateDom from './updateDom';
import modalFunctionality from './modalFunctionality';
import createOutfitArray from './createOutfitArray';


// final function to run things
const executeWeather = function() {
  createWeatherObject.pullWeatherObject().then(function(result) {
    // generate the weather information and the outfit
    const weatherDescriptor = generateWeatherDescriptors.weatherDescriptors(result);
    const todaysOutfit = createOutfitArray(weatherDescriptor);

    // update the page with the array generated
    updateDom.updateWeather('Redwood City', weatherDescriptor);
    updateDom.updateOutfit(todaysOutfit);


    // console.log(todaysOutfit);
    // console.log(weatherDescriptor);
  })
}

modalFunctionality();
executeWeather();

// TODO: Create a clothing module to help us select what clothes to wear
// TODO: Create location bar input, hide (css), and then add ability to launch on click
// TODO: Module to search for a new location
// TODO: Responsive design 

// TODO: Store current city + weather descriptor in storage, so we dont have to wait for api pull when we load page
