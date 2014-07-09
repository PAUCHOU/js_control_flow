var data = require("./products.json")

// Write your solutions below
//1.) The `kind` of results you're are dealing  are `shopping#products`. 
//Go through the `items` and find all results that have `kind` of `shopping#product`. 
//How many are there? Where else is this count information stored in the search results?
//Solutions #1
var instances = 0;

var items = data.items;

for (var i = 0; i < items.length; i += 1) {
	if (items[i].kind === "shopping#product") {
instances += 1;
	}
}

// console.log(data["items"]);
//console.log(instances);

//2.) Find all items with a `backorder` availability in `inventories`.
//Solutions #2

for (var i = 0, instances = 0; i < items.length; i += 1){
	for (var j = 0; j < items[i].product.inventories.length; j += 1){
		if (items[i].product.inventories[j].availability === "backorder"){
			console.log(items[i]);
			instances += 1;
		}
	}	
}
console.log(instances);

//3.) Find all items with more than one image link.

for (var i = 0; instances = 0; i < items.length; i += 1){
	if (items[i].product.images.length > 1;{
		console.log("title");
	}
}


//4.) Find all `canon` products in the items (careful with case sensitivity).

for (var i = 0; instance = 0; i < items.length; i += 1){
	if(items[i].product.brand === "Canon"){
		console.log("title");
	}
}

//5.) Find all `items` that have **product** **author** **name** of "eBay" and are brand "Canon".
for (var i = 0; instance = 0; i < items.length; i++){
	if(items[i].product.brand.author.name; brand === "Canon" && name ==="eBay"){
		console.log(product.title);
	}
}

//6.) Print all the products with their **brand**, **price**, and a **image link**
while (var i = 0; instance = 0; i < items.length; i ++)
	if(items[i].product.brand.price; items[i] === "Links"){
		console.log(price + brand + product.title + Links);
	}
}




