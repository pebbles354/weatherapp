// Factory function which holds functions to pull weather JSON file and create an object
const createWeatherObject = function() {

	// converts unit from kelvin to farenheight
	const kelvinConverter = function(temp) {
		return ((temp * (9/5)) - 459.67);
	}

	//extracts the weather object from a parsed json object
	const extractWeatherObject = function(weatherDataParsed) {
		return {
			currentFeelsLike: kelvinConverter(weatherDataParsed.current.feels_like),
			dayFeelsLike: kelvinConverter(weatherDataParsed.daily[0].feels_like.day),
			nightFeelsLike: kelvinConverter(weatherDataParsed.daily[0].feels_like.night),
			currentActual: kelvinConverter(weatherDataParsed.current.temp),
			dayActual: kelvinConverter(weatherDataParsed.daily[0].temp.day),
			nightActual: kelvinConverter(weatherDataParsed.daily[0].temp.eve),
			rainChance: weatherDataParsed.daily[0].rain,
			snowChance: weatherDataParsed.daily[0].snow,
			cloudCover: weatherDataParsed.daily[0].clouds,
		}
	};

	//async function to pull the current Weather from openweathermap api
	async function pullWeatherObject() {
		const weatherData = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=37.550201&lon=-121.980827&appid=a7d000bc83452f91d1c5f98b2327ab5a', {mode: 'cors'});
		const weatherDataParsed = await weatherData.json();
		
		// run function to parse the weather data into the info we need
		return extractWeatherObject(weatherDataParsed);
	};

	return {
		pullWeatherObject,
		a: 1
	}
}();

export default createWeatherObject;