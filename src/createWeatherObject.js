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

	let lat=1;
	let lon=1;

	// function to get the lat and long based on a city
	async function getLatLong(value) {
		const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=1&appid=a7d000bc83452f91d1c5f98b2327ab5a`, {mode: 'cors'});
		const parsedApi = await response.json();
		lat = parsedApi[0].lat;
		lon = parsedApi[0].lon;
	}

	//async function to pull the current Weather from openweathermap api
	async function pullWeatherObject(city) {
		
		const latLong = await getLatLong(city);

		const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=a7d000bc83452f91d1c5f98b2327ab5a`, {mode: 'cors'});
		const weatherDataParsed = await weatherData.json();
		
		// run function to parse the weather data into the info we need
		return extractWeatherObject(weatherDataParsed);
	};

	return {
		pullWeatherObject
	}
}();

export default createWeatherObject;