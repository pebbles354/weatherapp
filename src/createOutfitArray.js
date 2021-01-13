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
        tops: ['short_sleve_shirts', 'dresses'],
        bottoms: ['long', 'skirts_med'],
        jackets: ['medium'],
        accessories: ['scarves'],
    },
    {
        temp: 'chilly',
        tops: ['short_sleve_shirts'],
        bottoms: ['long'],
        jackets: ['heavy', 'medium'],
        accessories: ['scarves'],
    },
    {
        temp: 'freezing',
        tops: ['short_sleve_shirts'],
        bottoms: ['long'],
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

        if (weatherDescriptor.condition === "rainy") {
            finalClothingArray.push (pickRandomClothingItems('seasonal', 'umbrella', clothingArray));
            return;
        }

        // push an accessory
        const accessories = pickClothingItem(nightWeatherObject, 'accessories');
        finalClothingArray.push(accessories);

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

export default createOutfitArray