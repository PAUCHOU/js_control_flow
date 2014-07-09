
//Hardcode an array of words. 
//Have a variable maxLength, and push those words to only to an array filter long words
var fruit = ["apples","oranges","banana","pears","grapes"];
var maxLength = 3;

var fruitTake = []

for (i =0; i < fruit.length; i++){
	var fruitLength = fruit[i].length;
	if (fruitLength <= maxLength);{
		fruitTake.push(fruit[i]);
	}

}
console.log(fruitTake);