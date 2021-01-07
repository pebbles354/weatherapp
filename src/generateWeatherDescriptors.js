const generateWeatherDescriptors = function() {
	
	// weather Description that we can edit
	const heatCategories = function() {
		return {
			hot: 90,
			warm: 70,
			nice: 50,
			chilly: 30,
			freezing: -100,
		}
	}();
	
	// pull temperatureCat based on the temperature input
	const temperatureCategory = function(temperature, weatherDescription) {
		//turn the temperature object into an array
		const temps = Object.entries(weatherDescription);
	
		// loop through temps to assign the key if the temperature is greater than the value
		for (let i=0; i<temps.length; i++) {
			if (temperature > temps[i][1]) {
				return temps[i][0];
			}
		}
	}
	
	// takes the weather object and specifies if the day is snowy, rainy, cloudy, partly sunny, or sunny
	const conditionCategory = function(weatherObject) {
		// minimum probability to mark a day as rainy/snowy
		let minimalProbabilityPrec = 0.3;
	
		// minimum probabilities to mark a day as cloudy vs partially cloudy
		let cloudyProbability = 0.7;
		let partlyProbability = 0.2;
	
		if (weatherObject.snowChance > minimalProbabilityPrec) {
			return 'snowy';
		} else if (weatherObject.rainChance > minimalProbabilityPrec) {
			return 'rainy';
		} else if (weatherObject.cloudCover > cloudyProbability) {
			return 'cloudy';
		} else if (weatherObject.cloudCover > partlyProbability) {
			return 'partly sunny'
		} else {
			return 'sunny'
		}
	}


	// take the two weather properties and reflect a description of what is happening today.
	const weatherDescriptionTextCreator = function(condition, day, night, weatherObject) {
		const a = condition
		const beginningText = `${capitalize(day)} day. ${capitalize(night)} night.`

		if (a === 'sunny') {
			return `${beginningText} Sunny.`
		} else if (a === 'partly sunny') {
			return `${beginningText} Partly Sunny (${weatherObject.cloudCover}% cloud cover).`
		} else if (a === 'cloudy') {
			return `${beginningText} Overcast (${weatherObject.cloudCover}% cloud cover).`
		} else if (a === 'rainy') {
			return `${beginningText} Likely rainy (${weatherObject.rainChance}% chance).`
		} else if (a === 'snowy') {
			return `${beginningText} Likely snowy (${weatherObject.snowChance}% chance).`
		}
	}

	const weatherDescriptors = function(weatherObj) {
		// specifies temperature is based on the "feels like" temp
		const dayTemp = Math.round(weatherObj.dayFeelsLike);
		const nightTemp = Math.round(weatherObj.nightFeelsLike);
		const currentTemp = Math.round(weatherObj.currentFeelsLike);

		const dayDescription = temperatureCategory(weatherObj.dayFeelsLike, heatCategories);
		const nightDescription = temperatureCategory(weatherObj.nightFeelsLike, heatCategories);
		const condition = conditionCategory(weatherObj)

		const weatherDescriptionText = weatherDescriptionTextCreator(condition, dayDescription, nightDescription, weatherObj);

		return {
			dayDescription,
			nightDescription,
			condition,
			weatherDescriptionText,
			dayTemp,
			nightTemp,
			currentTemp,
		}
	}


	// capitalize first letter
	const capitalize = function(s) {
		if (typeof s !== 'string') return ''
		return s.charAt(0).toUpperCase() + s.slice(1)
	}



	return {
		weatherDescriptors
	}

}();

export default generateWeatherDescriptors;