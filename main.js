/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createOutfitArray.js":
/*!**********************************!*\
  !*** ./src/createOutfitArray.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
const tempGuide = [
    {
        temp: 'hot',
        tops: ['tank_tops', 'dresses'],
        bottoms: ['shorts', 'skirts_short'],
        jackets: [],
        accessories: ['other'],
    },
    {
        temp: 'warm',
        tops: ['short_sleve_shirts', 'dresses'],
        bottoms: ['shorts', 'skirts_med'],
        jackets: ['light'],
        accessories: ['other'],
    },
    {
        temp: 'nice',
        tops: ['short_sleve_shirts'],
        bottoms: ['long', 'skirts_med'],
        jackets: ['medium'],
        accessories: ['scarves'],
    },
    {
        temp: 'chilly',
        tops: ['short_sleve_shirts', 'dresses'],
        bottoms: ['long'],
        jackets: ['heavy', 'medium'],
        accessories: ['scarves'],
    },
    {
        temp: 'freezing',
        tops: ['short_sleve_shirts', 'dresses'],
        bottoms: ['shorts'],
        jackets: ['heavy'],
        accessories: ['scarves'],
    }
]

const fillClothingArray = function() {
    let allClothingItems = [];

    const createClothingObject = function(category, subcategory, filestructure, source) {
        let fullSource = `${filestructure}/${source}`
        return {
            category,
            subcategory,
            source: fullSource
        }
    }

    const generateClothingArray = function(category, subcategory, filestructure, links) {
        for (let i=0; i<links.length; i++) {
            const newClothingItem = createClothingObject(category, subcategory, filestructure, links[i])
            allClothingItems.push(newClothingItem);
        }
    };

    generateClothingArray('accessories2', 'beanies/gloves', `./icons/clothing/accessories/beanies+gloves`, ['003-winter hat.svg', '007-glove.svg', '040-beanie.svg', 'gloves.svg', 'mittens.svg', 'winter-hat.svg'])
    generateClothingArray('accessories2', 'hat', `./icons/clothing/accessories/hat`, ['005-beret.svg', '021-cap.svg', '041-baseball-cap.svg', 'cap.svg', 'pamela.svg'])
    generateClothingArray('accessories', 'other', `./icons/clothing/accessories/other`, ['007-sunglasses-1.svg', '024-glasses.svg', '025-sunglasses.svg', '027-belt.svg', '036-bow-tie.svg', '039-belt.svg', '045-bow tie.svg','belt.svg', 'bow-tie.svg', 'glasses.svg', 'wristwatch.svg', ])
    generateClothingArray('accessories', 'scarves', `./icons/clothing/accessories/scarves`, ['scarf.svg', '049-scarf.svg'])
    generateClothingArray('seasonal', 'umbrella', `./icons/clothing/accessories/umbrella`, ['umbrella.svg'])

    generateClothingArray('bottoms', 'long', `./icons/clothing/bottoms/long`, ["017-pants.svg", "018-jeans.svg", "021-jeans.svg", "022-trousers.svg", "023-jeans.svg", "025-jeans.svg", "026-trousers.svg", "027-trousers.svg", "028-jeans.svg", "028-trousers.svg", "030-jeans.svg", "042-jogger pants.svg", "201-pants-1.svg", "201-pants-2.svg", "201-pants-3.svg", "201-pants-4.svg", "201-pants-5.svg", "201-pants-6.svg", "201-pants-7.svg", "201-pants.svg", "201-trousers-1.svg", "201-trousers-2.svg", "201-trousers-3.svg", "201-trousers-4.svg", "201-trousers-5.svg", "201-trousers-6.svg", "201-trousers-7.svg", "201-trousers.svg", "1026-trousers.svg", "jeans.svg", "pants.svg"] );
    generateClothingArray('bottoms', 'skirts_med', `./icons/clothing/bottoms/skirts_med`, ["023-maxi skirt.svg", "071-skirt.svg", "072-skirt.svg", "076-skirt.svg", "079-skirt.svg", "080-skirt.svg", "201-skirt-2.svg", "201-skirt-3.svg", "201-skirt-4.svg", "201-skirt-5.svg", "201-skirt-6.svg", "201-skirt-7.svg", "201-skirt-8.svg", "201-skirt-9.svg", "201-skirt-10.svg", "201-skirt-11.svg", "201-skirt-14.svg", "201-skirt-15.svg", "201-skirt-16.svg", "201-skirt-17.svg", "201-skirt-18.svg", "201-skirt-19.svg", "201-skirt-20.svg", "skirt-1.svg", "skirt.svg",]);
    generateClothingArray('bottoms', 'skirts_short', `./icons/clothing/bottoms/skirts_short`, ["009-skirt.svg","010-skirt.svg","037-skort.svg","073-skirt.svg","074-skirt.svg","075-skirt.svg","077-skirt.svg","078-skirt.svg","201-skirt-1.svg","201-skirt-12.svg","201-skirt-13.svg","201-skirt.svg",]);
    generateClothingArray('bottoms', 'shorts', `./icons/clothing/bottoms/shorts`, ["010-shorts.svg","011-shorts.svg","086-swimsuit.svg","087-shorts.svg","097-shorts.svg","098-shorts.svg","099-shorts.svg","100-shorts.svg","201-shorts-1.svg","201-shorts.svg","201-swimsuit-6.svg","201-swimsuit-7.svg","1011-shorts.svg","shorts-1.svg","shorts.svg",]);

    generateClothingArray('jackets', 'heavy', `./icons/clothing/jackets/heavy`, ["001-coat.svg","002-coat.svg","008-coat.svg","009-coat.svg","010-jacket.svg","032-coat.svg","041-coat.svg","043-coat.svg","093-coat.svg","094-coat.svg","095-coat.svg","201-coat-1.svg","201-coat-2.svg","201-coat-3.svg","201-coat-4.svg","201-coat-5.svg","201-coat-6.svg","201-coat-7.svg","201-coat-8.svg","201-coat-9.svg","201-coat-10.svg","201-coat-11.svg","201-coat-12.svg","201-coat-13.svg","201-coat-14.svg","201-coat-15.svg","201-coat-16.svg","201-coat-17.svg","201-coat-18.svg","201-coat-19.svg","201-coat-20.svg","201-coat-21.svg","201-coat-22.svg","201-coat-23.svg","201-coat-24.svg","201-coat-25.svg","201-coat-26.svg","201-coat-27.svg","201-coat-28.svg","201-coat-29.svg","201-coat-30.svg","201-coat-31.svg","201-coat-32.svg","201-coat-33.svg","201-coat.svg","coat.svg","jacket-1.svg","jacket-4.svg","trench-coat.svg",]);
    generateClothingArray('jackets', 'medium', `./icons/clothing/jackets/medium`, ["003-jacket.svg","004-jacket.svg","005-jacket.svg","019-jacket.svg","020-hoodie.svg","027-coat-1.svg","029-jacket.svg","041-jumper.svg","042-hoodie.svg","048-hoodie.svg","hoodie.svg","jacket-3.svg","jacket-5.svg","jacket-6.svg","jacket.svg",]);
    generateClothingArray('jackets', 'light', `./icons/clothing/jackets/light`, ["cardigan.svg","083-poncho.svg","044-cardigan.svg","035-poncho.svg",]);

    generateClothingArray('tops', 'long_sleve_shirts', `./icons/clothing/tops/long_sleve_shirts`, ["012-shirt-1.svg","016-shirt.svg","019-sweater.svg","020-flannel.svg","020-shirt.svg","036-Turtleneck.svg","038-sweater.svg","043-jumper.svg","044-jumper.svg","045-shirt.svg","046-shirt.svg","047-jumper.svg","050-shirt.svg","1016-shirt.svg","pullover.svg","shirt-1.svg",]);
    generateClothingArray('tops', 'dresses', `./icons/clothing/tops/dresses`, ["028-dress-1.svg","029-dress.svg","029-dungarees.svg","046-gown.svg","053-dress.svg","056-jumpsuit.svg","057-dress.svg","058-dress.svg","059-dress.svg","201-dress-1.svg","201-dress-2.svg","201-dress-3.svg","201-dress-4.svg","201-dress-5.svg","201-dress-6.svg","201-dress-7.svg","201-dress-8.svg","201-dress-9.svg","201-dress-10.svg","201-dress-11.svg","201-dress-12.svg","201-dress-13.svg","201-dress-14.svg","201-dress-15.svg","201-dress-16.svg","201-dress-17.svg","201-dress-18.svg","201-dress-19.svg","201-dress-20.svg","201-dress-21.svg","201-dress-22.svg","201-dress-23.svg","201-dress-24.svg","201-dress-25.svg","201-dress-26.svg","201-dress-27.svg","201-dress-30.svg","201-dress-31.svg","201-dress-32.svg","201-dress-34.svg","201-dress-35.svg","201-dress-36.svg","201-dress-37.svg","201-dress-38.svg","201-dress-39.svg","201-dress-40.svg","201-dress-41.svg","201-dress-42.svg","201-dress-43.svg","201-dress-44.svg","201-dress-45.svg","dress-1.svg","dress-2.svg","dress-3.svg","dress-4.svg","dress.svg","overall.svg",]);
    generateClothingArray('tops', 'short_sleve_shirts', `./icons/clothing/tops/short_sleve_shirts`, ["002-t shirt.svg", "003-shirt-2.svg", "004-polo.svg", "004-shirt.svg", "011-shirt.svg", "012-shirt.svg", "013-shirt.svg", "014-polo shirt.svg", "017-shirt.svg", "017-t-shirt.svg", "018-polo shirt.svg", "019-shirt.svg", "025-polo.svg", "033-dress.svg", "047-blouse.svg", "070-top.svg", "088-top.svg", "201-shirt-1.svg", "201-shirt-2.svg", "201-shirt-3.svg", "201-shirt-4.svg", "201-shirt-5.svg", "201-shirt-6.svg", "201-shirt-7.svg", "201-shirt-8.svg", "201-shirt-9.svg", "201-shirt-10.svg", "201-shirt-11.svg", "201-shirt-12.svg", "201-shirt-13.svg", "201-shirt-14.svg", "201-shirt.svg", "1013-shirt.svg", "dirty-clothes.svg", "polo.svg", "shirt-3.svg", "shirt.svg",]);
    generateClothingArray('tops', 'tank_tops', `./icons/clothing/tops/tank_tops`, ["061-vest.svg","063-top.svg","066-vest.svg","067-top.svg","068-top.svg","089-vest.svg","090-top.svg","201-sleeveless-1.svg","201-sleeveless-2.svg","201-sleeveless.svg","201-tank-top-1.svg","201-tank-top-2.svg","201-tank-top.svg","basketball-jersey.svg","blouse.svg","shirt-2.svg",]);

    return allClothingItems;
}

const randomNumberGenerator = function(options) {
    return Math.floor(Math.random() * options)
}

const randomArrayItem = function(clothingArray) {
    const i = randomNumberGenerator(clothingArray.length); 
    return clothingArray[i]
}

const pickRandomClothingItems = function(category, subcategory, array) {
    const filteredList = array.filter(function(e) {
        return ((e.category ===category) && (e.subcategory === subcategory));
    });
    return randomArrayItem(filteredList);
}






const createOutfitArray = function(weatherDescriptor) {
    const clothingArray = fillClothingArray();

    let finalClothingArray = []

    const dayWeatherObject = tempGuide.filter(e => e.temp === weatherDescriptor.dayDescription)[0];
    const nightWeatherObject = tempGuide.filter(e => e.temp === weatherDescriptor.nightDescription)[0];

    const pickClothingItem = function(weatherObject, type) {
        const topType = weatherObject[type];
        let detailedTopType = randomArrayItem(topType);
        let clothingGarment = pickRandomClothingItems(type, detailedTopType, clothingArray);
        
        return clothingGarment;
    }
    
    const addClothingItemsToArray = function() {
        // If there is a jacket, push jacket
        const jacket = pickClothingItem(nightWeatherObject, 'jackets');
        if(jacket != "") {finalClothingArray.push(jacket)};

        // push top
        const top = pickClothingItem(dayWeatherObject, 'tops');
        finalClothingArray.push(top);
        
        // if top is not a dress, push a bottom
        let bottom 
        if (top.subcategory != 'dresses') {
            bottom = pickClothingItem(dayWeatherObject, 'bottoms');
            finalClothingArray.push(bottom);
        }

        // push an accessory
        const accessories = pickClothingItem(nightWeatherObject, 'accessories');
        finalClothingArray.push(accessories);

        if (weatherDescriptor.condition === "rainy") {
            finalClothingArray.push (pickRandomClothingItems('accessories', 'umbrella', clothingArray));
        }

        if (weatherDescriptor.condition === "sunny") {
            finalClothingArray.push (pickRandomClothingItems('accessories2', 'hat', clothingArray));
        } else if (weatherDescriptor.nightDescription === "chilly" || weatherDescriptor.nightDescription === "freezing") {
            finalClothingArray.push (pickRandomClothingItems('accessories2', 'beanies/gloves', clothingArray));
        }
    }

// Completed - the push clothing item for top and bottom is done. 
// TODO - update night temp guide
    
    
    addClothingItemsToArray();
    return finalClothingArray;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createOutfitArray);

/***/ }),

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
/* harmony import */ var _createOutfitArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createOutfitArray */ "./src/createOutfitArray.js");







// final function to run things
const executeWeather = function() {
  _createWeatherObject__WEBPACK_IMPORTED_MODULE_0__.default.pullWeatherObject().then(function(result) {
    // generate the weather information and the outfit
    const weatherDescriptor = _generateWeatherDescriptors__WEBPACK_IMPORTED_MODULE_1__.default.weatherDescriptors(result);
    const todaysOutfit = (0,_createOutfitArray__WEBPACK_IMPORTED_MODULE_4__.default)(weatherDescriptor);

    // update the page with the array generated
    _updateDom__WEBPACK_IMPORTED_MODULE_2__.default.updateWeather('Redwood City', weatherDescriptor);
    _updateDom__WEBPACK_IMPORTED_MODULE_2__.default.updateOutfit(todaysOutfit);


    // console.log(todaysOutfit);
    // console.log(weatherDescriptor);
  })
}

;(0,_modalFunctionality__WEBPACK_IMPORTED_MODULE_3__.default)();
executeWeather();

// TODO: Create a clothing module to help us select what clothes to wear
// TODO: Create location bar input, hide (css), and then add ability to launch on click
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

const updateDom = function() {
    const removeVisibleTag = function() {
        const allIcons = document.getElementsByClassName('circle');
        for (let i=0; i < allIcons.length; i++) {
            allIcons[i].classList.remove('visible');
        }
    }

    const updateWeather = function(city, weatherObj) {
        
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

    const clearOutfits = function() {
        const outfitItems = document.getElementsByClassName('clothing');
        for (let i=0; i< outfitItems.length; i++) {          
              outfitItems[i].innerHTML  = ""
        }
    }

    const updateOutfit = function(outfitArray) {
        clearOutfits();
        
        for (let i=0; i<outfitArray.length; i++) {
            const newImage = document.createElement("img");
            const e = document.getElementById(outfitArray[i].category)
            newImage.setAttribute('src', outfitArray[i].source);
            newImage.setAttribute('alt', outfitArray[i].subcategory);

            e.appendChild(newImage);
        }
    }

    return {
        updateWeather,
        updateOutfit
    }
}();

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