/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createWeatherObject.js":
/*!************************************!*\
  !*** ./src/createWeatherObject.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
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
		pullWeatherObject
	}
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createWeatherObject);

/***/ }),

/***/ "./src/generateWeatherDescriptors.js":
/*!*******************************************!*\
  !*** ./src/generateWeatherDescriptors.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateWeatherDescriptors);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createWeatherObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createWeatherObject */ "./src/createWeatherObject.js");
/* harmony import */ var _generateWeatherDescriptors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateWeatherDescriptors */ "./src/generateWeatherDescriptors.js");
/* harmony import */ var _updateDom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateDom */ "./src/updateDom.js");
/* harmony import */ var _modalFunctionality__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modalFunctionality */ "./src/modalFunctionality.js");






// final function to run things
const executeWeather = function() {
  _createWeatherObject__WEBPACK_IMPORTED_MODULE_0__.default.pullWeatherObject().then(function(result) {
    const weatherDescriptor = _generateWeatherDescriptors__WEBPACK_IMPORTED_MODULE_1__.default.weatherDescriptors(result);
    (0,_updateDom__WEBPACK_IMPORTED_MODULE_2__.default)('Redwood City', weatherDescriptor);
  })
}

;(0,_modalFunctionality__WEBPACK_IMPORTED_MODULE_3__.default)();
executeWeather();

// TODO: Create a clothing module to help us select what clothes to wear
// TODO: Build out functionality for info and location bar
// TODO: Module to search for a new location
// TODO: Responsive design 

// TODO: Store current city + weather descriptor in storage, so we dont have to wait for api pull when we load page


/***/ }),

/***/ "./src/modalFunctionality.js":
/*!***********************************!*\
  !*** ./src/modalFunctionality.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
// Get the modal
var modal = document.getElementById("information");

// Get the button that opens the modal
var btn = document.getElementById("help");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


const modalFunctionality = function() {

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalFunctionality);

/***/ }),

/***/ "./src/updateDom.js":
/*!**************************!*\
  !*** ./src/updateDom.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
const cityName = document.getElementById('city-name');
const currentTemp = document.getElementById('current-temperature');
const dayTemp = document.getElementById('day-temp');
const nightTemp = document.getElementById('night-temp');
const weatherDescription = document.getElementById('weather-description-text');



const removeVisibleTag = function() {
    const allIcons = document.getElementsByClassName('circle');
    for (let i=0; i < allIcons.length; i++) {
        allIcons[i].classList.remove('visible');
    }
}


const updateDom = function(city, weatherObj) {
    
    // change all text
    cityName.innerText = city;
    currentTemp.innerText = weatherObj.currentTemp;
    dayTemp.innerText = weatherObj.dayTemp;
    nightTemp.innerText = weatherObj.nightTemp;
    weatherDescription.innerText = weatherObj.weatherDescriptionText;
    
    //change the icon/background
    const icon = document.getElementById(weatherObj.condition);
    removeVisibleTag();

    document.body.classList = weatherObj.condition;
    icon.classList.add('visible');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateDom);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.js.map