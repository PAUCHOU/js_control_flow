//Take an input like

//var thing = "cat"
//var count = "5"
//and output the pluralized form of the word like "5 cats" or "1 dog"..

var pluralizer = function(thing, count);
if (count > 1) {
	return count + " " + thing + "s";
}
else {
		return count + " " + thing;
}


console.log(pluralizer);