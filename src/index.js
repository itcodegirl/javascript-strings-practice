let country = "Guinea Bissau";
let city = " Sydney   ";
let place = "School";
let attraction = "Opera House";

//Challenge 1 - First Option
country = country.replace(/\s+/g, "-");
console.log(country);

//Challenge 1 - Second Option
country = country.split(/[\s]+/).join("-");
console.log(country);

//Challenge 2
city = city.trim();
console.log(city);

//Challenge 3
attraction = attraction.toLowerCase();
console.log(attraction);

//Challenge 4
place = place.toUpperCase();
console.log(place);

//Challenge 5
let sentence = `I went to visit the ${attraction} in ${city}, 
right next to my ${place}. Now, I'm getting ready for my trip to ${country}!`;
console.log(sentence);
